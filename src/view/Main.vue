<template>
    <div>
        <h2>Essential1 Linkssad</h2>
        <a href="./other.html">other</a>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <button @click="cc">button</button>
        <router-view></router-view>
        <h1>{{todo}}</h1>
    </div>
</template>

<script>
    import utils from 'UTILS/utils'

    export default {
        data () {
            return {}
        },
        methods: {
            cc(){
            }
        },
        created(){
        },
        computed: {
            /***
             * 相当于 todo(){return this.$store.getters.todo}
             * mapGetters是将数组参数中的每个字符串 作为{todo:()=>{return this.$store.getters.todo} 等等.....}
             * 然后再使用...把该函数返回的对象展开成为computed的属性
             */
//            todo(){   获取命名空间的state
//                return this.$store.state["account"].count
//            }
        }

    }
</script>

<style lang="less">
    @hello: 20px;
    body {
        font-size: 0.16rem;
        background: lighten(gainsboro, 30%);
        #app {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            margin-top: @hello;
        }

        h1, h2 {
            font-weight: normal;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            display: inline-block;
            margin: 0 10px;
        }

        a {
            color: #42b983;
        }
    }
</style>
