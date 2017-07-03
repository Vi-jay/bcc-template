<template>
    <div class="module">
       <navComponent ></navComponent>
        <selectComponent></selectComponent>
    </div>
</template>

<script>
  import navComponent from "src/components/nav_component.vue"
  import selectComponent from "src/components/select_component.vue"
  export default {
    data () {
      return {}
    },
    methods: {},
    created () {
    console.log("local")
    },
    computed: {},
    components:{
      navComponent,
      selectComponent
    },
  }
</script>

<style lang="less" scoped>
.module{
    text-align: center;
    width: 5rem;
    margin: 0 auto;
}
</style>
