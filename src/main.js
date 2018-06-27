// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import IngtubeUI from './index'
import 'font-awesome/css/font-awesome.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(IngtubeUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
