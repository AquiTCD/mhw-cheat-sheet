<template lang="pug">
.cardsBlock
  card-item(
    v-for="mons in selectedMonsters"
    :key="mons.id"
    :mons="mons"
  )
  v-ons-card(v-if="!selectedMonsters.length")
    .type.disabled
      | 種別
    .title.disabled
      | 別名 名称
    .weakness.disabled
      | 弱点
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
.disabled
  color: #BDBDBD
</style>
