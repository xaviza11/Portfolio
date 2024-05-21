import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from './views/AboutMe.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/about', component: AboutMe },
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
