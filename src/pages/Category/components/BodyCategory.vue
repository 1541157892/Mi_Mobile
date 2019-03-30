<template>
  <div id="bodyCategory">
    <body-variety :info="navData"></body-variety>
    <body-alphabet :listData="listData"></body-alphabet>
  </div>
</template>
<script>
import BodyVariety from './BodyVariety'
import BodyAlphabet from './BodyAlphabet'
export default {
  name: 'bodyCategory',
  props: {
    navData: Array,
    listData: Object
  },
  data () {
    return {}
  },
  components: {
    BodyVariety,
    BodyAlphabet
  }
}
</script>
<style lang="less" scoped>
#bodyCategory {
  overflow: hidden;
  position: relative;
  padding-top: 1rem;
  box-sizing: border-box;
  height: 100%;
}
</style>
