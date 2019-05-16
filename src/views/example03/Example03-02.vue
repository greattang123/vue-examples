<template>
  <div>
    <h1>生命周期回调函数</h1>
    <router-link to="/example03">路由到01</router-link>
    {{ user.name }}
  </div>
</template>
<script>
export default {
  data: () => ({
    user: { name: null, address: null }
  }),
  created() {
    console.log("2 created");
    this.user.name = "GT";
    this.user.address = "302";
  },
  beforeMount() {
    console.log("2 beforeMount");
  },
  mounted() {
    console.log("2 mounted");
  },
  beforeDestroy() {
    console.log("2 beforeDestroy");
  },
  destroyed() {
    console.log("2 destroyed");
  }
};
</script>
