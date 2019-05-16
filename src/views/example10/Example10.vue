<template>
  <div>
    <!-- 模拟主页包含header组件及Homework组件 -->
    <headerbar />
    <br />
    <homeworktable />
  </div>
</template>
<script>
// 加载时调用封装的api请求
import { getMain } from "@/api/Main";
export default {
  components: {
    headerbar: () => import("@/views/example10/Header"),
    homeworktable: () => import("@/views/example10/HomeworkTable")
  },
  created() {
    getMain();
  }
};
</script>
