<template>
    <div>
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
                    <transition-group name="flip-list" tag="ul">
                        <li class="nav-li" :key="value" v-for="(value,index) in nav">{{value}}</li>
                    </transition-group>
                </nav>
            </aside>
        </transition>
        <h1>{{cbd}}</h1>
        <h1>{{bbc}}</h1>
        <h1>{{aa}}</h1>
        <form action="" ref="abc">
            <input type="text" name="username" v-model="name">
            <input type="text" name="password">
            <input type="checkbox" name="aac" value="66" checked>
            <input type="checkbox" name="aac" value="666" checked>
            <input type="checkbox" name="aac" value="66666">
            <select name="select">
                <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">4</option>
            </select>
        </form>
        <transition-group tag="ul" name="fade">
            <li v-for="value in arr" :key="value">{{value}}</li>
        </transition-group>
        <charts :callback="setChartByDefault"></charts>
        <button @click="toggle=!toggle">click</button>
    </div>
        <messageBox :open="toggle"></messageBox>
    </div>
</template>

<script>
    const testComponent = require("./component_test.vue");
    const charts = require("COMPONENTS/charts");
    const messageBox = require("COMPONENTS/message_box");
    const utils = require("UTILS/utils");

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
                leftNavToggle: false,
                option: {},
                toggle:false,
                arr:[
                    1,2,3,4,5
                ]
            }
        },

        //函数 计算函数 过滤器函数 钩子
        methods: {
            showLeft(){
                setTimeout(() => {
                    this.nav = this.nav.reverse();
                }, 1000);
                this.leftNavToggle = !this.leftNavToggle;
            },
            setChartByDefault(){
                return new Promise(function (resolve) {
                    return resolve({
                        chartType: "pie",

                    })
                })
            },
            setChartOption(){
                setTimeout(() => {
                    this.option = {
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        legend: {
                            data: ['销量']
                        },
                        xAxis: {
                            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                        },
                        yAxis: {},
                        series: [{
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }]
                    };
                }, 2000)
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
            testComponent,
            charts,
            messageBox
        },
        //生命周期钩子
        created(){
            this.$error("hello");
            this.setChartOption();
            setTimeout(()=> {
               this.arr.splice(0,1);
            },2000);
            this.$nextTick(() => {
                console.log(utils.makeLikeArrayToArray(this.$refs.abc));
                console.log(JSON.stringify(utils.serialize(this.$refs.abc)));
            });
            Promise.resolve().then(() => {
                this.cbd = 1234
            });
            console.log("组件被创建");
        },
        destroyed(){
            console.log("组件被销毁")
        },
        mounted(){
            console.log("组件被挂载")
        },
        //监听变量
        watch: {}
    }

</script>

<style lang="less" scoped>
    body {
        font-size: 0.16rem;
        text-align: center;
        .main {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
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

    .flip-list-move {
        transition: transform 1s;
    }
    .fade-move{
        transition: transform 1s;

    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
