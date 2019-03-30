<template>
  <div id="tf">
    <div class="header">
      <common-header :show="true"></common-header>
      <div class="header-top clear">
        <div class="header-logo">
          <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC">
        </div>
        <router-link to="/Search" class="header-search-wrapper" tag="div">
          <i class="iconfont icon-search">&#xe86e;</i>
            搜索商品名称
        </router-link>
        <div class="header-user">
          <i class="iconfont icon-user">&#xe8a0;</i>
        </div>
      </div>
      <div class="header-list">
        <div class="nav-display" @click="handleDisplay">
          <i class="iconfont icon-arrow" :class="{unfold}">&#xe87e;</i>
        </div>
        <transition name="enter"
                    @leave="leave"
                    @before-leave="beforeLeave"
        >
          <div class="nav-layer" ref="layer" v-show="this.unfold">
            <div class="title">全部</div>
            <div class="btn-wrap">
              <span class="btn-item btn-active">推荐</span>
              <span class="btn-item">手机</span>
              <span class="btn-item">智能</span>
              <span class="btn-item" style="margin-right: 0">电视</span>
              <span class="btn-item">笔记本</span>
              <span class="btn-item">生活周边</span>
              <span class="btn-item">家电</span>
              <span class="btn-item" style="margin-right: 0">新款笔记本</span>
              <span class="btn-item">影音娱乐</span>
            </div>
          </div>
        </transition>
        <div class="nav" v-show="navShow"  ref="navWrapper">
          <div class="nav-item" v-for="(item, index) of navContainer" :key="index">
            <span :class="navIndex(index)" @click="clickItem($event)">{{item}}</span>
          </div>
          <div class="nav-item-interval"></div>
        </div>
      </div>
    </div>
    <div class="mask-layer" v-if="this.unfold"></div>
  </div>
</template>

<script>
import CommonHeader from '@/common/Header/CommonHeader'

export default {
  components: {
    CommonHeader
  },
  props: {
    nav: Array
  },
  data () {
    return {
      navContainer: this.nav,
      navShow: true,
      unfold: false
    }
  },
  name: 'Header',
  methods: {
    leave (el, done) {
      done()
    },
    beforeLeave () {
      this.navShow = true
    },
    handleDisplay () {
      this.unfold = !this.unfold
      this.navShow = false
    },
    active (e) {
      document.getElementsByClassName('active')[0].className = ''
      e.target.setAttribute('class', 'active')
    },
    itemCenter (e) {
      const windowLeft = window.innerWidth / 2
      const eleWidth = e.target.offsetWidth / 2
      const limit = e.target.offsetLeft - windowLeft + eleWidth
      this.$refs.navWrapper.scrollTo(limit, 0)
    },
    clickItem (e) {
      this.active(e)
      this.itemCenter(e)
      const newNav = [].slice.call(e.path[2].children)
      const currentItem = newNav.indexOf(e.path[1])
      this.$emit('changeBody', currentItem)
    },
    navIndex (index) {
      return {
        active: index === 0 ? 1 : 0
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import '~styles/Home/header.less';
</style>
