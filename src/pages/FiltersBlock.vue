<template lang="pug">
.filterBlock
  filter-types.types
  filter-keywords.keywords
  filter-names.names
</template>

<script>
import FilterTypes from '@/pages/FilterTypes'
import FilterKeywords from '@/pages/FilterKeywords'
import FilterNames from '@/pages/FilterNames'
export default {
  name      : 'FiltersBlock',
  components: {
    FilterTypes,
    FilterKeywords,
    FilterNames,
  },
}
</script>

<style lang="stylus" scoped>

</style>
