
import Vue from 'vue'
import App from './pages/App.vue'
import router from './config/router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
