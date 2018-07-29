import Vue from 'vue'

import Notifications from 'vue-notification'
Vue.use(Notifications)

import Snotify from 'vue-snotify'
Vue.use(Snotify)

import VueAWN from 'vue-awesome-notifications'
var options = {duration: 3000,
               labels: {
                info: "",
                success: "",
                alert: "",
                warning: ""
               },
               icons: {
                info: "",
                success: "",
                alert: "",
                warning: ""
               }
}
Vue.use(VueAWN, options)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})