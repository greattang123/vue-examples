<template>
  <div>
    <h1>登录</h1>
    <p style="color:red">!向后端服务器发送请求，必须启动Springboot项目！</p>

    <form>
      用户名：
      <input v-model="user.userName" />
      <br />密码：
      <input type="password" v-model="user.password" />
      <br />
      <button type="button" @click="submit">登录</button>
    </form>
  </div>
</template>
<script>
import { login } from "@/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    user: { userName: null, password: null }
  }),
  created() {
    bus.$on(bus.loginSuccess, data => {
      if (data) {
        this.$router.push("/example11/welcome");
      }
    });
  },
  beforeDestroy() {
    bus.$off(bus.loginSuccess);
  },
  methods: {
    submit() {
      login(this.user);
    }
  }
};
</script>
