<template>
  <div>
    <h1>Welcome，{{ user.userName }}</h1>
    <router-link to="/example11/addresses">v-modele双向绑定</router-link>
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  data: () => ({
    user: { userName: null }
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
