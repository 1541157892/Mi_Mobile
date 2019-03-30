<template>
  <div class="body-alphabet" @scroll="eventScroll($event)">
    <div class="body-alphabet-list" v-for="(list, index) of monitoring" :key="index">
      <div class="list-sample-wrapper"
        v-if="list.cells_auto_fill"
      >
        <img :src="list.cells_auto_fill[0].body.items[0].img_url">
      </div>
      <template v-for="(title, titleIndex) of list.category_title">
        <div class="list-title-wrapper" :key="title.view_type + titleIndex">
          <span>{{title.body.category_name}}</span>
        </div>
        <div class="list-img-wrapper" :key="list.category_group[0].body.items[0].img_url + titleIndex">
          <ul class="list-item clear">
            <li v-for="(product, index) of list.category_group[titleIndex].body.items" :key="index">
              <img :src="product.img_url">
              <span class="title_name">{{product.product_name}}</span>
            </li>
          </ul>
        </div>
      </template>
      <div class="list-desc-img" v-if="list.cells_auto_fill && list.cells_auto_fill[1]">
        <div>
          <img :src="list.cells_auto_fill[1].body.items[0].img_url">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alphabet',
  props: {
    listData: Object
  },
  data () {
    return {
      index: 0,
      scrollHeight: 0
    }
  },
  methods: {
    filterData (data) {
      let typeArr = []
      let result = {}
      data.forEach(function (item, index) {
        if (typeArr.indexOf(item.view_type) !== -1) {} else {
          typeArr[index] = item.view_type
        }
      })
      typeArr.forEach(function (value, index) {
        result[value] = data.filter(function (item) {
          return item.view_type === value
        })
      })
      // console.log(result)
      return result
    },
    toScroll (index) {
      this.index = index
      let oScroll = document.getElementsByClassName('body-alphabet')[0]
      oScroll.scrollTo(0, oScroll.children[index].offsetTop - 50)
    },
    eventScroll (event) {
      let this_ = this
      let target = event.target
      let eleAllChild = target.children
      let currentEleAllTop = eleAllChild[this.index].offsetTop + eleAllChild[this.index].offsetHeight - 50
      let nextEleAllTop = eleAllChild[this.index === 24 ? 24 : this.index + 1].offsetTop + eleAllChild[this.index === 24 ? 24 : this.index + 1].offsetHeight - 50
      let alphabetTop = target.scrollTop
      if (alphabetTop > currentEleAllTop && currentEleAllTop < nextEleAllTop) {
        this.index = this.index === 24 ? 24 : this.index + 1
        clearTimeout(target.timer)
        target.timer = setTimeout(() => {
          this.bus.$emit('changeActive', this.index)
        }, 300)
      } else if (alphabetTop < eleAllChild[this.index].offsetTop - 50) {
        clearTimeout(target.timer)
        target.timer = setTimeout(() => {
          this_.bus.$emit('changeActive', this.index)
        }, 300)
        this.index = this.index === 0 ? 0 : this.index - 1
      }
      // console.log(alphabetTop <= eleAllChild[this.index].offsetTop - 50 && alphabetTop >= eleAllChild[this.index === 0 ? 0 : this.index--].offsetTop - 50)
      // console.log(alphabetTop, eleAllChild[this.index].offsetTop - 50, eleAllChild[this.index === 0 ? 0 : this.index--].offsetTop - 50)
    }
  },
  mounted () {
    this.bus.$on('changeIndex', this.toScroll)
  },
  computed: {
    monitoring () {
      let result = []
      if (this.listData[0]) {
        for (const key in this.listData) {
          result[key] = this.filterData(this.listData[key])
        }
      }
      return result
    }
  }
}
</script>
<style lang="less" scoped>
@import '~styles/common.less';
.body-alphabet {
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 1rem .36rem 1.04rem 1.9rem;
  width: 100%;
  // background: red;
  img {
    width: 100%;
  }
  .body-alphabet-list {
    width: 100%;
    .list-sample-wrapper {
      width: 100%;
    }
    .list-title-wrapper {
      margin-top: .2rem;
      width: 100%;
      height: 1.33rem;
      line-height: 1.33rem;
      text-align: center;
      span {
        display: inline-block;
        position: relative;
        line-height: .3rem;
        font-size: .3rem;
      }
      span::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -.6rem;
        width: .4rem;
        height: .02rem;
        background: #e0e0e0;
      }
      span::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -.6rem;
        width: .4rem;
        height: .02rem;
        background: #e0e0e0;
      }
    }
    .list-img-wrapper {
      width: 100%;
      .list-item {
        width: 100%;
        li {
          float: left;
          margin: .2rem 0 .3rem;
          width: 33.3%;
          text-align: center;
          img {
            margin: 0rem 0rem;
            width: 1.2rem;
            height: 1.2rem;
          }
          .title_name {
            overflow: hidden;
            display: block;
            margin-top: .24rem;
            width: 100%;
            line-height: .24rem;
            font-size: .24rem;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .list-desc-img {
      width: 100%;
    }
  }
  .body-alphabet-list:last-child {
    height: 100%;
  }
}
</style>
