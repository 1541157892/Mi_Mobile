<template>
  <div>
    <user-body></user-body>
    <user-footer></user-footer>
  </div>
</template>
<script>
import UserBody from '@/pages/User/components/UserBody'
import UserFooter from '@/common/Navigator/Navigator'
export default {
  name: 'User',
  components: {
    UserBody,
    UserFooter
  }
}
</script>
<style lang="less" scoped>

</style>
