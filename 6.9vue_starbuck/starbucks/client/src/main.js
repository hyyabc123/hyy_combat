import Vue from 'vue'
import App from './App'
import router from './router'
import "./uitle/scss/common.scss"
import './uitle/flexible'
import Subnav from "../src/views/home/components/Subnav"
import baseui from "../src/plugins/base-ui"
import store from "./store/index"
import {
  DatePicker,
  TimePicker
} from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';


Vue.use(baseui)
Vue.use(DatePicker);
Vue.use(TimePicker);


Vue.config.productionTip = false

window.store= store

Vue.component('Subnav',Subnav)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
