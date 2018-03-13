<template lang="pug">
.about
  h2.header {{$t('ui.menus.feedback')}}
  .iframeContents.ja(v-if="this.$route.params.lang === 'ja'")
    iframe( src="https://docs.google.com/forms/d/e/1FAIpQLSfNMkmoh6HshmJlMabxCAYAebXoYF9TVWU_60Qvw5Tuu_26zA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0") 読み込んでいます...
  .iframeContents.en(v-if="this.$route.params.lang === 'en'")
    iframe( src="https://docs.google.com/forms/d/e/1FAIpQLScBEfKArQUQSayLoZNfwG77OY0tVvJod98l382r5AQ4xZ0vkw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0") Loading...

</template>

<script>
export default {
  name: 'feedback',
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
.iframeContents
   position: relative
   width: 100%
   padding: 75% 0 0 0
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
