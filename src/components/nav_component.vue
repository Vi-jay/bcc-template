<template>
    <transition-group name="fadeIn" tag="ul" class="pagination">
        <li v-show="current != 1" @click="current-- && goto(current)" :key="nav-1"><a href="#">&laquo;</a></li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
            <a href="#">{{index}}</a>
        </li>
        <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current)" :key="nav-2"><a href="#">&raquo;</a>
        </li>
    </transition-group>
</template>

<script>
  export default {
    data () {
      return {
        current: 1,
        showItem: 5,
        allpage: 20
      }
    },
    computed: {
      pages: function () {
        var pag = []
        if (this.current < this.showItem) {
          var i = Math.min(this.showItem, this.allpage)
          while (i) {
            pag.unshift(i--)
          }
        } else {
          var middle = this.current - Math.floor(this.showItem / 2), i = this.showItem
          if (middle > (this.allpage - this.showItem)) {
            middle = (this.allpage - this.showItem) + 1
          }
          while (i--) {
            pag.push(middle++)
          }
        }
        return pag
      }
    },
    methods: {
      goto: function (index) {
        if (index == this.current) return
        this.current = index
      }
    }
  }
</script>

<style lang="less" scoped>
    .pagination{
  display: inline-block;
        margin: .7rem 0 .7rem 0;
    }
    .pagination li {
        display: inline-block;
        margin: 0 .05rem;
        width: .4rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
    }

    .pagination li a {
        padding: .05;
        display: block;
        border: 1px solid #ddd;
        background: #fff;
        color: #0E90D2;
        text-decoration: none;
    }

    .pagination li a:hover {
        background: #eee;
    }

    .pagination li.active a {
        background: #0E90D2;
        color: #fff;
    }
    .fadeIn-move{
      transition:transform 1s;
    }
</style>
