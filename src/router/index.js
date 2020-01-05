import Vue from 'vue'
import Router from 'vue-router'
import shareDetails from '@/pages/shareDetails'
import buycar from '@/pages/buycar'
import confirmOrder from '@/pages/confirmOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shareDetails',
      component: shareDetails,
      meta: {
        title: '商品详情',
        index: 1,
        keepAlive: true,
      },
      // component: resolve => require.ensure([])
    },
    {
      path: '/buycar',
      name: 'buycar',
      component: buycar,
      meta: {
        title: '购物车',
        index: 2,
        keepAlive: true,
      }
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: confirmOrder,
      meta: {
        title: '确认订单',
        index: 3,
        keepAlive: true,
      }
    },
  ]
})
