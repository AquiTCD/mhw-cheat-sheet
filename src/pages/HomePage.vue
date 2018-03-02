<template lang="pug">
  v-ons-page
    v-ons-toolbar.home-toolbar
      .center
        | {{ msg }}
    .header
    filters-block
    cards-block
</template>

<script>
import FiltersBlock from '@/pages/FiltersBlock'
import CardsBlock from '@/pages/CardsBlock'
export default {
  name: 'home',
  data () {
    return {
      msg: 'MHW WeakPoints CheatSheet',
    }
  },
  components: {
    FiltersBlock,
    CardsBlock,
  },
  // methods: {
  //   goTo (url) {
  //     const newWindow = window.open(url, '_blank')
  //     newWindow.opener = null
  //     newWindow.location = url
  //   },
  // },
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
.testImg
  img
    display: block
    margin-left: auto
    margin-right: auto
  figcaption
    text-align: center
img
  max-width: 300px
ons-list-title
  text-transform: none
ons-list-title:not(:first-of-type)
  margin-top: 30px
ons-card
  text-align: center
ons-list-item, ons-card
  cursor: pointer
</style>
