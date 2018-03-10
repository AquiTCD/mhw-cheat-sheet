<template lang="pug">
  v-ons-page#app
    v-ons-splitter
      v-ons-splitter-side(
        swipeable
        collapse
        width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen"
      )
        menu-page
      v-ons-splitter-content
        home-page
</template>

<script>
import HomePage from '@/pages/HomePage'
import MenuPage from '@/pages/MenuPage'

export default {
  name    : 'app',
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      },
    },
  },
  components: {
    HomePage,
    MenuPage,
  },
}
</script>

<style lang="stylus">
ons-splitter-side[side=left][animation=overlay]
  border-right: 2px solid #424242
.list-header
  font-weight: bold
  line-height: 2.4
ons-list-title
  text-transform: none
ons-list-title:not(:first-of-type)
  margin-top: 30px
ons-card
  text-align: center
ons-list-item, ons-card
  cursor: pointer
</style>
