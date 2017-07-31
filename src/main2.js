/**
 * Created by zyt on 2017/7/18.
 */
import Vue from 'vue'

Vue.config.productionTip = false;

const Ios = resolve => require(['./container/VipIos.vue'], resolve);
const Andr = resolve => require(['./container/VipAndr.vue'], resolve);
/* eslint-disable no-new */
var vue=new Vue({
  el: '#app',
  // template:'<'+phone+'/>',
  components: {
    Ios:Ios,
    Andr:Andr,
  },
  data: {
    currentView: '',
  },
})
vue.currentView = phone;
