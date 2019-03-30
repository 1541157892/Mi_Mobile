<template>
  <div class="swiper_wrapper" :style="{position: 'relative'}">
    <swiper :options="this.option"  class="swiper_container">
      <swiper-slide v-for="(item) of this.items" :key="item.id">
        <img class="swiper-img" :src="item.img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'CommonSwiper',
  props: {
    option: Object,
    items: Array,
    styles: Object
  }
}
</script>
<style lang="less" scoped>
.swiper-pagination /deep/ .swiper-pagination-bullet{
  background: white;
}
.swiper-pagination /deep/ .swiper-pagination-bullet.paginationStyle {
  background: #999;
}
.swiper_wrapper {
  width: 100%;
}
.swiper_wrapper .swiper_container {
  width: 100%;
}
.swiper_wrapper .swiper_container img {
  width: 100%;
}
</style>
