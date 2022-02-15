import { createRouter, createWebHistory } from "@ionic/vue-router";
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from "../views/TabsPage.vue";
import Home from "@/views/Home.vue";
import Item from "@/views/Item.vue";
import Brand from "@/views/Brand.vue";
import Contents from "@/views/Contents.vue";
import Mypage from "@/views/Mypage.vue";
import LoginPage from "../views/pages/Login.vue";
import BrandDetails from "@/views/pages/BrandDetails.vue";
import TokenService from "@/services/TokenService";

// function guest(to, from, next) {
//   if (localStorage.token) {
//     next({ name: "Home" });
//     alert("You already logged in");
//   } else next();
// }

// function guard(to, from, next) {
//   if (localStorage.token) {
//     next();
//   } else {
//     next({ name: "LoginPage" });
//     alert("Please login to access");
//   }
// }

function guest(to, from, next) {
  var currentTime = new Date().getTime();
  console.log('guest_currentTime', currentTime);
  console.log('expireTime', localStorage.tokenexpiresAt);
  console.log(localStorage.tokenexpiresAt < currentTime);
  if (!localStorage.token || !localStorage.tokenexpiresAt || (localStorage.tokenexpiresAt && localStorage.tokenexpiresAt < currentTime)) {
    next();
  } else {
    next({ name: "Mypage" });
    console.log("You already logged in");
  }
}

function guard(to, from, next) {
  // var currentTime = new Date().getTime();
  // console.log('guard_currentTime', currentTime);
  // if (!localStorage.token || !localStorage.tokenexpiresAt || (localStorage.tokenexpiresAt && localStorage.tokenexpiresAt < currentTime)) {
    console.log('isAuth', isAuth());
  if (isAuth()) {
    next({ name: "LoginPage" });
    console.log("Please login to access");
  } else {
    next();
  }
}

var tokenService = new TokenService();
function isAuth() {
  var currentTime = new Date().getTime();
  console.log('isAuth_currentTime', currentTime);
  //check for Invalid authendication
  if (!localStorage.token || !localStorage.tokenexpiresAt) {
    return false;
  } else if (localStorage.token && localStorage.tokenexpiresAt && localStorage.tokenexpiresAt < currentTime) {
    return tokenService.getRefreshToken()
      .then(function (res) {
        console.log('res', res.status);
        if (res.status && res.status !== 200) {
          return false;
        } else {
          var d = res.data.tokenexpiresAt;
          var position = d.search(" ");
          var dateTime = new Date(d.substring(0, position)).getTime();
          console.log('dateTime', dateTime);
          var token_expiresAt = dateTime;
          
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('tokenexpiresAt', token_expiresAt);
          return true;
        }
      })
  } else if (localStorage.token && localStorage.tokenexpiresAt && localStorage.tokenexpiresAt > currentTime) {
    return true;
  } else {
    return false;
  }
}

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      mainHeader: true,
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/utilities/NotFound.vue"),
    meta: {
      mainHeader: true,
    }
  },
  {
    path: "/login",
    name: "LoginPage",
    beforeEnter: guest,
    component: LoginPage,
    meta: {
      innerHeader: true,
    }
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
        meta: {
          mainHeader: true,
        }
      },
      {
        path: "item",
        name: "Item",
        component: Item,
        meta: {
          mainHeader: true,
        }
      },
      {
        path: "brands",
        name: "Brand",
        component: Brand,
        meta: {
          mainHeader: true,
        },
      },
      {
        path: "/brands/:id",
        name: "BrandDetails",
        component: BrandDetails,
        meta: {
          innerHeader: true,
        }
      },
      {
        path: "contents",
        name: "Contents",
        component: Contents,
        meta: {
          innerHeader: true,
        }
      },
      {
        path: "mypage",
        name: "Mypage",
        beforeEnter: guard,
        component: Mypage,
        meta: {
          innerHeader: true,
        }
      },
    ],
  },
  {
    path: "/notification",
    name: "Notifications",
    component: () => import("@/views/pages/Notifications.vue"),
    meta: {
      innerHeader: true,
    }
  },
  // {
  //   path: "/brands/:id",
  //   name: "BrandDetails",
  //   component: () => import("@/views/pages/BrandDetails.vue"),
  //   meta: {
  //     innerHeader: true,
  //   }
  // },
  {
    path: "/link-channel",
    name: "LinkChannel",
    component: () => import("@/views/pages/LinkChannel.vue"),
  },
  {
    path: "/product-details",
    name: "ItemDetails",
    component: () => import("@/views/pages/ItemDetails.vue"),
  },
  {
    path: "/fb-login",
    name: "facebookLogin",
    component: () => import("@/views/pages/FbLogin.vue"),
  },
  {
    path: "/slider",
    name: "Slider",
    component: () => import("@/views/pages/Slider.vue"),
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
