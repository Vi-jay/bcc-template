<template>
    <div class="main">
        <header>
            <h1>资料:</h1>
            <testComponent :name.sync="name">
                <span slot="age"><mark>age</mark>:{{age}}</span>
                <span slot="city"><mark>city</mark>:{{city}}</span>
            </testComponent>
        </header>
        <article>
            <h1>控件:</h1>
            <label class="article-label">name:<input type="text" v-model="name"></label>
            <label class="article-label">age:<input type="number" v-model="age"></label>
        </article>
        <footer>
            Date:{{new Date().toLocaleDateString()}}
            <ul v-for="(value,index) in example">
                <li v-bind:key="index">{{value}}</li>
            </ul>
            <span class="article-footer-move" v-for="(value,key) in link">{{key}}</span>
        </footer>
        <aside>
            <button @click="showLeft">show left nav</button>
        </aside>
        <transition name="fade">
            <aside class="aside" v-show="leftNavToggle">
                <nav>
                    <ul v-for="value in nav">
                        <li class="nav-li">{{value}}</li>
                    </ul>
                </nav>
            </aside>
        </transition>
        <h1>{{cbd}}</h1>
        <h1>{{bbc}}</h1>
        <h1>{{aa}}</h1>
    </div>
</template>

<script>
    const testComponent = require("./component_test.vue");

    export default {
        //父组件传入子组件属性
        /***
         * type:原生构造器        //仅有type值时可以简写为 age:Number 无需设置为对象
         String
         Number
         Boolean
         Function
         Object
         Array
         * default:默认属性值     //可选
         * required: true         //可选
         */
        props: {
            _age: {
                'type': Number,
                'default': 0
            }
        },

        //数据
        data () {
            return {
                name: 'viJay',
                age: 22,
                city: 'CN',
                example: ["帮助", "反馈", "举报"],
                link: {
                    to: "./", back: "./"
                }, cbd: 0,
                nav: ["toTOP", "toLeft", "toRight", "toBottom"],
                leftNavToggle: false
            }
        },

        //函数 计算函数 过滤器函数 钩子
        methods: {
            showLeft(){
                this.leftNavToggle = !this.leftNavToggle;
            }
        },
        computed: {
            aa(){
                return 10;
            },
            bbc(){
                return 120;
            }
        },
        filters: {},

        //组件钩子
        components: {
            testComponent
        },
        //生命周期钩子
        created(){
             Promise.resolve().then(() => {
                    this.cbd=1234
                });
            console.log("组件被创建")
        },
        destroyed(){
            console.log("组件被销毁")
        },
        mounted(){
            console.log("组件被挂载")
        }
    }

</script>

<style lang="less">
    body {
        font-size: 0.16rem;
        text-align: center;
        .main {
            width: min-content;
            margin: 0 auto;
            .article-label {
                display: block;
            }
            .article-footer-move {
                margin: 0 -.5rem;
                cursor: pointer;
            }
        }
        .aside {
            position: fixed;
            left: 0;
            top: 0;
            height: 100%;
            text-align: center;
            background: linear-gradient(45deg, red 20%, green 60%, blue 100%);
            .nav-li {
                margin: 0.6rem 0.2rem;
                padding: 0.2rem;
                border-radius: 50%;
                border: 1px solid black;
                filter: drop-shadow(10px 10px 6px #cccccc);
                font-size: 24px;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }
</style>
