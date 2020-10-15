<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary" @click.native="show = true">选择日期</van-button>
    <!-- <vue-hash-calendar :visible="true" model="dialog"></vue-hash-calendar> -->
    <calendar :show.sync="show" @change="changeDate"> </calendar>
  </div>
</template>
<script>
import { apiAddress } from "@/request/api";
// 时间解析
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      show: false
    };
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
  methods: {
    // 确定选择的日期
    changeDate(e) {
      console.log(e);
      console.log(moment(e.$d).format("MMMM Do YYYY, h:mm:ss a"));
      this.show = false;
    }
  }
};
</script>
<style scoped lang="scss">
</style>