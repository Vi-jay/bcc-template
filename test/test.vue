<template>
    <div>
    </div>
</template>

<script>
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
            age: {
                'type': Number,
                'default': 0
            }
        },

        //数据
        data () {
            return {}
        },

        //函数 计算函数 过滤器函数 钩子
        methods: {},
        computed: {},
        filters: {},

        //组件钩子
        components: {},

        //生命周期钩子
        created(){
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
</style>
