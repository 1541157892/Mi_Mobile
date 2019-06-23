<template>
  <div class="header__tab" ref="tab">
    <div class="tab__all">全部</div>
    <div class="tab__items">
      <span
        ref="span"
        class="tab__item"
        :class="{'active': selectedTab == index}"
        :key="index"
        @click="getIndex"
        v-for="(selected, index) in tabItem"
      >{{ selected }}</span>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus.js'
export default {
  props: {
    tabItem: Array,
    index: Number
  },
  data () {
    return {
      selectedTab: 0
    }
  },
  methods: {
    getIndex (event) {
      let target = event.target
      let oSpan = this.$refs.span
      let index = oSpan.findIndex((ele) => ele === target)
      this.selectedTab = index
      this.$emit('setActive', index)
      eventBus.$emit('setShowIndex', index)
    }
  },
  watch: {
    index () {
      this.selectedTab = this.index
    }
  }
}
</script>

<style lang="less" src="@/assets/styles/Home/tab.less">
</style>
