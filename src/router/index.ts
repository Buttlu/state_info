import { createRouter, createWebHistory } from 'vue-router'
import infoView from '../views/info.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/info',
            name: 'info',
            component: infoView
        }
    ]
})

export default router
