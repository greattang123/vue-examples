<template>
  <div>
    <form>
      <input type="text" v-model="user.name" />
      <br />

      <button type="button" @click="sendMessage">发送数据</button>
    </form>
  </div>
</template>
<script>
import bus from "@/util/Bus";
// 发送组件引入bus
export default {
  data: () => ({
    user: {
      name: null
    }
  }),
  methods: {
    sendMessage() {
      // $emit(event, message)，向指定事件发送数据
      bus.$emit(bus.name, this.user.name);
    }
  }
};
</script>
