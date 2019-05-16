// Homeworktable组件负责选择作业表格
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>deadline</th>
          <th>操作</th>
        </tr>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index }}</td>
        <td>{{ h.name }}</td>
        <td>{{ h.deadline }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  data: () => ({
    homeworks: []
    // 运行时public下文件自动发布到应用根目录
  }),
  created() {
    bus.$on(bus.homeworks, data => {
      this.homeworks = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.homeworks);
  }
};
</script>
