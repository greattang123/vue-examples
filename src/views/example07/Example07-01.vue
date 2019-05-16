<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <!-- v-model指令在表单元素上创建双向数据绑定 
      应该通过 JavaScript 在组件的 data ()中声明初始值-->
      <br />
      <label> <input type="radio" v-model="user.sex" value="male" />男 </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />女
      </label>
      <br />

      <template v-for="(c, index) in courses">
        <label :key="`1${index}`">
          <input
            type="checkbox"
            v-model="user.courses"
            :value="c.id"
            :key="index"
          />
          {{ c.name }}
        </label>
        <br :key="`b${index}`" />
        <!-- 由于label与checkbox与br是一组循环,故
        通过templete包裹-->
      </template>
      <br />

      <input type="file" @change="fileChange" />
      <!-- 双向绑定不支持上传文件必须使用onchange监听 -->
      <br />

      <select v-model="user.title">
        <option v-for="(t, index) in titles" :key="index" :value="t.id">
          {{ t.name }}
        </option>
      </select>
      <br />

      <button @click="submit" type="button">提交</button>
      <!-- 不能使用form表单提交类型 -->
    </form>

    <p>{{ user }}</p>

    <p v-if="user.file != null">{{ user.file.name }}/{{ user.file.size }}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    /* 只有在data() return中预定义的属性才支持响应式更新；因此即使当前不使用，而以后使用的属性，也必须提前定义，但可先置空引用null */
    user: {
      name: null,
      sex: null,
      courses: [],
      file: null,
      title: null
    },
    titles: [
      { id: 1, name: "讲师" },
      { id: 2, name: "副教授" },
      { id: 3, name: "教授" }
    ],
    courses: [
      { id: 4, name: "Java" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" }
    ]
  }),
  methods: {
    fileChange(event) {
      console.log(event.target.files[0]);
      this.user.file = event.target.files[0];
    },
    submit() {
      console.log(this.user);
    }
  }
};
</script>
