<template>
    <div>
        <header>
            <h1 v-once>{{aa}}</h1>
            <input ref="input" @input.prevent="input(aa,$event)" :class="name.split('').reverse().join('')" type="text" v-model="aa">
            <span>{{aa | pingfang(name)}}</span>
            <ina :aac.sync="aa" @alertMe="showHim">
                你好啊
                <h1 slot="h1" style="font-size: 0.20rem">我是具名传入的数据</h1>
            </ina>
            <transition-group tag="ul">
                <li v-for="value in arr" :key="value">{{value}}</li>
            </transition-group>
        </header>
        <article>
            <h2></h2>
            <p></p>
            <section>
                <h2></h2>
                <p></p>
            </section>
            <article>
            </article>
            <aside>
            </aside>
        </article>

    </div>
</template>

<script>
    import utils from 'UTILS/utils'
    const ina=require("VIEW/input.vue");
    export default {
        props:{},
        data () {
            return {
                aa: 1,
                name:"Aa",
                ccc:666,
                abcd:false,
                arr:[
                    1,2,3,4,5
                ]
            }
        },
        methods: {
            cc(){
            },
            input(a,event){
                this.abcd=!this.abcd;
            },
            showHim(arg){
                alert(arg);
                console.log(event)
            }
        },
        created(){

        },
        components:{
            ina
        },
        computed: {
            he(){
                return this.aa*2;
            }
        },
        destroyed(){

        },
        update(){
            console.log("组件被更新")
        },
        filters:{
            pingfang(value,name){
                return value*2;
            }
        }
    }
</script>

<style lang="less" scoped>
    body {
        font-size: 0.16rem;
    }

    @import "../assets/less/other";
</style>
