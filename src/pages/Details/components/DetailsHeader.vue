<template>
  <div class="details_header">
    <div class="header_container">
      <router-link to="/" tag="div" class="header_btn">
        <i class="header_btn--back"></i>
      </router-link>
      <div class="header_btn">
        <i class="header_btn--share"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsHeader'
}
</script>
<style lang="less" scoped>
@import '~styles/Details/detailsHeader.less';
</style>
