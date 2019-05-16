// Header组件负责基于用户数据渲染
<template>
  <div>欢迎访问，{{ user.name }}</div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  data: () => ({
    user: { id: null, name: null }
  }),
  created() {
    bus.$on(bus.user, data => {
      this.user = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.user);
  }
};
</script>
