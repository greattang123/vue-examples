<template>
  <div>
    <h1>v-if</h1>
    <input placeholder="Please enter your username" key="username" />
    <p>
      <span v-text="message"></span>
    </p>
    <h1>v-if</h1>
    <p v-if="isAdmin">此内容仅admin可见</p>

    <template v-if="isUserNameLogin">
      <!-- v-if是指令必须添加到HTML元素中 -->
      <input placeholder="Please enter your username" key="username" />
      <br />
      <input type="password" placeholder="Please enter your password" />
    </template>
    <template v-else>
      <input placeholder="Please enter your key" key="key" />
    </template>
    <br />
    <button v-on:click="changeInput">切换</button>
    <h1>v-show</h1>
    <p v-show="user.level == 'superadmin'">此内容仅superadmin可见</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "Hello World!",
    isAdmin: true,
    isUserNameLogin: true,
    user: { userName: "GT", level: "superadmin" }
  }),
  methods: {
    changeInput() {
      this.isUserNameLogin = !this.isUserNameLogin;
    }
  }
};
</script>
