webpackJsonp([4,1],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var u=n(8),a=o(u),r=n(137),c=o(r),i=n(47),l=o(i),f=n(15),d=o(f),s=n(49),p=o(s),v=n(13),m=o(v),h=n(14),y=o(h),_=n(18),b=o(_);a.default.use(p.default),a.default.use(l.default),a.default.use(m.default),a.default.use(y.default);var j=new p.default(d.default),M=new m.default.Store(b.default);new a.default({el:"#other",store:M,router:j,render:function(t){return t(c.default)}})},14:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var u=n(8),a=o(u),r=new a.default;r.install=function(t,e){t.mixin({methods:{sayHello:function(){console.info(123)}}})},t.exports=r},15:function(t,e,n){"use strict";var o={template:"<div>foo</div>"},u=function(t){return n.e(0,function(e){var n=[e(48)];t.apply(null,n)}.bind(this))},a=[{path:"/foo",component:o},{path:"/bar",component:u}],r={routes:a};t.exports=r},16:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var u=n(32),a=o(u),r=n(29),c=o(r),i=n(28),l=o(i),f=(0,l.default)(null);f.extend=function(){function t(t){var e=void 0,n=void 0;return!(!t||"[object Object]"!==u.call(t))&&(!(e=r(t))||(n=i.call(e,"constructor")&&e.constructor,"function"==typeof n&&l.call(n)===f))}function e(){return null==obj?obj+"":"object"===("undefined"==typeof obj?"undefined":(0,a.default)(obj))||"function"==typeof obj?o[u.call(obj)]||"object":"undefined"==typeof obj?"undefined":(0,a.default)(obj)}function n(t){return"function"===e(t)}var o={},u=o.toString,r=c.default,i=o.hasOwnProperty,l=i.toString,f=l.call(Object);return function e(){var o=void 0,u=void 0,r=void 0,c=void 0,i=void 0,l=void 0,f=arguments[0]||{},d=1,s=arguments.length,p=!1;for("boolean"==typeof f&&(p=f,f=arguments[d]||{},d++),"object"===("undefined"==typeof f?"undefined":(0,a.default)(f))||n(f)||(f={}),d===s&&(f=this,d--);d<s;d++)if(null!=(o=arguments[d]))for(u in o)r=f[u],c=o[u],f!==c&&(p&&c&&(t(c)||(i=Array.isArray(c)))?(i?(i=!1,l=r&&Array.isArray(r)?r:[]):l=r&&t(r)?r:{},f[u]=e(p,l,c)):void 0!==c&&(f[u]=c));return f}}(),t.exports=f},17:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AA="AA",e.INCREMENT="INCREMENT"},18:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(19),a=o(u),r={state:{hello:"hello"},getters:{hello:function(){return"sayhello"}},modules:{account:a.default}};e.default=r},19:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}var a=n(30),r=u(a),c=n(17),i=o(c),l={namespaced:!0,state:{count:0},mutations:(0,r.default)({},i.INCREMENT,function(t,e){t.count+=e.amount}),getters:{todo:function(t){return 2*t.count}},actions:{checkout:function(t,e){var n=t.commit;n("INCREMENT",e)},sayHello:function(t){var e=(t.dispatch,t.getters,t.state,t.commit,t.rootState,t.rootGetters);console.info(e.hello)}},modules:{pay:{namespaced:!0,state:{},mutations:{},getters:{},actions:{}}}};t.exports=l},84:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(31),a=o(u),r=n(13),c=n(16);e.default={data:function(){return{aa:1}},methods:{cc:function(){this.$store.dispatch("account/checkout",{amount:50}),this.$store.dispatch("account/sayHello",{amount:50})}},created:function(){var t={b:2},e={ad:6},n={c:e};(0,c.extend)(!0,t,n),n.c.ad=7,console.log(this.$axios)},computed:(0,a.default)({},(0,r.mapGetters)("account",["todo"])),destroyed:function(){}}},130:function(t,e){},137:function(t,e,n){n(130);var o=n(26)(n(84),n(140),null,null);t.exports=o.exports},140:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    "+t._s(t.aa)+"\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.aa,expression:"aa"}],attrs:{type:"text"},domProps:{value:t.aa},on:{input:function(e){e.target.composing||(t.aa=e.target.value)}}})])},staticRenderFns:[]}}});