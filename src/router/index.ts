import {
  createRouter,
  createWebHashHistory,
  isNavigationFailure,
} from "vue-router"

// Importing RouteLocationRaw as a type
import type { RouteLocationRaw, NavigationFailure, RouteRecordRaw } from "vue-router"

import About from "@/views/AboutView.vue"
import Home from "@/views/HomeView.vue"
import CatView from "@/views/CatView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => Home,
    name: "home",
    meta: { title: "Home" },
  },
  {
    path: "/about",
    component: () => About,
    name: "about",
    meta: { title: "About" },
  },
  {
    path: "/cat",
    component: () => CatView,
    name: "cat",
    meta: { title: "Cat" },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, _from, next) => {
//   if (to.name !== "network-error") {
//     return next({
//       name: "network-error",
//       query: { path: to.path },
//     })
//   }

if (to.meta && to.meta.title) {
  document.title = to.meta.title;
}
  next()
})

const rewriteRouterPushAndReplace = (
  name: "push" | "replace",
  targetFunc: (
    to: RouteLocationRaw
  ) => Promise<void | NavigationFailure | undefined>
) => {
  router[name] = async function (location) {
    return targetFunc.call(this, location).catch((err) => {
      if (!isNavigationFailure(err)) {
        throw err
      }
    })
  }
}

rewriteRouterPushAndReplace("push", router.push)
rewriteRouterPushAndReplace("replace", router.replace)

export default router
