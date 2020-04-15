import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from '../static/img/loading.gif'

//加载mockServer
import './mock/mockServer'
//加载过滤器
import './filters/index'

Vue.config.productionTip = false

//注册Button为全局组件
Vue.component(Button.name,Button) //<mt-button>
Vue.use(VueLazyload,{
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
