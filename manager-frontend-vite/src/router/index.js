import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home/index.vue'
import Welcome from '@/views/Welcome/index.vue'

const routes = [
  {
    name: 'home',
    "path": '/',
    redirect: '/welcome',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        component: Welcome,
        meta: {
          title: '欢迎体验Vue3全栈课程'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
