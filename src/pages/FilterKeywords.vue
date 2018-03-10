<template lang="pug">
v-ons-list
  v-ons-list-header(
    @click="toggleOpen()"
  )
    i.fa(:class="isOpen ? 'fa-chevron-down' : 'fa-chevron-right'")
    | &nbsp; キーワード
    .buttons
      v-ons-button.button(
        modifier="outline"
        @click.stop="clearInput()"
      ) Clear
  transition(name="accordion")
    .search(v-show="isOpen")
      v-ons-search-input.searchBox(
        placeholder="キーワード"
        v-model="keywords"
      )
</template>

<script>
export default {
  name: 'FilterKeywords',
  data () {
    return {
      isOpen: true,
    }
  },
  computed: {
    keywords: {
      get () {
        return this.$store.state.keywords
      },
      set (val) {
        this.$store.dispatch('UPDATE_KEYWORDS', val)
      },
    },
  },
  methods: {
    toggleCheck (id) {
      this.$store.dispatch('TOGGLE_MONSTER_VISIBLITY', id)
    },
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    clearInput () {
      this.$store.dispatch('UPDATE_KEYWORDS', '')
    },
  },
}
</script>

<style lang="stylus" scoped>
.buttons
  display: inline-block
  position: absolute
  right: 15px
.button
  font-size: 0.8em
.button:not(.button--material)
  line-height: 1.2
.button:not(:last-of-type)
  margin-right: 7px
.disabled
  color: #BDBDBD
.searchBox
  width: calc(100% - 18px)
  padding: 9px
.accordion-enter-active, .accordion-leave-active
  transition: all .5s
.accordion-leave-to, .accordion-enter
  height: 0
  opacity: 0
.accordion-leave, .accordion-enter-to
  height: 46px
  opacity: 1
</style>
