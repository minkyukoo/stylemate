import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
// import 


// function guardMyroute(to, from, next) {
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
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// }

// function guest(to, from, next) {
//   if (localStorage.token) {
//     next({ name: 'home' });
//     // Toast.fire({
//     //   icon: "info",
//     //   title: 'You already logged in',
//     // });
//     alert('You already logged in');
//   } else next();
// }

// function guard(to, from, next) {
//   if (localStorage.token) {
//     next();
//   } else {
//     next({ name: 'Login' });
//     // Toast.fire({
//     //   icon: "info",
//     //   title: 'Please login to access',
//     // });
//     alert('Please login to access');
//   }
// }



const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/utilities/NotFound.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/Login.vue')
  },
  {
    path: '/',
    redirect: '/home',
  },
  // Tabs
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'item',
        component: () => import('@/views/Item.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'brand',
        component: () => import('@/views/Brand.vue')
      },
      {
        path: 'contents',
        component: () => import('@/views/Contents.vue')
      },
      {
        path: 'mypage',
        component: () => import('@/views/Mypage.vue')
      },
      {
        path: '/tabs/tab1/list-details',
        component: () => import('@/views/pages/ListDetails.vue')
      },
    ]
  },
  {
    path: '/brand-details',
    name:'BrandDetails',
    component: () => import('@/views/pages/BrandDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
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

export default router
