<template>
  <div>
    <h5>Configuration GUI</h5>
    <div class="load">
      <ProgressSpinner
        v-if="isFetching"
        style="width: 40px; height: 40px"
        strokeWidth="4"
        fill="#EEEEEE"
        animationDuration=".5s"
      />
      <span class="config">{{ getError }}</span>
    </div>
    <div class="set" v-if="!isFetching">
      <Button
        class="set-btn"
        v-if="getResponse !== null"
        label="Refresh"
        @click="loadConfig"
      />

      <Button
        class="set-btn"
        v-if="getResponse !== null && postResponse === null"
        label="Config"
        @click="setConfig"
      />

      <Button
        class="set-btn"
        v-if="getResponse === null && postResponse === null"
        label="Retry"
        @click="loadConfig"
      />
    </div>

    <div class="card">
      <div class="card-header">
        <h5>Execution script</h5>
        <Button
          icon="pi pi-cog"
          class="p-button-rounded p-button-text"
          v-bind:class="{ 'p-button-secondary': !configuringExecutionFilePath }"
          @click="onClickConfigExecutionFilePath"
        />
      </div>
      <InputText
        ref="executionFilePathInput"
        placeholder="execution/file/path"
        v-model="executionFilePath"
        :disabled="!configuringExecutionFilePath"
      />
      <Button
        v-if="configuringExecutionFilePath"
        label="Save"
        @click="saveExecutionFilePath"
      />
    </div>

    <div class="card">
      <div class="card-header">
        <h5>IPAddress</h5>
        <Button
          icon="pi pi-cog"
          class="p-button-rounded p-button-text"
          v-bind:class="{ 'p-button-secondary': !configuringIpAddress }"
          @click="onClickConfigIpAddress"
        />
      </div>
      <InputText
        ref="ipAddressInput"
        placeholder="host:port"
        :disabled="!configuringIpAddress"
        v-model="ipAddress"
        v-bind:class="{ 'p-invalid': !ipAddressIsValid }"
        @blur="ipInputBlur"
      />
      <Button v-if="configuringIpAddress" label="Save" @click="saveIpAddress" />
    </div>

    <div class="card">
      <div class="card-header">
        <h5>TV config</h5>
        <Button
          icon="pi pi-cog"
          class="p-button-rounded p-button-text"
          v-bind:class="{ 'p-button-secondary': !configuringTvMode }"
          @click="onClickConfigTvMode"
        />
        <!-- <Dialog
          header="TV MODE"
          v-model:visible="displayModal"
          :style="{ width: '70vw' }"
          :modal="true"
          :closable="false"
          :closeOnEscape="false"
        >
          <Card style="width: 25rem; margin-bottom: 2em">
            <template #title> Simple Card </template>
            <template #content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
          </Card>

          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              @click="closeModal"
              class="p-button-text"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              @click="closeModal"
              autofocus
            />
          </template>
        </Dialog> -->
      </div>
      <CascadeSelect
        ref="tvModeSelect"
        v-if="configuringTvMode"
        v-model="tvMode"
        :options="tvModeOption"
        :optionLabel="optionLabelGetter"
        optionGroupLabel="groupName"
        :optionGroupChildren="['data']"
        style="minwidth: 14rem"
        placeholder="Select tv mode"
        @change="tvModeSelectChange"
        @group-change="tvModeGroupChange"
      />

      <div v-if="!configuringTvMode">
        <div>
          <span class="tv-label">group name: </span
          ><span class="tv-value">{{ tvModeGroup?.groupName }}</span>
        </div>
        <div>
          <span class="tv-label">width: </span
          ><span class="tv-value">{{
            tvMode?.width ? `${tvMode.width}px` : ""
          }}</span>
        </div>
        <div>
          <span class="tv-label">height: </span
          ><span class="tv-value">{{
            tvMode?.height ? `${tvMode.height}px` : ""
          }}</span>
        </div>
        <div>
          <span class="tv-label">rate: </span
          ><span class="tv-value">{{
            tvMode?.rate ? `${tvMode.rate}hz` : ""
          }}</span>
        </div>
        <div>
          <span class="tv-label">aspect ratio: </span
          ><span class="tv-value">{{ tvMode?.aspect_ratio }}</span>
        </div>
      </div>
    </div>

    <Toast />
  </div>
