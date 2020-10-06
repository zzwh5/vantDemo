<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>
<script>
import { apiAddress } from "@/request/api";
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    // console.log(apiAddress);
    apiAddress()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>
<style scoped lang="scss">
</style>