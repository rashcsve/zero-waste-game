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
    path: "/game",
    name: "Game",
    component: () =>
      import(/* webpackChunkName: "InitialTest" */ "../views/Game.vue")
  },
  {
    path: "/refuse",
    name: "Refuse",
    component: () =>
      import(/* webpackChunkName: "InitialTest" */ "../views/Refuse.vue")
  },
  {
    path: "/reduce",
    name: "Reduce",
    component: () =>
      import(/* webpackChunkName: "InitialTest" */ "../views/Reduce.vue")
  },
  {
    path: "/reuse",
    name: "Reuse",
    component: () =>
      import(/* webpackChunkName: "InitialTest" */ "../views/Reuse.vue")
  },
  {
    path: "/recycle",
    name: "Recycle",
    component: () =>
      import(/* webpackChunkName: "InitialTest" */ "../views/Recycle.vue")
  },
  {
    path: "/rot",
    name: "Rot",
    component: () =>
      import(/* webpackChunkName: "InitialTest" */ "../views/Rot.vue")
  },
  {
    path: "/congrats",
    name: "Congrats",
    component: () =>
      import(/* webpackChunkName: "InitialTest" */ "../views/Congrats.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
