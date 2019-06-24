<template>
  <div id="container">
    <div id="header">
      <home-header :nav="item"></home-header>
    </div>
    <div id="bodys">
      <transition-group :name="transitionName" tag="div" style="height: 83vh; overflow-y: hidden;">
        <home-body-content
          :allImgData="allImgData"
          :key="contentName + index"
          v-for="(contentName, index) in item"
          v-show="showIndex === index"
        ></home-body-content>
      </transition-group>
    </div>
    <footer-navigator></footer-navigator>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBodyContent from './components/bodyContent'
import FooterNavigator from '@/common/Navigator/Navigator'
import eventBus from '@/eventBus.js'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBodyContent,
    FooterNavigator
  },
  data () {
    return {
      item: ['推荐', '手机特卖', '智能', '电视', '笔记本', '生活周边', '家电', '新款游戏本', '影音娱乐'],
      allImgData: {},
      showIndex: 0,
      transitionName: 'left'
    }
  },
  methods: {
    getData (url) {
      axios.get(url)
        .then(this.process)
    },
    process (data) {
      this.allImgData = data.data
    }
  },
  mounted () {
    this.getData('./static/mock/img.json')
    eventBus.$on('setShowIndex', (index) => {
      if (index > this.showIndex) {
        this.transitionName = 'left'
      } else {
        this.transitionName = 'right'
      }
      this.showIndex = index
    })
  }
}
</script>

<style lang="less" scoped>
  #container {
    width: 100vw;
  }
  #bodys {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 200vh;
  }
  .left-enter {
    left: 100%;
  }
  .left-enter-to, .right-enter-to{
    left: 0%;
  }
  .left-enter-active, .right-enter-active {
    transition: left .5s ease-in-out;
  }
  .left-leave, .right-leave {
    left: 0%;
  }
  .left-leave-to {
    left: -100%;
  }
  .left-leave-active, .right-leave-active {
    transition: left .3s ease-in-out;
  }
  .right-enter {
    left: -100%;
  }
  .right-leave-to {
    left: 100%;
  }
</style>
