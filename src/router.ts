import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Install from './pages/Install.vue'
import Project from './pages/Project.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/install', component: Install },
    { path: '/project', component: Project },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})