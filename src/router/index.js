import Vue from 'vue'
import Router from 'vue-router'

import navs from '@/components/navs' // 导航
import positionsList from '@/components/positionsList' // 职位列表
import positionsInfo from '@/components/positionsInfo' // 职位详情
import comHome from '@/components/comHome' // 公司首页
// import comInfo from '@/components/comInfo' // 公司信息

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'navs', component: navs},
    {path: '/positionsList', name: 'positionsList', component: positionsList},
    {path: '/positionsInfo', name: 'positionsInfo', component: positionsInfo},
    {path: '/comHome', name: 'comHome', component: comHome}
    // {path: '/comInfo', name: 'comInfo', component: comInfo}
  ]
})
