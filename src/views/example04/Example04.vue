<template>
  <div>
    <h1>Computed</h1>
    <p>
      对于所有的数据绑定，Vue.js都提供了完全的JavaScript
      表达式支持，表达式会作为JavaScript解析
    </p>
    {{ isShow ? "为true显示" : "为false显示" }}
    <br />
    {{ reverseMessage }}
    <hr />
    {{ user.inserTime }}
    <br />
    {{ myDate }}
    <br />
    <p>基于计算属性，但计算属性是一个方法</p>
    {{ a(user.insertTime) }}
    <!-- {{
      message
        .split("")
        .reverse()
        .join("")
    }}-->
  </div>
</template>
<script>
export default {
  data: () => ({
    isShow: false,
    message: "hello",
    user: { name: "GT", insertTime: "2019-05-14T16:15:59" }
  }),
  computed: {
    //对于复杂逻辑，应使用计算属性(computed)
    reverseMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    myDate() {
      return this.user.insertTime.replace("T", " ");
    },
    a() {
      return d => d.replace("T", " ");
    }
  }
};
</script>
