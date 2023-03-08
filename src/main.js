import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './global'
import './assets/less/reset.less'
import './assets/less/common.less'

Vue.config.productionTip = false

Vue.use(i18n);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
