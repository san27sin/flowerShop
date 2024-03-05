import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from "@/pages/HomeView.vue";
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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, name) => {
    const authStore = useAuthStore()
    if (to.name === 'home' && localStorage.getItem('accessToken')) {
    
    }
})

export default router;
