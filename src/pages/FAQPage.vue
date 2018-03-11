<template lang="pug">
.faq
  h2.header {{$t('ui.menus.faq')}}
  v-ons-card(v-for="faq in $t('faqs')" :key="faq.q")
    .title Q. {{ faq.q }}
    .answer
      | A.
      p(v-for="pragraph in faq.a") {{pragraph}}
</template>

<script>
export default {
  name: 'faq',
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
</style>
