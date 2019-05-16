<template>
  <div>
    <h1>绑定子组件属性</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>dedline</th>
          <th>操作</th>
        </tr>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index }}</td>
        <td>{{ h.name }}</td>
        <td>{{ h.deadline }}</td>
        <td>
          <delbutton v-bind:homework="h" />
          <!-- 绑定子组件props中的属性并将绑定对象注入 -->
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  components: { delbutton: () => import("@/views/example08/DellButton") },
  data: () => ({
    homeworks: [
      { id: 1, name: "Java基本数据类型", deadline: "2019-05-15T21:00" },
      { id: 2, name: "Java封装", deadline: "2019-06-15T22:00" },
      { id: 3, name: "Java泛型", deadline: "2019-07-15T23:00" }
    ]
  })
};
</script>
