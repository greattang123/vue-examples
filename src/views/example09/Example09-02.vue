<template>
  <div>绑定的数据:{{ name }}</div>
</template>
<script>
import bus from "@/util/Bus";
// 监听组件引入bus
export default {
  data: () => ({ name: null }),
  //注册监听
  created() {
    /* 在created回调中注册监听指定事件
通过回调获取返回结果； $on(event, callback)，监听指定事件，组件在created()中注册事件监听*/
    bus.$on(bus.name, data => {
      this.name = data;
    });
  },
  //销毁前取消监听
  beforeDestroy() {
    bus.$off(bus.name);
  }
};
</script>
