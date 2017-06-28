/* reset */
import "STATIC/reset.css"
import "STATIC/reset.js"

import Vue from 'vue'
import App from 'VIEW/Hello.vue'
import iView from 'iview'
import RouterConfig from 'ROUTES/router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import mixins from 'MIXINS/common'
import states from 'VUEX/RootStates'

/*use Plugins*/
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(mixins);
Vue.prototype.$http = axios;

const router = new VueRouter(RouterConfig);
const store = new Vuex.Store(states);

/*default route*/


new Vue({
    el: '#hello',
    store,
    router: router,
    render: h => h(App)
});
