<template>
  <div id="Cart">
    <cart-header :titleInfo="'购物车'"></cart-header>
    <cart-body></cart-body>
    <cart-footer></cart-footer>
  </div>
</template>
<script>
import CartHeader from '@/common/Header/CommonHeader'
import CartBody from '@/pages/Cart/components/CartBody'
import CartFooter from '@/common/Navigator/Navigator'
export default {
  name: 'Cart',
  components: {
    CartHeader,
    CartBody,
    CartFooter
  }
}
</script>
<style lang="less" scoped>
#Cart {
  overflow-y: auto;
  height: 100%;
}
</style>
