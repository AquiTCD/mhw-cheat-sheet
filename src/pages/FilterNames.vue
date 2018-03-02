<template lang="pug">
v-ons-list
  v-ons-list-header
    | 名前
  v-ons-list-item(
    tappable
    v-for="mons in monsters"
    :key="mons.id"
    :name="mons.name"
  )
    label.left
      v-ons-checkbox(
        :input-id="mons.id"
        :value="mons.isSelected"
        v-model="mons.isSelected"
        @click="toggleCheck"
      )
    label.center(:for="mons.id")
      | {{ mons.name }}
</template>

<script>
export default {
  name    : 'FilterItems',
  computed: {
    monsters () {
      return this.$store.getters.monsters
    },
  },
  methods: {
    toggleCheck () {
      this.isSelected = !this.isSelected
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
