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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
