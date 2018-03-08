<template lang="pug">
.cardsBlock
  transition-group(name="blur" tag="div")
    card-item(
      v-for="mons in filteredMonsters"
      :key="mons.id"
      :mons="mons"
    )
    v-ons-card(v-if="!filteredMonsters.length" :key="'dammy'")
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
    filteredMonsters () {
      return this.$store.getters.filteredMonsters
    },
  },
}
</script>

<style lang="stylus" scoped>
.disabled
  color: #BDBDBD
.blur-enter-active, .blur-leave-active
  transition: all .3s
.blur-leave-to, .blur-enter
  filter: blur(6px)
  opacity: 0
.blur-leave, .blur-enter-to
  opacity: 1
</style>
