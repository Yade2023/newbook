import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line no-unused-vars
import LoginView2 from '../views/LoginView2.vue';
// eslint-disable-next-line no-unused-vars
import MenuView from '../views/MenuView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView2.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/MenuView.vue')
  
  },
  {
    path: '/Enroll',
    name: 'Enroll',
    component: () => import('../views/Enroll.vue')
  
  },
  {
    path: '/Tables',
    name: 'Tables',
    component: () => import('../views/TablesView.vue')
  
  }
]
})

export default router
