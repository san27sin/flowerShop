import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from "@/pages/HomeView.vue";
import {instance} from "@/shared/axios";
import {useAuthStore} from "@/features/auth/authStore";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../pages/AuthView.vue')
    },
    {
        path: '/set-password/:token',
        name: 'set-password',
        component: () => import('../pages/[token].vue')
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('../pages/CategoryView.vue')
    },
    {
        path: '/advantage',
        name: 'advantage',
        component: () => import('../pages/AdvantageView.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../pages/ContactsView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/LoginView.vue')
    },
    {
        path: '/activate/:key',
        name: 'activate',
        component: () => import('../pages/ActivationView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (from, to, next) => {
    const authStore = useAuthStore()
    try {
        if (to.path === '/auth')
            return next()
       await authStore.checkAuth()
       next()
    }
    catch(error) {
        console.log(error)
       next('/auth')
    }
})

export default router;
