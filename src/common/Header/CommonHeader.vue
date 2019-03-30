<template>
  <div id="hidden">
    <transition name="hidden">
      <div class="cg-header" v-show="isShow">
        <router-link to="/">
          <div class="cg-header-back"></div>
        </router-link>
        <div class="cg-header-variety iconfont">{{title || '分类'}}</div>
        <router-link to="/Search" class="cg-header-search iconfont" tag="div">
          &#xe86e;
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    show: Boolean,
    titleInfo: String
  },
  data () {
    return {
      isShow: this.show,
      title: this.titleInfo
    }
  },
  // methods: {
  //   handleClick () {
  //     this.isShow = !this.isShow
  //   }
  // },
  mounted () {
    let route = this.$route
    if (route.name) {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="less" scoped>
@import '~styles/Common/commonHeader.less';
</style>
