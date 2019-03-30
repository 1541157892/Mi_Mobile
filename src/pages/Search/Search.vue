<template>
  <div>
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

</style>
