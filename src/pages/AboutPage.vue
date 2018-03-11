<template lang="pug">
.about
  h2.header {{$t('ui.menus.about')}}
  v-ons-card(v-for="about in $t('abouts')" :key="about.v")
    .date {{ about.date }}
    .title v{{ about.v }}
    ul
      li(v-for="line in about.lines") {{line}}
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
