import Vue from 'vue'
import App from './Other.vue'
import iView from 'iview'
import RouterConfig from 'ROUTES/router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import mixins from 'MIXINS/common'
import states from 'VUEX/RootStates'

/*use Plugins*/
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(mixins);


const router = new VueRouter(RouterConfig);
const store = new Vuex.Store(states);

/*default route*/


new Vue({
    el: '#other',
    store,
    router: router,
    render: h => h(App)
});
