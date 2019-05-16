import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/example01",
      //延迟加载组件
      component: () => import("@/views/example01/Example01.vue")
    },
    {
      path: "/example02",
      component: () => import("@/views/example02/Example02.vue")
    },
    {
      path: "/example03",
      component: () => import("@/views/example03/Example03.vue")
    },
    {
      path: "/example03-02",
      component: () => import("@/views/example03/Example03-02.vue")
    },
    {
      path: "/example04",
      component: () => import("@/views/example04/Example04.vue")
    },
    {
      path: "/example05/sdudents/:sid/homeworks/:hid",
      component: () => import("@/views/example05/Example05.vue")
    },
    {
      path: "/example06-01",
      component: () => import("@/views/example06/Example06-01.vue")
    },
    {
      path: "/example06-02",
      component: () => import("@/views/example06/Example06-02.vue")
    },
    {
      path: "/example06-03",
      component: () => import("@/views/example06/Example06-03.vue")
    },
    {
      path: "/example07-01",
      component: () => import("@/views/example07/Example07-01.vue")
    },
    {
      path: "/example07-02",
      component: () => import("@/views/example07/Example07-02.vue")
    },
    {
      path: "/example07-03",
      component: () => import("@/views/example07/Example07-03.vue")
    },
    {
      path: "/example08",
      component: () => import("@/views/example08/Example08-01.vue")
    },
    {
      path: "/example09",
      component: () => import("@/views/example09/Example09.vue")
    },
    {
      path: "/example10",
      component: () => import("@/views/example10/Example10.vue")
    },
    {
      path: "/example11",
      component: () => import("@/views/example11/Login.vue")
    },
    {
      path: "/example11/welcome",
      component: () => import("@/views/example11/Welcome.vue")
    },
    {
      path: "/example11/addresses",
      component: () => import("@/views/example11/AddressTable.vue")
    }
  ]
});
