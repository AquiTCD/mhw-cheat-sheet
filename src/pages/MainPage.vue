<template lang="pug">
main
  filters-block
  cards-block
</template>

<script>
import FiltersBlock from '@/pages/FiltersBlock'
import CardsBlock from '@/pages/CardsBlock'
export default {
  name: 'home',
  data () {
    return {
      msg: 'MHW WeakPoints CheatSheet',
    }
  },
  components: {
    FiltersBlock,
    CardsBlock,
  },
}
</script>

<style scoped>
</style>
