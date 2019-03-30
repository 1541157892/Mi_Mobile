<template>
  <div style="position: absolute; left: 0;top: 0;right: 0;bottom: 0;">
    <home-header :nav="this.navItem" @changeBody="changeBody"></home-header>
    <div class="bodys">
      <transition-group :name="this.direction" tag="div">
        <!-- <body-list v-for="(item, index) of this.navItem" :key="index" v-show="showBodyIndex == index ? true : false"></body-list> -->
        <body-list v-for="(item, index) of this.navItem" :key="index" v-show="change(index)"></body-list>
      </transition-group>
    </div>
    <footer-navigator></footer-navigator>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import BodyList from './components/BodyList'
import FooterNavigator from '@/common/Navigator/Navigator'
export default {
  name: 'Home',
  data () {
    return {
      lastIndex: 0,
      direction: 'left',
      showBodyIndex: 0,
      navItem: ['推荐', '手机特卖', '智能', '电视', '笔记本', '生活周边', '家电', '新款游戏本', '影音娱乐']
    }
  },
  components: {
    HomeHeader,
    BodyList,
    FooterNavigator
  },
  methods: {
    changeBody (index) {
      this.showBodyIndex = index
      index > this.lastIndex ? this.direction = 'left' : this.direction = 'right'
      this.lastIndex = index
    },
    change (index) {
      return this.showBodyIndex === index ? 1 : 0
    }
  }
}
</script>

<style lang="less" scoped>
  .bodys {
    position: absolute;
    top: 1.45rem;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
