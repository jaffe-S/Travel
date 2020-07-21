// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/styles/reset.css'
//  移动端:解决１px边框问题
import './assets/styles/border.css'
// 1.1移动端:ｃlick事300ms延迟的问题npm install fastclick --save
import fastClick from 'fastclick'

Vue.config.productionTip = false
// 1.2绑定
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
