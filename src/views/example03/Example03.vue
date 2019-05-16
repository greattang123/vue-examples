<template>
  <div>
    <h1>生命周期回调函数</h1>
    控制台查看结果
    <br />
    <router-link to="/example03-02">路由到02</router-link>
    <br />
    {{ user.name }}
  </div>
</template>
<script>
export default {
  data: () => ({
    user: { name: null, address: null }
  }),
  created() {
    console.log("1 created");
    this.user.name = "GT";
    this.user.address = "302";
  },
  beforeMount() {
    console.log("1 beforeMount");
  },
  mounted() {
    console.log("1 mounted");
  },
  beforeDestroy() {
    console.log("1 beforeDestroy");
  },
  destroyed() {
    console.log("1 destroyed");
  }
};
</script>
