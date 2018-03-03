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
        @click="toggleCheck(mons.id)"
      )
    label.center(:for="mons.id")
      | {{ mons.name }}
</template>

<script>
export default {
  name    : 'FilterItems',
  computed: {
    monsters () {
      return this.$store.getters.filterdMonstersByTypes
    },
  },
  methods: {
    toggleCheck (id) {
      this.$store.dispatch('TOGGLE_MONSTER_VISIBLITY', id)
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
