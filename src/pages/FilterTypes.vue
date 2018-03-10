<template lang="pug">
v-ons-list
  v-ons-list-header(
    @click="toggleOpen()"
  )
    i.fa(:class="isOpen ? 'fa-chevron-down' : 'fa-chevron-right'").center
    | &nbsp; 種別
    .buttons
      v-ons-button.button(
        modifier="outline"
        @click.stop="offAllSwitch()"
      ) 全てオフ
      v-ons-button.button(
        modifier="normal"
        @click.stop="onAllSwitch()"
      ) 全てオン
  transition-group(name="accordion" tag="div")
    v-ons-list-item(
      tappable
      v-for="(type, index) in monsterTypes"
      :for="type + index"
      :key="type + index"
      @click.stop="toggleSwitch(type)"
      v-show="isOpen"
    )
      label.center
        | {{ type }}
      label.right
        v-ons-switch(
          :input-id="type + index"
          :checked="isChecked(type)"
          @change.stop="toggleSwitch(type)"
          @click.prevent="toggleSwitch(type)"
        )
</template>

<script>
export default {
  name: 'FilterTypes',
  data () {
    return {
      isChecked (value) {
        return this.$store.state.typesFilter.some(type => type === value)
      },
      isOpen   : true,
      allSwitch: false,
    }
  },
  computed: {
    monsterTypes () {
      return this.$store.getters.allMonsterTypes
    },
  },
  methods: {
    toggleSwitch (type) {
      this.$store.dispatch('TOGGLE_TYPE_FILTER', type)
    },
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    onAllSwitch () {
      this.allSwitch = true
      this.$store.dispatch('ON_ALL_TYPE_FILTER')
    },
    offAllSwitch () {
      this.allSwitch = false
      this.$store.dispatch('OFF_ALL_TYPE_FILTER')
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
.accordion-enter-active, .accordion-leave-active
  transition: all .5s
.accordion-leave-to, .accordion-enter
  height: 0
  opacity: 0
.accordion-leave, .accordion-enter-to
  height: 56px
  opacity: 1
</style>
