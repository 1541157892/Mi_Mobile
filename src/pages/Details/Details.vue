<template>
  <div id="details">
    <details-header></details-header>
    <details-body></details-body>
    <!-- <details-footer></details-footer> -->
  </div>
</template>
<script>
import DetailsHeader from './components/DetailsHeader'
import DetailsBody from './components/DetailsBody'
import DetailsFooter from './components/DetailsFooter'
export default {
  name: 'Details',
  components: {
    DetailsHeader,
    DetailsBody,
    DetailsFooter
  }
}
</script>
<style lang="less" scoped>
#details {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
}
</style>
