<template>
  <div class="cart-body">
    <div class="cart-login">
      <router-link to="/Login" tag="div" class="login">
        <span class="desc">登录后享受更多优惠</span>
        <em class="to-login">去登录</em>
      </router-link>
    </div>
    <div class="cart-car">
      <div class="car">
        <span>购物车还是空的</span>
        <em>去逛逛</em>
      </div>
    </div>
    <div class="guess-like">
      <div class="banner">
        <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg">
      </div>
      <div class="like-product">
        <div class="product clear">
          <div class="product-left">
            <div>
              <img src="//i8.mifile.cn/v1/a1/4054bc06-4e54-2b2b-f7ab-fbe26c339e01!360x360.webp">
            </div>
            <div class="product-info">
              <div class="product-title">90分智能金属旅行箱</div>
              <span class="price">1999</span>
            </div>
          </div>
          <div class="product-right">
            <div>
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ead828c6fe4487f2f2926ed5b3f8c644.jpg?thumb=1&w=360&h=360">
            </div>
            <div class="product-info">
              <div class="product-title">小米USB-C数据线 编织线版  （30cm）</div>
              <span class="price">18.9</span>
            </div>
          </div>
        </div>
        <div class="product clear">
          <div class="product-left">
            <div>
              <img src="//i8.mifile.cn/v1/a1/bf10be3f-16e1-7b9f-8658-69d1bb4bf226!360x360.webp">
            </div>
            <div class="product-info">
              <div class="product-title">25cm 经典款米兔</div>
              <span class="price">49</span>
            </div>
          </div>
          <div class="product-right">
            <div>
              <img src="//i8.mifile.cn/v1/a1/012eba95-9e16-9827-4974-3dda22fedd9a!360x360.webp">
            </div>
            <div class="product-info">
              <div class="product-title">90分便携收纳袋</div>
              <span class="price">24</span>
            </div>
          </div>
        </div>
        <div class="product clear">
          <div class="product-left">
            <div>
              <img src="//i8.mifile.cn/v1/a1/6b5bba6d-00e7-3b6d-9b8e-5ef5a4dd4fe0!360x360.webp">
            </div>
            <div class="product-info">
              <div class="product-title">米家运动鞋 男款</div>
              <span class="price">99</span>
            </div>
          </div>
          <div class="product-right">
            <div>
              <img src="//i8.mifile.cn/v1/a1/d94ed5bc-621b-8596-b964-b9c70f57ccf1!360x360.webp">
            </div>
            <div class="product-info">
              <div class="product-title">1MORE入耳式耳机</div>
              <span class="price">99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CartBody'
}
</script>
<style lang="less" scoped>
@import '~styles/Cart/Cart.less';
</style>
