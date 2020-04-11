<template>
  <div class="body-left border-right">
    <ul class="body-left-nav">
      <li :class="{active: index === 0 ? true : false}"
          v-for="(item, index) of info"
          :key="index"
          @click="isActive(index,$event)"
      >
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
// import BScroll from 'better-scroll'
export default {
  name: 'Variety',
  props: {
    info: Array
  },
  data () {
    return {}
  },
  methods: {
    isActive (index, event) {
      let oUl = document.getElementsByClassName('body-left-nav')[0]
      let oActiveLi = oUl.getElementsByClassName('active')[0]
      let parent = event.currentTarget
      this.bus.$emit('changeIndex', index)
      if (oActiveLi && parent) {
        oActiveLi.classList.remove('active')
        parent.classList.add('active')
      }
      this.toScroll(index)
    },
    toScroll (index) {
      let oUl = document.getElementsByClassName('body-left-nav')[0]
      let oLi = oUl.getElementsByTagName('li')
      let scrollX = oLi[index].offsetTop + oLi[index].offsetHeight
      let leftHeight = oUl.offsetHeight
      let toValue = scrollX - leftHeight
      oUl.scrollTo(0, toValue)
    }
  },
  mounted () {
    let _this = this
    let oUl = document.getElementsByClassName('body-left-nav')[0]
    let oLi = oUl.getElementsByTagName('li')
    this.bus.$on('changeActive', function (index) {
      let oActiveLi = oUl.getElementsByClassName('active')[0]
      if (oActiveLi) {
        oActiveLi.classList.remove('active')
      }
      oLi[index].classList.add('active')
      _this.toScroll(index)
    })
  }
}
</script>
<style lang="less" scoped>
@import '~styles/border.less';
@baseFont: 37.5;
  .body-left .active {
    font-size: 18rem / @baseFont;
    color: #fb7d34;
  }
  .body-left {
    overflow: hidden;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 79rem / @baseFont;
    .body-left-nav {
      overflow-y: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      padding-top: 11rem / @baseFont;
      padding-right: 15rem / @baseFont;
      width: 100%;
      li {
        line-height: 46rem / @baseFont;
        height: 46rem / @baseFont;
        text-align: center;
        span {
          transition: font-size .2s;
        }
      }
    }
  }
</style>
