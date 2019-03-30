<template>
  <div id="category">
    <common-header :show="false"></common-header>
    <body-category :navData="titleData" :listData="listData"></body-category>
    <footer-navigator></footer-navigator>
  </div>
</template>

<script>
import CommonHeader from '@/common/Header/CommonHeader'
import bodyCategory from './components/BodyCategory'
import footerNavigator from '@/common/Navigator/Navigator'
import axios from 'axios'
export default {
  name: 'Category',
  data () {
    return {
      titleData: [],
      listData: {}
    }
  },
  components: {
    CommonHeader,
    bodyCategory,
    footerNavigator
  },
  methods: {
    getCategory () {
      axios.get('/api/category.json')
        .then(this.handleGetCategory)
    },
    handleGetCategory (result) {
      const resData = result.data
      if (resData.result && resData.data) {
        let titleData = []
        let listData = {}
        for (const key in resData.data) {
          titleData[key] = resData.data[key].category_name
          listData[key] = resData.data[key].category_list
        }
        this.titleData = titleData
        this.listData = listData
      }
    }
  },
  mounted () {
    this.getCategory()
  }
}
</script>

<style lang="less" scoped>
@import '~styles/Category/category.less';
</style>
