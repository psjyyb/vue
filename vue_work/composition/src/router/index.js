import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LifeCycle from "../components/LifeCycle.vue";
import Reactive from "../components/Reactive.vue";
import Computed from "../components/Computed.vue";
import Watch from "../components/Watch.vue";
import Watch2 from "../components/Watch2.vue";
import Props from "../components/Props.vue";
import Provide from "../components/Provide.vue";
import ProvideChild from "../components/ProvideChild.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/props",
    name: "props",
    component: Props,
  },
  {
    path: "/provide",
    name: "provide",
    component: Provide,
  },
  {
    path: "/provideChild",
    name: "provideChild",
    component: ProvideChild,
  },
  {
    path: "/watch",
    name: "watch",
    component: Watch,
  },
  {
    path: "/watch2",
    name: "watch2",
    component: Watch2,
  },
  {
    path: "/reactive",
    name: "reactive",
    component: Reactive,
  },
  {
    path: "/computed",
    name: "computed",
    component: Computed,
  },
  {
    path: "/lifeCycle",
    name: "lifeCycle",
    component: LifeCycle,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
