import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      path: '/',
      name: "Dashboard",
      component: () => import("../routes/dashboard/Dashboard.vue"),
    },
    {
      path: '/patient/:id',
      name: "PatientDetails",
      component: () => import("../routes/dashboard/components/patient/PatientDetails.vue"),
      beforeEnter(to, from, next) {
        if(store.state.auth.user?.role == 'Nurse') {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../routes/settings/Settings.vue'),
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