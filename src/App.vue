<template lang="pug">
  v-ons-page#app
    v-ons-splitter
      v-ons-splitter-side(
        swipeable
        collapse
        width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen"
      )
        menu-page
      v-ons-splitter-content
        home-page
</template>

<script>
import HomePage from '@/pages/HomePage'
import MenuPage from '@/pages/MenuPage'
export default {
  name    : 'app',
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      },
    },
  },
  watch: {
    '$route' (to, from, next) {
      if (from.params.lang !== to.params.lang) {
        this.$router.push({
          name  : to.name,
          params: {
            lang: to.params.lang,
          },
        })
        this.$i18n.locale = to.params.lang
        this.setupMeta(to.params.lang)
      }
    },
  },
  created () {
    this.$i18n.locale = this.$route.params.lang
    this.setupMeta(this.$route.params.lang)
  },
  methods: {
    setupMeta (lang) {
      let changeMetaTags = (title, description) => {
        document.title = title
        let nodelist = document.getElementsByTagName('meta')
        let metas = Array.prototype.slice.call(nodelist,0)
        metas.forEach(meta => {
          if (meta.getAttribute('property') === 'og:site_name') {
            meta.setAttribute('content', title)
          } else if (meta.getAttribute('property') === 'og:title') {
            meta.setAttribute('content', title)
          } else if (meta.getAttribute('name') === 'twitter:title') {
            meta.setAttribute('content', title)
          } else if (meta.getAttribute('name') === 'apple-mobile-web-app-title') {
            meta.setAttribute('content', title)
          } else if (meta.getAttribute('property') === 'og:description') {
            meta.setAttribute('content', description)
          } else if (meta.getAttribute('name') === 'description') {
            meta.setAttribute('content', description)
          } else if (meta.getAttribute('name') === 'twitter:description') {
            meta.setAttribute('content', description)
          }
        })
      }
      let title = ''
      let description = ''
      if (lang === 'en') {
        title = 'MHW WeakPoints CheatSheet'
        description = 'Monster Hunter World CheatSheat to search monster week-points'
        changeMetaTags(title, description)
      } else if (lang === 'ja') {
        title = 'MHW 弱点検索'
        description = 'モンスターハンターワールド モンスター弱点検索システム'
        changeMetaTags(title, description)
      }
    },
  },
  components: {
    HomePage,
    MenuPage,
  },
}
</script>

<style lang="stylus">
ons-splitter-side[side=left][animation=overlay]
  border-right: 2px solid #9e9e9e
.list-header
  font-weight: bold
  line-height: 2.4
ons-list-title
  text-transform: none
ons-list-title:not(:first-of-type)
  margin-top: 30px
ons-card
  text-align: center
ons-list-item, ons-card
  cursor: pointer
</style>
