import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // 초기 로딩 느려짐, 처음 시작 시 페이지 전체 로드

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), // 늦게 로드
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('@/views/NestedComponent.vue'), // 늦게 로드
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('@/views/ParentComponent.vue'),
    },
    {
      path: '/parent4',
      name: 'parent4',
      component: () => import('@/views/ParentComponent4.vue'),
    },
    {
      path: '/emp',
      name: 'emp',
      component: () => import('@/views/EmpView.vue'),
    },
  ],
})

export default router
