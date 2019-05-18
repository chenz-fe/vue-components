import Vue from 'vue'
import App from './App.vue'
import router from './router'
import notice from './components/notice/notice.js'
// eslint-disable-next-line no-unused-vars
import Notice from './components/notice/Notice.vue'

Vue.config.productionTip = false
Vue.prototype.$notice = notice

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
