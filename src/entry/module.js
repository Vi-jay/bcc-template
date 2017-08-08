/* reset */
import "STATIC/reset.css"
import "STATIC/reset.js"

import Vue from 'vue'
import App from 'VIEW/Module.vue'
import iView from 'iview'
import RouterConfig from 'ROUTES/router'
import VueRouter from 'vue-router'
import axios from 'axios'
import mixins from 'MIXINS/common'

/*use Plugins*/
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(mixins);
Vue.prototype.$http = axios;

const router = new VueRouter(RouterConfig);

/*default route*/


new Vue({
  el: '#module',
  router: router,
  render: h => h(App)
});
