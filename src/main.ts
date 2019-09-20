import Vue from 'vue'
import ElementUI from 'element-ui'
import ElementUIRWDispatcher from 'element-ui-rw-dispatcher'
import iView from 'iview'
import iViewRWDispatcher from 'iview-rw-dispatcher'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui-rw-dispatcher/styles/index.scss'
import 'iview-rw-dispatcher/styles/index.less'
import 'iview/dist/styles/iview.css'

Vue.use(ElementUI)
Vue.use(ElementUIRWDispatcher)
Vue.use(iView)
Vue.use(iViewRWDispatcher)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
