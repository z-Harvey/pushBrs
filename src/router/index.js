import Vue from 'vue'
import Router from 'vue-router'

import navs from '@/components/navs' // 导航
import positionsList from '@/components/positionsList' // 职位列表
import positionsInfo from '@/components/positionsInfo' // 职位详情
import comHome from '@/components/comHome' // 公司首页
import login from '@/components/login' // 登录
import signUpSuccess from '@/components/signUpSuccess' // 投递成功
import newResume from '@/components/newResume' // 新建/编辑 简历
import upResume from '@/components/upResume' // 上传个人简历
import userInfo from '@/components/userInfo' // 编辑个人信息
// import my from '@/components/my' // 我的
import myDelivery from '@/components/myDelivery' // 我的投递
import DeliveryInfo from '@/components/DeliveryInfo' // 投递详情
import positionCollection from '@/components/positionCollection' // 职位收藏
import myResume from '@/components/myResume' // 我的微简历
import myEnclosure from '@/components/myEnclosure' // 我的微简历  附件

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'navs', component: navs},
    {path: '/positionsList', name: 'positionsList', component: positionsList},
    {path: '/positionsInfo', name: 'positionsInfo', component: positionsInfo},
    {path: '/comHome', name: 'comHome', component: comHome},
    {path: '/login', name: 'login', component: login},
    {path: '/signUpSuccess', name: 'signUpSuccess', component: signUpSuccess},
    {path: '/newResume', name: 'newResume', component: newResume},
    {path: '/upResume', name: 'upResume', component: upResume},
    {path: '/userInfo', name: 'userInfo', component: userInfo},
    // {path: '/my', name: 'my', component: my},
    {path: '/myDelivery', name: 'myDelivery', component: myDelivery},
    {path: '/DeliveryInfo', name: 'DeliveryInfo', component: DeliveryInfo},
    {path: '/positionCollection', name: 'positionCollection', component: positionCollection},
    {path: '/myResume', name: 'myResume', component: myResume},
    {path: '/myEnclosure', name: 'myEnclosure', component: myEnclosure}
  ]
})
