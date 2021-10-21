import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { Auth0 } from "@/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: Auth0.routeGuard,
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/faunaapi",
    name: "FaunaApi",
    beforeEnter: Auth0.routeGuard,
    component: () =>
      import(/* webpackChunkName: "faunaapi" */ "../views/FaunaApi.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
