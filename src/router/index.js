import { createRouter, createWebHistory } from 'vue-router'
// import View from '../routes/dashboard/View'

const routes = [
    {
      path: '/',
      name: "Dashboard",
      component: () => import("../routes/dashboard/Dashboard.vue"),
      // beforeEnter(to, from, next) {
      //   if(store.state.Auth.token) {
      //     next()
      //   } else {
      //     next('/login')
      //   }
      // },
    },
    {
      path: '/patient/:id',
      name: "PatientDetails",
      component: () => import("../routes/dashboard/components/patient/PatientDetails.vue"),
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../routes/settings/Settings.vue') ,
      // beforeEnter(to, from, next) {
      //   if(store.state.Auth.token) {
      //     next()
      //   } else {
      //     next('/login?redirect=settings')
      //   }
      // }
    }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router