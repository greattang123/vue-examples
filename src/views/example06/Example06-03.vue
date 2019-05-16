<template>
  <div>
    <h1>v-for</h1>
    <ul>
      <li v-for="h in homeworks" v-bind:key="h.id">
        <router-link v-bind:to="`/homeworks/${h.id}`"
          >{{ h.name }}/{{ formatDate(h.deadline) }}</router-link
        >
        <!--  v-for使用item initems形式特殊语法(item为items别名，items为源数据组)，并基于ID绑定路由  -->
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>deadline</th>
          <th>do</th>
        </tr>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <!-- 第二项为循环的索引，也可用于绑定key属性 -->
        <td>{{ index }}</td>
        <td>{{ h.name }}</td>
        <td>{{ formatDate(h.deadline) }}</td>
        <td>
          <button @click="removeItem(index)">remove item</button>
          <!--  v-on监听DOM事件，并在触发时运行指定程序
绑定组件实例的，methods属性中声明的方法，可缩写
          如：v-on:click==>@click-->
        </td>
      </tr>
    </table>

    <p>
      动态追加数组中的数据
      <br />this.$set(vm.items,indexOfItem,newValue)
    </p>
    <button @click="addItem">add item</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    homeworks: [
      { id: 1, name: "Java基本数据类型", deadline: "2019-05-15T21:00" },
      { id: 2, name: "Java封装", deadline: "2019-06-15T22:00" },
      { id: 3, name: "Java泛型", deadline: "2019-07-15T23:00" }
    ]
  }),
  computed: {
    formatDate() {
      return date => date.replace("T", " ").substring(0, 16);
    }
  },
  methods: {
    addItem() {
      this.$set(this.homeworks, this.homeworks.length, {
        id: this.homeworks.length + 1,
        name: "Java多线程",
        deadline: new Date().toISOString()
      });
    },
    removeItem(index) {
      this.$delete(this.homeworks, index);
    }
  }
};
</script>
