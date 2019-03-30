<template>
  <div class="details_footer">
    <div class="footer_container">
      <router-link to="/" tag="div" class="footer_btn">
        <div class="footer_btn_icon">
          <i class="btn_icon btn_icon--home"></i>
        </div>
        <p class="footer_btn_alt">首页</p>
      </router-link>
      <router-link to="/Category" tag="div" class="footer_btn">
        <div class="footer_btn_icon">
          <i class="btn_icon btn_icon--category"></i>
        </div>
        <p class="footer_btn_alt">购物车</p>
      </router-link>
      <div class="footer_btn footer_cart">
        <div class="add_cart">加入购物车</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsFooter'
}
</script>
<style lang="less" scoped>
@import '~styles/Details/detailsFooter';
</style>
