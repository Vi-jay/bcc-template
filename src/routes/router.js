var Foo = { template: '<div>foo</div>' };
var Bar = { template: '<div>bar</div>' };
const nice = resolve => require(['VIEW/nice.vue'], resolve);
var routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: nice }
];
var RouterConfig = {
    routes: routes
};
module.exports = RouterConfig;
