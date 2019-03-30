<template>
  <div class="search-header">
    <div class="search-header-left">
      <router-link to="/" tag="div" class="iconfont header-back"></router-link>
    </div>
    <div class="search-header-middle">
      <input type="text" placeholder="搜索商品名称">
    </div>
    <div class="search-header-right">
      <div class="search-header-search">
        <i class="iconfont header-search">&#xe86e;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader'
}
</script>

<style lang="less" scoped>
@import '~styles/Search/searchHeader.less';
</style>
