import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Install from './pages/Install.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/install', component: Install },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})