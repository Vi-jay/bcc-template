<template>
    <div>
        <input type="text"  v-model="aac">
        <span>{{aac}}</span>
        <slot></slot>
        <slot name="h1" ></slot>
    </div>
</template>

<script>
    export default {
        props:{
            aac:{
                type:[Number,String],
                default:0
            }
        },
        data () {
            return {
                aa:1
            }
        },
        methods: {
            emit(){
                this.$emit("alertMe","ViJay");
            }
        },
        created(){
        },
        computed: {}
    }
</script>

<style lang="less">
</style>
