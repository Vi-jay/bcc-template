<template>
    <div>
    </div>
</template>

<script>
    export default {
        //父组件传入子组件属性
        props:{
            age:{
                'type':Number,
                'default':0
            }
        },

        //数据
        data () {
            return {
            }
        },

        //函数 计算函数 过滤器函数 钩子
        methods: {},
        computed: {},
        filters:{},

        //组件钩子
        components:{},

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
