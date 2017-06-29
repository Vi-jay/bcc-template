<template>

    <div class="box-container" v-show="toggle">
        <transition name="fade">

            <article class="box-article" v-show="toggle">
                <h1> hello I Am Groot</h1>
                <p>
                    cease to be visible.
                    he disappeared into the trees
                    同义词: vanish, pass from sight, be lost to view/sight, recede from view, fade (away), melt away, clear, dissolve, disperse, evaporate, dematerialize, evanesce
                    cause to disappear, as by consumption.
                </p>
                <footer>
                    <button @click="toggle=!toggle">click</button>
                </footer>
            </article>
        </transition>
    </div>

</template>

<script>
    export default {
        props: {
            open: Boolean
        },
        data () {
            return {
                toggle: false
            }
        },
        methods: {},
        created(){

        },
        computed: {},
        watch: {
            open(newValue, oldValue){
                if (newValue === !oldValue) {
                    this.toggle = !this.toggle;
                }
            }
        }
    }
</script>

<style lang="less">
    .box-article {
        text-align: center;
        position: fixed;
        z-index: 99;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: .2rem;
        background: wheat;
        border-radius: 3px;
        box-shadow: 2px 2px 8px #58a;
        text-shadow: 0 2px 2px white;
    }

    .box-container:after {
        position: fixed;
        z-index: 96;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .3);
        content: "";
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease-out, transform .6s ease-out
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: perspective(0.01rem) translateZ(0.05rem);
    }
</style>
