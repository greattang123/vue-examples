<template>
  <div>
    <h1>Router Passing Patameter</h1>
    sutdent ID:{{ $route.params.sid }}
    <br />
    homework ID:{{ $route.params.hid }}
  </div>
</template>
<script>
export default {
  created() {
    /* 可基于参数，异步请求数据，再渲染
        路由参数被置于，this.$route.params */
    console.log(this.$route.params.sid);
    console.log(this.$route.params.hid);
  }
};
</script>
