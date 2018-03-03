<template lang="pug">
  v-ons-card(:name="mons.name")
    .type
      | {{ mons.type }}
    .title
      | {{ mons.alias }} {{ mons.name }}
    .elements-grids
      .elements.keys(v-for="(v, k) in mons.elements")
        | {{k}}
      .elements.values(v-for="(v, k) in mons.elements")
        | {{ stars(v) }}
    .status-grids
      .status.keys(v-for="(v, k) in mons.status")
        | {{k}}
      .status.values(v-for="(v, k) in mons.status")
        | {{ stars(v) }}
    .weakness-grids
      .weakness-header 部位
      .weakness-header 破壊
      .weakness-header 斬
      .weakness-header 打
      .weakness-header 弾
      weakness(v-for="part in mons.parts")
      .naka
        .weakness-header {{ k }}
        .weakness-data {{ v.breakableType }}
        .weakness-data(v-for="value in v.weakness") {{ weakness(value) }}
    //-   .tr
    //-       th {{ k }}
    //-     tr
    //-       td
    //- table
    //-   thead
    //-     tr
    //-       th(v-for="(v, k) in mons.status") {{ k }}
    //-     tr
    //-       td(v-for="(v, k) in mons.status") {{ stars(v) }}
    //- table
    //-   thead
    //-     tr
    //-       th 部位
    //-       th 破壊
    //-       th 斬
    //-       th 打
    //-       th 弾
    //-   tbody
    //-     tr(v-for="(v, k) in mons.parts")
    //-       th {{ k }}
    //-       td {{ v.breakableType }}
    //-       td(v-for="value in v.weakness") {{ weakness(value) }}
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
.elements-grids, .status-grids
  display: grid
  grid-template-rows: 1fr 1fr
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr
  margin-bottom: 0.5em
.elements, .status
  text-align: center
  border: 1px solid #333
.elements.keys, .status.keys
  background: #ccc
.weakness-grids
  display: grid
  grid-template-rows: 1fr 1fr
table
  border: #333 solid 1px
th
  background: #ccc
  border: #999 solid 1px
td
  border: #999 solid 1px
</style>
