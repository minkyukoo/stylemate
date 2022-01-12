import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Index from '../pages/index.vue';


function guest(to, from, next) {
    if (localStorage.token) {
        next({ name: 'home' });
        Toast.fire({
            icon: "info",
            title: 'You already logged in',
        });
    } else next();
}

function guard(to, from, next) {
    if (localStorage.token) {
        next();
    } else {
        next({ name: 'login' });
        Toast.fire({
            icon: "info",
            title: 'Please login to access',
        });
    }
}

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Index,
        // beforeEnter: guard,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;