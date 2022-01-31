import { createRouter, createWebHistory } from "@ionic/vue-router";
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from "../views/TabsPage.vue";
import Home from "@/views/Home.vue";
import Item from "@/views/Item.vue";
import Brand from "@/views/Brand.vue";
import Contents from "@/views/Contents.vue";
import Mypage from "@/views/Mypage.vue";
import Login from "../views/pages/Login.vue";

function guest(to, from, next) {
  if (localStorage.token) {
    next({ name: "home" });
    alert("You already logged in");
  } else next();
}

function guard(to, from, next) {
  if (localStorage.token) {
    next();
  } else {
    next({ name: "Login" });
    alert("Please login to access");
  }
}

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/utilities/NotFound.vue"),
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: guest,
    component: Login,
  },
  // Tabs
  {
    path: "/",
    name: "TabPage",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "item",
        name: "Item",
        component: Item,
      },
      {
        path: "brand",
        name: "Brand",
        component: Brand,
      },
      {
        path: "contents",
        name: "Contents",
        component: Contents,
      },
      {
        path: "mypage",
        name: "Mypage",
        beforeEnter: guard,
        component: Mypage,
      },
    ],
  },
  {
    path: "/brand-details",
    name: "BrandDetails",
    component: () => import("@/views/pages/BrandDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     var isAuthenticated = false;
//     if (localStorage.getItem('LoggedUser'))
//       isAuthenticated = true;
//     else
//       isAuthenticated = false;
//     if (!isAuthenticated) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// });

export default router;
