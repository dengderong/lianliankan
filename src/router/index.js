import Vue from 'vue'
import Router from 'vue-router'
import shareDetails from '@/pages/shareDetails'
import buycar from '@/pages/buycar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shareDetails',
      component: shareDetails,
      meta:{
        title: '商品详情',
      }
    },
    {
      path: '/buycar',
      name: 'buycar',
      component: buycar,
      meta:{
        title: '购物车',
      }
    },
  ]
})
