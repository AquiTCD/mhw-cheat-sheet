<template lang="pug">
  v-ons-page
    v-ons-toolbar.home-toolbar
      .left
        v-ons-toolbar-button(
          @click="$store.commit('splitter/toggle')"
        )
          v-ons-icon(
            icon="fa-bars"
          )
      .center
        | {{ msg }}
    .main
      router-view
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
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
ons-list-title
  text-transform: none
ons-list-title:not(:first-of-type)
  margin-top: 30px
ons-card
  text-align: center
ons-list-item, ons-card
  cursor: pointer
</style>
