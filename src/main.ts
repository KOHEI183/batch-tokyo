import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugin
import vuetify from './plugins/vuetify'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-207677201-1'
})

Vue.config.productionTip = false
require("@/assets/sass/Master.sass");

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
