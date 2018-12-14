// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'

import Global from './Global' // 全局参数
import api from './api' // api接口
import Eject from './components/assembly/Eject' // 弹出层
import links from './components/assembly/link' // 弹出层 选择框

Vue.component('Eject', Eject)
Vue.component('links', links)

Vue.config.productionTip = false
Vue.prototype.api = api
Vue.prototype.global = Global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
