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
      <span class="config">{{ getResponse }}{{ getError }}</span>
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
    };
  },
  created() {
    this.loadConfig();
  },
  methods: {
    loadConfig() {
      this.isFetching = true;
      axios
        .get(`http://${domain}:3000/getConfigure`)
        .then((response) => {
          setTimeout(() => {
            this.getResponse = response.data;
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
  },
};
</script>
