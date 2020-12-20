import Vue from 'vue';

import vuetify from './plugins/vuetify' // path to vuetify export

import Main from './components/Main.vue'

new Vue({
  vuetify,
  render: h => h(Main)
}).$mount('#app')
