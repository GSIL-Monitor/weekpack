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

  {
    path: '/research',
    component: Layout,
    redirect: '/research/respage01',
    name: 'Research',
    alwaysShow: true,
    meta: { title: '日常研究', icon: 'research' },
    children: [
      {
        path: 'respage01',
        name: 'respage01',
        component: () => import('@/views/respage01/index'),
        meta: { title: '金华教育培训市场准实时数据', icon: 'train' }
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
