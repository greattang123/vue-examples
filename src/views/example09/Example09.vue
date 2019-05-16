<template>
  <div>
    <div>
      <comp1 />
    </div>
    <div>
      <comp2 />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    //   2组件间没有任何耦合均与bus事件总线耦合
    comp1: () => import("@/views/example09/Example09-01"),
    comp2: () => import("@/views/example09/Example09-02")
  }
};
</script>
