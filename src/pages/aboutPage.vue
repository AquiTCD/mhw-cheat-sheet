<template lang="pug">
.about
  h2.header About
  v-ons-card
    .date 2018-03-05
    .title 0.2.0
    ul
      li メニューを追加
      ul
        li FAQ, about, 問題報告
      li アイコンを修正
  v-ons-card
    .date 2018-03-04
    .title 0.1.0
    ul
      li ファーストリリース
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
</style>
