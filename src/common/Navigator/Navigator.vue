<template>
  <div id="footer" class="border-top footer">
    <div class="footer-container clear">
      <div class="footer-item active" ref="Home">
        <router-link to="/" tag="div">
          <i class="iconfont item-icon">&#xe699;</i>
          <p>首页</p>
        </router-link>
      </div>
      <div class="footer-item" ref="Category">
        <router-link to="/Category" tag="div">
          <i class="iconfont item-icon">&#xe71b;</i>
          <p>分类</p>
        </router-link>
      </div>
      <div class="footer-item" ref="Cart">
        <router-link to="/Cart" tag="div">
          <i class="iconfont item-icon">&#xe607;</i>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="footer-item" ref="User">
        <router-link to="/User" tag="div">
          <i class="iconfont item-icon">&#xe8a0;</i>
          <p>我的</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  methods: {
    changeActive (routeName) {
      let footer = document.getElementsByClassName('footer')[0]
      let active = footer.getElementsByClassName('active')[0]
      if (active) {
        active.classList.remove('active')
      }
      this.$refs[routeName].classList.add('active')
    }
  },
  mounted () {
    this.changeActive(this.$route.name)
  }
}
</script>

<style lang="less" scoped>
@import '~styles/common/navigator.less';
</style>
