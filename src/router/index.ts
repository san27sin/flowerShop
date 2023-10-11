import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from "@/pages/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
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

export default router;
