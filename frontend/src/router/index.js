import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import TodoView from '@/views/TodoView.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/tasks', component: TodoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
