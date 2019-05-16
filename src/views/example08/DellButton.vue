<template>
  <div>
    <button @click="open">删除</button>
    <!-- 将表格渲染与表格操作分离，独立的删除按钮组件 -->
  </div>
</template>
<script>
export default {
  // 父组件向子组件传递数据，可以通过在子组件中定义props属性，由父组件传入数据
  props: ["homework"],
  methods: {
    open() {
      console.log(this.homework);
      let con = confirm(`确定要删除:${this.homework.name}`);
      if (con == true) {
        alert(`${this.homework.name},已被删除`);
      } else {
        alert("已取消");
      }
    }
  }
};
</script>
