import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Vuetify from 'vuetify';

Vue.config.productionTip = false

// icons
Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons

Vue.use(Vuetify, {
  iconfont: 'fas',
})

// Langs
import VueI18n from 'vue-i18n';
import i18n from './langs/i18n';
Vue.use(VueI18n);


const mainApp = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
export default mainApp;
