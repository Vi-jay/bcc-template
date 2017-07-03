<template>
    <div class="dropdown" ref="select" @click="show=!show">
        {{selected}}
        <ul class="dropdown-list" v-if="show">
            <li v-for="list in name" @click="select(list)" :key="list">{{list}}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        selected:null,
        name: [
          'Jack',
          'Tom',
          'Obama',
          'Vince',
          "Peter",
          "Bob"
        ]
      }
    },
    methods: {
      select: function (value) {
         this.selected=value
      }
    },
    created () {
       this.selected=this.name[0]
    },
    computed: {}
  }
</script>

<style lang="less" scoped>
    .dropdown {
        width: 2rem;
        height: 0.4rem;
        color: black;
        border: 1px solid #999999;
        font-size: 0.2rem;
        text-align: center;
        position: relative;
        line-height: .4rem;
        display: inline-block;
        margin: .7rem 0 .7rem 0;
    }

    .dropdown-list {
        display: block;
        width: 100%;
        background: silver;
        position: absolute;
        top: 105%;
        overflow: hidden;
    }

    .dropdown-list li {
        padding: .05rem 0 .05rem 0;
        cursor: pointer;
    }

    .dropdown-list li:hover {
        background: rgba(33, 33, 33, 0.5);
        color: white;
    }
</style>
