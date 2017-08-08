<template>
    <div>
        <header>
        <em class="article-name">{{name}}</em>
        <p>
        <slot name="age">这里是具名slot传入的年龄</slot>
        <slot name="city">这里是具名slot传入的城市</slot>
        </p>
        </header>
        <article></article>
        <aside></aside>
        <footer></footer>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                'type': String,
                'default': ''
            }
        },
        data () {
            return {}
        },
        methods: {},
        created(){
        },
        computed: {}
    }
</script>

<style lang="less" scoped>

        .article-name{
            font-size: 0.3rem;
        }
</style>
