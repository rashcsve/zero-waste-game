import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/general-info",
    name: "GeneralInfo",
    component: () =>
      import(
        /* webpackChunkName: "InitialTest" */ "../components/levels/GeneralInfo.vue"
      )
  },
  {
    path: "/recycle",
    name: "Recycle",
    component: () =>
      import(
        /* webpackChunkName: "InitialTest" */ "../components/levels/Recycle.vue"
      )
  },
  {
    path: "/reuse",
    name: "Reuse",
    component: () =>
      import(
        /* webpackChunkName: "InitialTest" */ "../components/levels/Reuse.vue"
      )
  },
  {
    path: "/reduce-refuse",
    name: "ReduceRefuse",
    component: () =>
      import(
        /* webpackChunkName: "InitialTest" */ "../components/levels/ReduceRefuse.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
