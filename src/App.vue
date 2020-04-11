<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import "./assets/styles/common.less";

body {
  height: 100%;
}
#app {
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  padding: 42rem / @baseFont 0;
  width: 10rem;
  height: 100%;
}
</style>
