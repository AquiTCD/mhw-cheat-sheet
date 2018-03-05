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
  border-right: 1px solid #f00
</style>
