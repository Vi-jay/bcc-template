<template>
    <div>
        {{aa}}
        <input type="text" v-model="aa">
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {extend} from 'src/utils/Utils'
    export default {
        data () {
            return {
                aa:1
            }
        },
        methods: {
            cc(){
                this.$store.dispatch("account/checkout", {amount: 50});
                this.$store.dispatch("account/sayHello", {amount: 50});
            }
        },
        created(){
            var a={
                b:2
            };
            var c={
                ad:6
            };
            var db={
                c:c
            };
            extend(true,a,db);
            db.c.ad=7;
            this.$http.get("./hello.html").then(({data})=> {
                console.log(data);
            })
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
        },
        destroyed(){

        }
    }
</script>

<style lang="less">
    body{
        font-size: 0.16rem;
    }
   @import "../assets/less/other";
</style>
