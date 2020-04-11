<template>
  <div class="bodyWrapper">
    <common-swiper
      :option="swiperOption"
      :items="swiperSlide"
    ></common-swiper>
    <div class="activity-wrapper clear">
      <div class="activity-img" v-for="src in activity" :key="src.id">
        <img :src="src.src">
      </div>
    </div>
    <div class="interval"></div>
    <div class="product">
      <div class="product-cells clear">
        <div class="product-cells-left">
          <img src="/static/img/product/cells_mi8_youth.webp">
        </div>
        <div class="product-cells-right">
          <div class="product-cells-right-top">
            <img src="/static/img/product/cells_sale.webp">
          </div>
          <div class="product-cells-right-bottom">
            <img src="/static/img/product/cells_TV.webp">
          </div>
        </div>
      </div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/red6.webp">
      </div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/recommend_mi8.webp">
      </div>
      <div class="mobile-product">
        <div class="mobile_rice-8 clear"
          v-for="(item, index) in phone"
          :key="'phone' + index"
        >
          <common-product
            v-for="productPhone in item"
            :key="productPhone.id"
            :img="productPhone.img"
            :title="productPhone.title"
            :desc="productPhone.desc"
            :price="productPhone.price"
            :oldPrice="productPhone.oldPrice"
          ></common-product>
        </div>
      </div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/notebook.webp">
      </div>
      <div class="interval"></div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/display_tv.webp">
      </div>
      <div class="interval" style="border-bottom: .04rem solid #fff; height: .04rem;"></div>
      <div class="mobile-product">
        <div class="mobile_rice-8 clear"
          v-for="(item, index) in tv"
          :key="'tv' + index"
        >
          <common-product
            v-for="productTv in item"
            :key="productTv.id"
            :img="productTv.img"
            :title="productTv.title"
            :desc="productTv.desc"
            :price="productTv.price"
            :oldPrice="productTv.oldPrice"
          ></common-product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/common/Swiper/Swiper'
import Product from '@/common/product/productItem'
export default {
  components: {
    CommonSwiper: Swiper,
    CommonProduct: Product
  },
  props: {
    allImgData: Object
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        observer: true,
        observeParents: true
      },
      swiperSlide: [
        {
          id: '/static/img/recommond/1.webp',
          img: '/static/img/recommond/1.webp'
        },
        {
          id: '/static/img/recommond/2.webp',
          img: '/static/img/recommond/2.webp'
        }
      ],
      allData: {
        activity: [],
        phone: [],
        tv: []
      }
    }
  },
  watch: {
    allImgData () {
      if (this.allImgData.status) {
        this.allData.activity = this.allImgData.data.activity
        this.allData.phone = this.allImgData.data.product.phone
        this.allData.tv = this.allImgData.data.product.tv
      }
    }
  },
  computed: {
    activity () {
      return this.allData.activity
    },
    phone () {
      return this.allData.phone
    },
    tv () {
      return this.allData.tv
    }
  }
}
</script>

<style lang="less" scoped>

.bodyWrapper {
  position: absolute;
  width: 10rem;
  top: 0;
}
</style>
<style lang="less" src="@/assets/styles/Home/bodyContent.less">
</style>
