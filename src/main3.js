/**
 * Created by zyt on 2017/7/18.
 */
import Vue from 'vue'
import MonthAndr from './container/MonthAndr.vue'
Vue.config.productionTip = false;

var vue=new Vue({
  el: '#app',
  template:'<MonthAndr></MonthAndr>',
  components: {
    'MonthAndr':MonthAndr,
  },
});


