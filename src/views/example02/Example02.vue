<template>
  <div>
    <h1>Data() Return</h1>
    {{ msg }}
    <button @click="changeMsg">change msg</button>
    <hr />
    {{ user.name }}/{{ user.address }}
    <br />
    <button @click="changeUser">change user</button>
  </div>
</template>
<script>
export default {
  /*  data() {
    return {
      //return中声明响应式数据
      msg: "你好"
    };
     {{ msg }}双大括号引用data()return中声明的属性
  }, */
  //简化return写法({})
  data: () => ({
    msg: "你好",
    user: { name: null, address: null }
  }), //第一个()放参数，返回格式必须为({})
  methods: {
    changeMsg() {
      this.msg = "Hello World"; //必须使用this，声明为当前Vue对象的引用
      //重新赋值，由于是响应式数据，视图中的内容将同步更新
    },
    changeUser() {
      this.user.name = "GT";
      this.user.address = "302";
    }
  }
};
</script>
