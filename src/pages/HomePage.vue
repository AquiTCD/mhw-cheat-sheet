<template lang="pug">
  v-ons-page
    v-ons-toolbar.home-toolbar
      .left
        v-ons-toolbar-button(
          @click="$store.commit('splitter/toggle')"
        )
          v-ons-icon(
            icon="fa-bars"
          )
      .center
        | {{ msg }}
      .right
        v-ons-toolbar-button(
          @click="toggleLocale()"
        )
          v-ons-icon(
            icon="fa-language"
          )
    .ad
      span.pr {{$t('ui.sponsered-link')}}
      Adsense(
        data-ad-client="ca-pub-5201227009100177"
        data-ad-slot="4809633238"
      )
    .main
      transition(name="page")
        router-view
</template>

<script>
import FiltersBlock from '@/pages/FiltersBlock'
import CardsBlock from '@/pages/CardsBlock'
export default {
  name: 'home',
  data () {
    return {
      msg: 'MHW WeakPoints CS',
    }
  },
  components: {
    FiltersBlock,
    CardsBlock,
  },
  methods: {
    toggleLocale () {
      let lang
      if (this.$route.params.lang === 'ja') {
        lang = 'en'
      } else {
        lang = 'ja'
      }
      this.$router.push({
        name  : this.$route.params.name,
        params: {
          lang: lang,
        },
      })
      let msg = ''
      if (lang === 'ja') {
        msg = 'Language is changed to Japanese'
      } else {
        msg = '言語が英語に変更されました'
      }
      this.$ons.notification.toast(msg, { timeout: 500, animation: 'fall' })
    },
  },
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
ons-list-title
  text-transform: none
ons-list-title:not(:first-of-type)
  margin-top: 30px
ons-card
  text-align: center
ons-list-item, ons-card
  cursor: pointer
.ad
  text-align: center
.pr
  font-size: 9px
  color: #BDBDBD
.page-enter-active, .page-leave-active
  transition: all .3s
.page-enter
  margin-right: -100%
  margin-left: 100%
  opacity: 0
.page-leave-to
  margin-right: 100%
  margin-left: -100%
  opacity: 0
.page-leave, .page-enter-to
  margin-left: 0
  margin-right: 0
  opacity: 1
</style>
