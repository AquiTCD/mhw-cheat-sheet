<template lang="pug">
.cardsBlock
  card-item(
    v-for="mons in selectedMonsters"
    :key="mons.id"
    :mons="mons"
  )
</template>

<script>
import CardItem from '@/pages/CardItem'
export default {
  name      : 'CardsBlock',
  components: {
    CardItem,
  },
  computed: {
    selectedMonsters () {
      return this.$store.getters.selectedMonsters
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
