<template>
  <div class="wrapper">
    <div class="header__nav">
      <div class="nav">
        <ul class="nav__items">
          <li
            ref="li"
            class="nav__item"
            v-for="(text, index) in nav"
            :key="index"
            :class="{'active': activeIndex == index}"
            @click="tabClickEvent"
          >{{ text }}</li>
          <span :style="slideOption" class="slide"></span>
          <div style="padding-right: 1rem;min-height: 1px"></div>
        </ul>
      </div>
    </div>
    <transition>
      <home-header-tab
        @setActive="setActive"
        :tabItem="nav"
        :index="activeIndex"
        v-show="bool"
      ></home-header-tab>
    </transition>
    <div class="more" @click="bool = !bool">
      <i class="iconfont icon-arrow" :class="{'rotate': bool}">&#xe87e;</i>
    </div>
  </div>
</template>

<script>
import HomeHeaderTab from './tab'
import eventBus from '@/eventBus.js'
export default {
  props: {
    nav: Array
  },
  components: {
    HomeHeaderTab
  },
  data () {
    return {
      slideOption: {
        left: '0px',
        padding: +(document.body.offsetWidth / 100 * 3).toFixed(2),
        width: '0px',
        toSite: 0,
        flag: true,
        timer: null
      },
      bool: false,
      activeSelected: 0
    }
  },
  methods: {
    getStyle (element) {
      let ele = this.$refs.li.find(ele => ele === element)
      let left = ele.offsetLeft
      let width = ele.offsetWidth
      this.slideOption.left = left + this.slideOption.padding + 'px'
      this.slideOption.width = width - (this.slideOption.padding * 2) + 'px'
    },
    slideMiddle (ele) {
      let viewWidth = document.body.offsetWidth / 2
      let eleLeft = ele.offsetLeft
      let eleLeftPadding = eleLeft + this.slideOption.padding
      let eleWidthHalf = ele.offsetWidth / 2
      let scrollToDis = eleLeftPadding + eleWidthHalf - viewWidth
      if (scrollToDis < 0 && this.slideOption.toSite < 0) {
        this.slideOption.flag = true
      }
      if (scrollToDis > this.slideOption.toSite) {
        this.leftSlide(scrollToDis, ele.parentElement)
      } else {
        this.rightSlide(scrollToDis, ele.parentElement)
      }
    },
    leftSlide (slideVal, parent) {
      let val = this.slideOption.toSite
      this.slideOption.toSite = slideVal
      this.slideOption.timer = setInterval(() => {
        val = val + 5
        parent.scrollTo(val, 0)
        if (val > this.slideOption.toSite) {
          clearInterval(this.slideOption.timer)
          parent.scrollTo(slideVal, 0)
          this.slideOption.flag = true
        }
      }, 18)
    },
    rightSlide (slideVal, parent) {
      let val = this.slideOption.toSite
      this.slideOption.toSite = slideVal
      this.slideOption.timer = setInterval(() => {
        val = val - 5
        parent.scrollTo(val, 0)
        if (val < this.slideOption.toSite) {
          clearInterval(this.slideOption.timer)
          parent.scrollTo(slideVal, 0)
          this.slideOption.flag = true
        }
      }, 18)
    },
    tabClickEvent (event) {
      let element = event.target
      let index = this.$refs.li.findIndex((ele) => ele === element)

      if (this.slideOption.flag) {
        document.getElementsByClassName('active')[0].classList.remove('active')
        element.classList.add('active')
        this.slideOption.flag = false
        this.activeSelected = index
        this.getStyle(element)
        this.slideMiddle(element)
        eventBus.$emit('setShowIndex', index)
      }
    },
    setActive (index) {
      let element = this.$refs.li[index]
      document.getElementsByClassName('active')[0].classList.remove('active')
      this.bool = false
      this.getStyle(element)
      this.slideMiddle(element)
    }
  },
  computed: {
    activeIndex () {
      return this.activeSelected
    }
  },
  mounted () {
    let parent = document.getElementsByClassName('nav__items')[0]
    let active = parent.getElementsByClassName('active')[0]
    this.getStyle(active)
  }
}
</script>

<style lang="less" scoped>
@baseFont: 37.5;
.v-enter,
.v-leave-to {
  height: 31.61rem / @baseFont;
}
.v-enter-active,
.v-leave-active {
  transition: height .3s;
}
.v-enter-to,
.v-leave {
  height: 161.88rem / @baseFont;
}
</style>

<style lang="less" src="@/assets/styles/Home/nav.less">
</style>
