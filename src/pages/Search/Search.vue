<template>
  <div class="search-content">
    <search-header></search-header>
    <search-body></search-body>
  </div>
</template>

<script>
import SearchHeader from './components/SearchHeader'
import SearchBody from './components/SearchBody'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchBody
  }
}
</script>

<style lang="less" scoped>
  .search-content {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
