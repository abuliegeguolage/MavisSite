import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Introduction from './pages/Introduction.vue'
import Install from './pages/Install.vue'
import Project from './pages/Project.vue'
import Secret from './pages/Secret.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/introduction', component: Introduction },
    { path: '/install', component: Install },
    { path: '/project', component: Project },
    { path: '/secret', component: Secret },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})