</template>

<style>
.load {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
}
.config {
  margin-left: 8px;
}
.set .set-btn:not(:last-child) {
  margin-right: 16px;
}

.card {
  width: 400px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tv-label {
  opacity: 0.7;
}
.tv-value {
}
</style>

<script>
import axios from "axios";
const domain = window.location.hostname;

export default {
  name: "GetRequest",
  data() {
    return {
      isFetching: false,
      getResponse: null,
      getError: null,
      postResponse: null,
      postError: null,

      executionFilePath: null,
      executionFilePathIsValid: true,
      configuringExecutionFilePath: null,

      ipAddress: null,
      ipAddressIsValid: true,
      configuringIpAddress: null,

      tvMode: null,
      tvModeGroup: null,
      configuringTvMode: null,
      displayModal: false,
      tvModeOption: [
        {
          groupName: "DMT",
          groupId: 2,
          data: [
            {
              code: 4,
              width: 640,
              height: 480,
              rate: 60,
              aspect_ratio: "4:3",
              scan: "p",
              "3d_modes": [],
            },
            {
              code: 5,
              width: 640,
              height: 480,
              rate: 72,
              aspect_ratio: "4:3",
              scan: "p",
              "3d_modes": [],
            },
          ],
        },
        {
          groupName: "CEA",
          groupId: 1,
          data: [
            {
              code: 1,
              width: 640,
              height: 480,
              rate: 60,
              aspect_ratio: "4:3",
              scan: "p",
              "3d_modes": [],
            },
            {
              code: 2,
              width: 720,
              height: 480,
              rate: 60,
              aspect_ratio: "4:3",
              scan: "p",
              "3d_modes": [],
            },
          ],
        },
      ],
    };
  },
  created() {
    this.loadConfig();
    this.loadExecutionFilePath();
  },
  methods: {
    loadExecutionFilePath() {
      // this.isFetching = true;
      axios
        .get(`http://${domain}:3000/getBashFilePath`)
        .then((response) => {
          setTimeout(() => {
            this.executionFilePath = response.data;
            // this.isFetching = false;
          }, 500);
        })
        .catch((error) => {
          setTimeout(() => {
            this.getError = error.message;
            console.error("There was an error by GET!", error);
            // this.isFetching = false;
          }, 500);
        });
    },
    setExecutionFilePath() {
      if (this.getResponse) {
        // this.isFetching = true;
        axios
          .post(
            `http://${domain}:3000/setBashFilePath`,
            this.executionFilePath,
            { headers: { "Content-Type": "text/plain" } }
          )
          .then((response) => {
            setTimeout(() => {
              this.executionFilePath = response.data;
              this.configuringExecutionFilePath = false;
              this.$toast.add({
                severity: "success",
                summary: "Successfully!",
                detail: "Set execution pile path successfully",
                life: 3000,
              });
              // this.isFetching = false;
            }, 500);
          })
          .catch((error) => {
            setTimeout(() => {
              this.postError = error.message;
              console.error("There was an error by POST!", error);
              // this.isFetching = false;
            }, 500);
          });
      }
    },
    setIpAddress() {
      if (this.getResponse) {
        // this.isFetching = true;
        const ipParser = this.ipAddress.split(":");

        axios
          .post(`http://${domain}:3000/setConfigure`, {
            host: ipParser[0],
            port: ipParser[1],
          })
          .then(() => {
            setTimeout(() => {
              this.configuringIpAddress = false;
              this.$toast.add({
                severity: "success",
                summary: "Successfully!",
                detail: "Set ip address successfully",
                life: 3000,
              });
              // this.isFetching = false;
            }, 500);
          })
          .catch((error) => {
            setTimeout(() => {
              this.postError = error.message;
              console.error("There was an error by POST!", error);
              // this.isFetching = false;
            }, 500);
          });
      }
    },
    setTvConfig() {
      if (this.getResponse) {
        // this.isFetching = true;
        axios
          .post(`http://${domain}:3000/setConfigure`, {
            tvConfig: {
              group: this.tvModeGroup.groupId,
              code: this.tvMode.code,
            },
          })
          .then(() => {
            setTimeout(() => {
              this.configuringTvMode = false;
              this.$toast.add({
                severity: "success",
                summary: "Successfully!",
                detail: "Set tv mode successfully",
                life: 3000,
              });
              // this.isFetching = false;
            }, 500);
          })
          .catch((error) => {
            setTimeout(() => {
              this.postError = error.message;
              console.error("There was an error by POST!", error);
              // this.isFetching = false;
            }, 500);
          });
      }
    },
    loadConfig() {
      this.isFetching = true;
      axios
        .get(`http://${domain}:3000/getConfigure`)
        .then((response) => {
          setTimeout(() => {
            this.getResponse = response.data;
            this.ipAddress = `${response.data?.host}:${response.data?.port}`;
            this.tvModeOption =
              response.data?.tvConfig?.support ?? this.tvModeOption;
            const currentMode = response.data?.tvConfig?.currentMode;
            const tvConfigGroup = response.data?.tvConfig?.support.find(
              (group) => group.groupId === currentMode.group
            );
            this.tvModeGroup = tvConfigGroup;
            this.tvMode = tvConfigGroup.data.find(
              (mode) => mode.code === currentMode.code
            );
            this.isFetching = false;
          }, 500);
        })
        .catch((error) => {
          setTimeout(() => {
            this.getError = error.message;
            console.error("There was an error by GET!", error);
            this.isFetching = false;
          }, 500);
        });
    },
    setConfig() {
      if (this.getResponse) {
        this.isFetching = true;
        axios
          .post(`http://${domain}:3000/setConfigure`, this.getResponse)
          .then((response) => {
            setTimeout(() => {
              this.postResponse = response.data;
              this.$toast.add({
                severity: "success",
                summary: "Successfully!",
                detail: "Set configure successfully",
                life: 3000,
              });

              setTimeout(() => {
                this.postResponse = null;
              }, 3000);
              this.isFetching = false;
            }, 500);
          })
          .catch((error) => {
            setTimeout(() => {
              this.postError = error.message;
              console.error("There was an error by POST!", error);
              this.isFetching = false;
            }, 500);
          });
      }
    },

    ipInputBlur() {
      console.log(this.ipAddress);
      if (this.ipAddress?.split(":").length === 2) {
        this.ipAddressIsValid = true;
      } else {
        this.ipAddressIsValid = false;
      }
    },

    onClickConfigExecutionFilePath() {
      this.configuringExecutionFilePath = !this.configuringExecutionFilePath;
      setTimeout(() => {
        this.$refs.executionFilePathInput.$el.focus();
      });
    },

    onClickConfigIpAddress() {
      this.configuringIpAddress = !this.configuringIpAddress;
      setTimeout(() => {
        this.$refs.ipAddressInput.$el.focus();
      });
    },

    onClickConfigTvMode() {
      this.configuringTvMode = !this.configuringTvMode;
      setTimeout(() => {
        this.$refs.tvModeSelect.$el.focus();
      });
      // this.openModal();
    },
    // openModal() {
    //   this.displayModal = true;
    // },
    // closeModal() {
    //   this.displayModal = false;
    //   this.configuringTvMode = false;
    // },
    tvModeGroupChange(e) {
      console.log(e.value);
      console.log(e.value.groupName);
      this.tvModeGroup = {
        groupName: e.value.groupName,
        groupId: e.value.groupId,
      };
    },
    tvModeSelectChange(e) {
      console.log(e.value.code);
      this.setTvConfig();
      this.configuringTvMode = false;
    },
    optionLabelGetter: function (mode) {
      return `${mode.width}x${mode.height}, ${mode.rate}hz, ${mode.aspect_ratio}`;
    },

    saveExecutionFilePath() {
      if (this.executionFilePath.trim()) {
        this.setExecutionFilePath();
      }
    },
    saveIpAddress() {
      if (this.ipAddressIsValid) {
        this.setIpAddress();
      }
    },
  },
};
</script>
