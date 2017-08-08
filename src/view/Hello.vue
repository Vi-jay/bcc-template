<template>
    <div>
        <h2>hello-2</h2>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <button @click="cc">button</button>
        <router-view></router-view>
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
        }
    }
</script>

<style lang="less" scoped>
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
