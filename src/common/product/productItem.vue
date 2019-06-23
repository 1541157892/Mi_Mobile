<template>
  <div class="mobile_rice-8youth">
    <div class="mobile-show">
      <img :src="img">
    </div>
    <div class="info">
      <div class="info-title" v-if="title">{{ title }}</div>
      <div class="info-desc" v-if="desc">{{ desc }}</div>
      <div class="info-price" v-if="price">
        {{ price }}
        <span>起</span>
        <span class="info-price old" v-if="oldPrice">
          <s>{{ oldPrice }}</s>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    desc: String || Object,
    price: String,
    oldPrice: String || Object
  }
}
</script>

<style lang="less" scoped>
.mobile_rice-8youth {
  width: 49.5vw;
  .mobile-show {
    background: #000;
    img {
      width: 100%;
    }
  }
  .info {
    padding: 0.2rem 0.27rem;
    .info-desc {
      margin-top: 0.08rem;
      font-size: 0.24rem;
      color: rgba(0, 0, 0, 0.54);
    }
    .info-price {
      position: relative;
      display: inline-block;
      padding-left: 0.16rem;
      font-size: 0.29rem;
      height: 0.5rem;
      line-height: 0.5rem;
      color: #ea625b;
      span {
        margin-left: 0.04rem;
        font-size: 0.24rem;
      }
      .old {
        color: rgba(0, 0, 0, 0.54);
        text-decoration: line-through;
      }
    }
    .info-price::before {
      content: "\A5";
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0.12rem;
      line-height: 0.24rem;
      font-size: 0.24rem;
    }
  }
}
</style>
