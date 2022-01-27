import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
// import 

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'item',
        component: () => import('@/views/Item.vue')
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
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/components/utilities/NotFound.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: ()=> import('@/views/pages/Login.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
