<template lang="pug">
  v-ons-card(:name="mons.name")
    .type
      | {{ mons.type }}
    .title
      | {{ mons.alias }} {{ mons.name }}
    table.elements
      thead.elementsThead
        tr
          th(v-for="(v, k) in mons.elements" v-bind:class="k")  {{$t(`elements.${k}`)}}
      tbody
        tr
          td(v-for="(v, k) in mons.elements" v-html="stars(v)")
    table.status
      thead.statusThead
        tr
          th(v-for="(v, k) in mons.status" v-bind:class="k") {{$t(`status.${k}`)}}
      tbody
        tr
          td(v-for="(v, k) in mons.status" v-html="stars(v)")
    table.weakness
      thead.weaknessThead
        tr
          th.weaknessHeader {{$t(`weakness-header.parts`)}}
          th.weaknessHeader {{$t(`weakness-header.break`)}}
          th.weaknessHeader {{$t(`weakness-header.cut`)}}
          th.weaknessHeader {{$t(`weakness-header.strike`)}}
          th.weaknessHeader {{$t(`weakness-header.shoot`)}}
      tbody.weaknessTbody
        tr(v-for="(v, k) in mons.parts")
          th.weaknessHeader {{$t(`parts.${k}`)}}
          td(v-bind:class="v.breakableType") {{ $t(`breakableType.${v.breakableType}`)}}
          td(v-for="value in v.weakness" v-html="weakness(value)")
</template>

<script>
export default {
  name   : 'CardItem',
  props  : ['mons',],
  methods: {
    stars (points) {
      let numToStars = num => {
        return num === 0 ? '<span class="zero">×</span>'
          : num === 1 ? '<span class="one">★</span>'
            : num === 2 ? '<span class="two">★★</span>'
              : num === 3 ? '<span class="three">★★★</span>' : null
      }
      if (typeof points !== 'number') {
        let normalStars = points.slice(0,1)
        let changedStars = points.slice(-1)
        return `${numToStars(Number(normalStars))}<br>(${numToStars(Number(changedStars))})`
      } else {
        return numToStars(points)
      }
    },
    weakness (num) {
      return num === 1 ? '<span class="one">★</span>'
        : num === 2 ? '<span class="two">★★</span>'
          : num === 3 ? '<span class="three">★★★</span>' : null
    },
    breakableTypeToClass (type) {
      return type === '破壊' ? 'breakable'
        : type === '切断' ? 'cuttable' : null
    },
  },
}
</script>

<style lang="stylus" scoped>
.elements, .status, .weakness
  border: #333 solid 1px
  table-layout: fixed
  width: 100%
  border-spacing: 0
  margin-bottom: 5px
  td, th
    text-align: center
.elements, .status
  td:not(:first-of-type), th:not(:first-of-type)
    border-left: 1px solid #757575
.elementsThead th, .statusThead th, .weaknessThead th
  border-bottom: 1px solid #757575
.weaknessThead th:nth-of-type(-n+2), .weaknessTbody td:first-of-type, .weaknessTbody .weaknessHeader
  border-right: 1px solid #757575
.weaknessThead th:nth-of-type(n+3):not(:last-of-type),
.weaknessTbody td:nth-of-type(n+2):not(:last-of-type)
  border-right: 1px solid #BDBDBD
// .weaknessThead th:first-of-type, .weaknessTbody th
//   border-right: 1px solid #757575
.weaknessTbody tr:not(:first-of-type) td,
.weaknessTbody tr:not(:first-of-type) th
  border-top: 1px solid #BDBDBD
.weaknessHeader
  background: #E0E0E0
.fire
  background: #ffcdd2
.water
  background: #BBDEFB
.thunder
  background: #FFF9C4
.ice
  background: #B2EBF2
.dragon
  background: #D1C4E9
.poison
  background: #E1BEE7
.sleep
  background: #B3E5FC
.paralysis
  background: #FFECB3
.blast
  background: #D7CCC8
.stun
  background: #FFE0B2
.break
  background: #FFE082
.sever
  background: #FFAB91
</style>
<style lang="stylus">
.zero
  color: #b71c1c
.one
  color: #BDBDBD
.two
  color: #757575
.three
  color: #212121
</style>
