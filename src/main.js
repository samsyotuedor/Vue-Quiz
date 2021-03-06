import Vue from 'vue'

import Ninjas from './Ninjas.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue' 

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('ninjas', Ninjas);
new Vue({
  el:'#app',
  render: h => h(App),
}).$mount('#app')
