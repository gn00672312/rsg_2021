import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
Vue.use(Buefy)

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// font-awesome
import { library  } from '@fortawesome/fontawesome-svg-core'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFacebook, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import { i18n } from './lang'


import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

export const app = new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

window['vue'] = app
