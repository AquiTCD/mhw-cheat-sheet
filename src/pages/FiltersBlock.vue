<template lang="pug">
.filterBlock
  filter-types.types
  filter-names.names
</template>

<script>
import FilterTypes from '@/pages/FilterTypes'
import FilterNames from '@/pages/FilterNames'
export default {
  name      : 'FiltersBlock',
  components: {
    FilterTypes,
    FilterNames,
  },
}
</script>

<style lang="stylus" scoped>

</style>
