<template>
  <div class="card text-center m-3">
    <h5 class="card-header">Configuration WebUI</h5>
    <div class="card-body">{{ response }}{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetRequest",
  data() {
    return {
      response: null,
      error: null,
    };
  },
  created() {
    const domain = window.location.hostname;
    axios
      .get(`http://${domain}:3000`)
      .then((response) => {
        console.log('FE');
        this.response = response.data;
        console.log(this.response);
      })
      .catch((error) => {
        this.error = error.message;
        console.error("There was an error!", error);
      });
  },
};
</script>
