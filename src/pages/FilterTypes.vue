<template lang="pug">
v-ons-list
  v-ons-list-header
    | 竜種
  v-ons-list-item(
    v-for="type in monsterTypes"
    :for="type"
    :key="type"
  )
    label.center
      | {{ type }}
    label.right
      v-ons-switch(
        :input-id="type"
        v-model="type.on"
      )
</template>

<script>
export default {
  name    : 'FilterTypes',
  computed: {
    monsterTypes () {
      return this.$store.getters.monsterTypes
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
