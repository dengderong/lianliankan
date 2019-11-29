import Vue from 'vue'
import Router from 'vue-router'
import shareDetails from '@/pages/shareDetails'
import bigImg from '@/components/shareDetails/bigImg'

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
      path: '/bigImg',
      name: 'bigImg',
      component: bigImg,
      meta:{
        title: 'bigImg',
      }
    },
  ]
})
