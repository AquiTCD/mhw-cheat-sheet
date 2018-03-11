<template lang="pug">
v-ons-list
  v-ons-list-header(
    @click="toggleOpen()"
  )
    i.fa(:class="isOpen ? 'fa-chevron-down' : 'fa-chevron-right'")
    | &nbsp; {{$t('ui.name')}}
    .buttons
      v-ons-button.button(
        modifier="outline"
        @click.stop="offAllcheckbox()"
      ) {{$t('ui.all-off')}}
      v-ons-button.button(
        modifier="normal"
        @click.stop="onAllcheckbox()"
      ) {{$t('ui.all-on')}}
  transition-group(name="accordion" tag="div")
    v-ons-list-item(
      tappable
      v-for="mons in monsters"
      :key="mons.id"
      :name="mons.name"
      @click.stop="toggleCheck(mons.id)"
      v-show="isOpen"
    )
      label.left
        v-ons-checkbox(
          :input-id="mons.id"
          :value="mons.isSelected"
          v-model="mons.isSelected"
          @click="toggleCheck(mons.id)"
        )
      label.center(:for="mons.id")
        | {{$t(`monster.names.${mons.name}`)}}
    v-ons-list-item(v-if="!monsters.length" v-show="isOpen" :key="'dammy'")
      label.left
        v-ons-checkbox(disabled)
      label.center.disabled
        | {{$t('ui.dammy.name')}}
</template>

<script>
export default {
  name: 'FilterItems',
  data () {
    return {
      isOpen     : true,
      allcheckbox: false,
    }
  },
  computed: {
    monsters () {
      return this.$store.getters.filteredMonstersByKeywords
    },
  },
  methods: {
    toggleCheck (id) {
      this.$store.dispatch('TOGGLE_MONSTER_VISIBLITY', id)
    },
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    onAllcheckbox () {
      this.allcheckbox = true
      this.$store.dispatch('ON_ALL_MONSTER_VISIBLITY')
    },
    offAllcheckbox () {
      this.allcheckbox = false
      this.$store.dispatch('OFF_ALL_MONSTER_VISIBLITY')
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
.accordion-enter-active, .accordion-leave-active
  transition: all .5s
.accordion-leave-to, .accordion-enter
  height: 0
  opacity: 0
.accordion-leave, .accordion-enter-to
  height: 46px
  opacity: 1
</style>
