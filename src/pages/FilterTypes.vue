<template lang="pug">
v-ons-list
  v-ons-list-header
    | 竜種
  v-ons-list-item(
    v-for="(type, index) in monsterTypes"
    :for="type + index"
    :key="type + index"
    @click="toggleSwitch(type)"
  )
    label.center
      | {{ type }}
    label.right
      v-ons-switch.switch(
        :input-id="type + index"
        :checked="isChecked(type)"
        @change="toggleSwitch(type)"
        @click="toggleSwitch(type)"
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
      actCounts: 0,
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
  },
}
</script>

<style lang="stylus" scoped>
</style>
