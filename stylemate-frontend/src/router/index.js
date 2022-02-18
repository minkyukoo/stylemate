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
import Sponsorships from "../views/Sponsorship.vue";
import PostActivity from "../views/PostActivity.vue";
import MyPageLiked from "../views/MyPageLiked.vue";
import TokenService from "@/services/TokenService";


// Router guest
async function guest(to, from, next) {
  var isLogedIn = await isAuth();
  console.log('isLogedIn', isLogedIn);
  if (!isLogedIn) {
    next();
  } else {
    next({ name: "Mypage" });
    console.log("You already logged in");
  }
}

// Router guard
async function guard(to, from, next) {
  var isLogedIn = await isAuth();
  console.log('isLogedIn', isLogedIn);
  if (!isLogedIn) {
    next({ name: "LoginPage" });
    console.log("Please login to access");
  } else {
    next();
  }
}

// Authentication Checking for Invalid authendication
var tokenService = new TokenService(); // TokenService 
async function isAuth() {
  var currentTime = new Date().getTime();
  console.log('isAuth_currentTime', currentTime);
  //check for Invalid authendication
  if (!localStorage.token || !localStorage.tokenexpiresAt) {
    return false;
  } else if (localStorage.token && localStorage.tokenexpiresAt && localStorage.tokenexpiresAt < currentTime) {
    return await tokenService.getRefreshToken()
      .then(function (res) {
        console.log('res', res.status);
        if (res.status && res.status !== 200) {
          return false;
        } else {
          var d_expiresAt = res.data.expiresAt;
          var token_expiresAt = new Date(d_expiresAt).getTime();
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

// All routes
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
          innerHeader: true,
        }
      },
      {
        path: "brands",
        name: "Brand",
        component: Brand,
        meta: {
          innerHeader: true,
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
      {
        path: "/sponsorships",
        name: "Sponsorships",
        beforeEnter: guard,
        component: Sponsorships,
        meta: {
          innerHeader: true,
        }
      },
      {
        path: "/post-activity",
        name: "Post Activity",
        beforeEnter: guard,
        component: PostActivity,
        meta: {
          innerHeader: true,
        }
      },
      {
        path: "/mypage-liked",
        name: "MyPage Liked",
        // beforeEnter: guard,
        component: MyPageLiked,
        meta: {
          innerHeader: true,
        }
      },
    ],
  },
  {
    path: "/product-details",
    name: "ItemDetails",
    component: () => import("@/views/pages/ItemDetails.vue"),
    meta: {
      innerHeader: true,
    }
  },
  {
    path: "/notification",
    name: "Notifications",
    component: () => import("@/views/pages/Notifications.vue"),
    meta: {
      innerHeader: true,
    }
  },
  {
    path: "/userinfo",
    name: "Userinfo",
    component: () => import("@/views/pages/Userinfo.vue"),
    meta: {
      innerHeader: true,
    }
  },
  {
    path: "/changeuserinfo",
    name: "ChangeUserinfo",
    component: () => import("@/views/pages/ChangeUserinfo.vue"),
    meta: {
      innerHeader: true,
    }
  },
  {
    path: "/addaddress",
    name: "AddAddress",
    component: () => import("@/views/pages/AddAddress.vue"),
    meta: {
      innerHeader: true,
    }
  },
  {
    path: "/shippingInfo",
    name: "ShippingInfo",
    component: () => import("@/views/pages/ShippingInfo.vue"),
    meta: {
      innerHeader: true,
    }
  },
  {
    path: "/deliveryaddress",
    name: "DeliveryAddress",
    component: () => import("@/views/pages/DeliveryAddress.vue"),
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

export default router;
