<template>
    <div id="app">
123
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {

        },
        methods: {

        },
        created(){
       setTimeout(function () {
           window.top.aa();
       },1000)
        },
        computed: {

        }
    }
</script>

<style lang="less">
    body {

    }
</style>
