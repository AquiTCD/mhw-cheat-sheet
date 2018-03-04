<template lang="pug">
v-ons-list
  v-ons-list-header
    | 竜種
  v-ons-list-item(
    tappable
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
        v-model="filteredTypes"
        :value="type"
        @click.prevent="toggleSwitch(type)"
      )
</template>

<script>
export default {
  name    : 'FilterTypes',
  computed: {
    filteredTypes: {
      get () {
        return this.$store.getters.filteredTypes
      },
      set (value) {
        return this.toggleSwitch(value[0])
      },
    },
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
