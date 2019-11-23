import Vue from 'vue'
import Router from 'vue-router'
import shareDetails from '@/pages/shareDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shareDetails',
      component: shareDetails,
    },
    {
      path: '/shareDetails',
      name: 'shareDetails',
      component: shareDetails,
    },
  ]
})
