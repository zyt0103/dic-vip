// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

// import Ios from './container／Ios.vue'
// import Andr from './container／Andr.vue'

Vue.config.productionTip = false;

const Ios = resolve => require(['./container/Ios.vue'], resolve);
const Andr = resolve => require(['./container/Andr.vue'], resolve);

/* eslint-disable no-new */
var vue=new Vue({
  el: '#app',
  router,
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


