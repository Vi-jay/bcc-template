var Foo = { template: '<div>foo</div>' };
var Bar = { template: '<div>bar</div>' };
var routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
var RouterConfig = {
    routes: routes
};
module.exports = RouterConfig;
