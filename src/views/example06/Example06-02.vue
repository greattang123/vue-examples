<template>
  <div>
    <h1>v-bind</h1>
    <label>
      <input type="checkbox" @click="setAgree" />
      同意以上条款
    </label>
    <br />
    <button v-bind:disabled="enabled">提交</button>
  </div>
</template>
<script>
export default {
  //v-bind 动态绑定html标签属性的表达式
  data: () => ({ enabled: true }),
  methods: {
    setAgree() {
      this.enabled = !this.enabled;
    }
  }
};
</script>
