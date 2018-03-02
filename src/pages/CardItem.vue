<template lang="pug">
  v-ons-card(:name="mons.name")
    .type
      | {{ mons.type }}
    .title
      | {{ mons.alias }} {{ mons.name }}
    table
      thead
        tr
          th(v-for="(v, k) in mons.elements") {{ k }}
        tr
          td(v-for="(v, k) in mons.elements") {{ stars(v) }}
    table
      thead
        tr
          th(v-for="(v, k) in mons.status") {{ k }}
        tr
          td(v-for="(v, k) in mons.status") {{ stars(v) }}
    table
      thead
        tr
          th 部位
          th 破壊
          th 斬
          th 打
          th 弾
      tbody
        tr(v-for="(v, k) in mons.parts")
          th {{ k }}
          td {{ v.breakableType }}
          td(v-for="value in v.weakness") {{ weakness(value) }}
</template>

<script>
export default {
  name   : 'CardItem',
  props  : ['mons',],
  methods: {
    stars (points) {
      let numToStars = num => {
        return num <= 0 ? '×' : '★'.repeat(num)
      }
      if (typeof points !== 'number') {
        let normalStars = points.slice(0,1)
        let changedStars = points.slice(-1)
        return `${numToStars(normalStars)}(${numToStars(changedStars)})`
      } else {
        return numToStars(points)
      }
    },
    weakness (num) {
      return num <= 0 ? '' : '★'.repeat(num)
    },
  },
}
</script>

<style lang="stylus" scoped>
  table
    border: #333 solid 1px
  th
    background: #ccc
    border: #999 solid 1px
  td
    border: #999 solid 1px
</style>
