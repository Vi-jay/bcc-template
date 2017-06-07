    import  Vue from 'vue';
    const mixins = new Vue();
    mixins.install = function (Vue, options) {
        Vue.mixin({   //在这里定义的东西都会被vue使用时继承过去  可以在这定义全局组件 将会被使用者继承
            methods: {
                sayHello(){
                    console.info(123);
                }
            }

        });
    };
    module.exports= mixins;
