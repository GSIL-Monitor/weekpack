import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  // 星期巴乐园-约课管理
  {
    path: '/weekpack',
    component: Layout,
    redirect: '/weekpack/ording',
    name: 'Weekpack',
    alwaysShow: true,
    meta: { title: '星期巴乐园', icon: 'weekpack' },
    children: [
      {
        path: 'ording',
        name: 'ording',
        component: () => import('@/views/ording/index'),
        meta: { title: '约课管理', icon: 'train' }
      },
      {
        path: 'clazz',
        name: 'clazz',
        component: () => import('@/views/clazz/index'),
        meta: { title: '精品课程管理', icon: 'train' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
