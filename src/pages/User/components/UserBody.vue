<template>
  <div class="user-body">
    <div class="user-header">
      <div>
        <a :href="userData.length > 1 ? 'javascript:void(0)' : '/login'" class="header-content">
          <div class="avatar-wrapper">
<<<<<<< HEAD
            <img :src="'/static/img/public/avatar.png'">
=======
            <img :src="userData.avatar || '/static/img/public/avatar.png'">
>>>>>>> '部署测试中'
          </div>
          <div class="header-login" v-if="!userData.id">登录/注册</div>
          <div class="name" v-if="userData.length > 1">
            <p class="name_user">{{userData.name}}</p>
            <div class="name_id">{{userData.id}}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="user-container">
      <div class="order">
        <div class="my-order">我的订单</div>
        <div class="all-order">全部订单</div>
      </div>
      <ul class="order_nav">
        <li class="order_item">
          <div class="nav_icon nav_icon--dfk"></div>
          <span class="nav_desc">待付款</span>
        </li>
        <li class="order_item">
          <div class="nav_icon nav_icon--dsh"></div>
          <span class="nav_desc">待收货</span>
        </li>
        <li class="order_item">
          <div class="nav_icon nav_icon--thx"></div>
          <span class="nav_desc">退换修</span>
        </li>
      </ul>
      <div class="container_full"></div>
      <ul class="container_items">
        <li class="items_li items_li--hyzx">
          <div class="items_li_div li_div--bt">会员中心</div>
        </li>
        <li class="items_li items_li--wdyh">
          <div class="items_li_div li_div--before">我的优惠</div>
        </li>
      </ul>
      <div class="container_full"></div>
      <ul class="container_items">
        <li class="items_li items_li--fwzx">
          <div class="items_li_div li_div--bt">服务中心</div>
        </li>
        <li class="items_li items_li--xmzj">
          <div class="items_li_div li_div--before">小米之家</div>
        </li>
      </ul>
      <div class="container_full"></div>
      <ul class="container_items">
        <li class="items_li items_li--fmtd">
          <div class="items_li_div">F码通道</div>
        </li>
      </ul>
      <div class="container_full"></div>
      <ul class="container_items">
        <li class="items_li items_li--sz">
          <div class="items_li_div">设置</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userBody',
  computed: {
    userData: function () {
      return window.localStorage
    }
  }
}
</script>
<style lang="less" scoped>
@import '~styles/User/userBody.less';
</style>
