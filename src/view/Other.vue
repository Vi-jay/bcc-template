<template>
    <div>
        <h2>hello</h2>
        <img src="../assets/img/aa.jpg" alt="">
        <img src="../assets/img/bb.png" alt="">
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
    import {mapGetters} from 'vuex'
    import {common} from 'src/utils/Utils'
    export default {
        data () {
            return {}
        },
        methods: {
            cc(){
                this.$store.dispatch("account/checkout", {amount: 50});
                this.$store.dispatch("account/sayHello", {amount: 50});
            }
        },
        created(){
        },
        computed: {
            ...mapGetters('account', ['todo'])
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
   @import "../assets/less/other";
</style>
