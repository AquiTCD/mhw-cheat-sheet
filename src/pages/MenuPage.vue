<template lang="pug">
v-ons-page
  v-ons-toolbar(modifier="transparent")
  .header
    img(src="@/assets/icon.png" alt="icon")
  v-ons-list-title Menu
  v-ons-list
    v-ons-list-item(
      tappable
      modifier="chevron"
      v-for="item in links"
      @click="pageChange(item)"
      :key="item.link"
      )
      .left
        v-ons-icon(fixed-width :icon="item.icon")
      .center {{$t(`ui.menus.${item.name}`)}}
  .social
    .fb(data-href="https://mhw-cs.solunita.net" data-mobile-iframe="true")
      a(a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmhw-cs.solunita.net%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore")
        img.shareIcon(src="@/assets/facebook.svg" alt="facebook_icon")
    .twitter
      a(href="http://twitter.com/share?url=https://mhw-cs.solunita.net.com")
        img.shareIcon(src="@/assets/twitter.svg" alt="twitter_icon")
    .line
      a(href="http://line.me/R/msg/text/?https://mhw-cs.solunita.net.com")
        img.shareIcon(src="@/assets/line.svg" alt="line_icon")
    .hateb
      a(href="http://b.hatena.ne.jp/add?url=https://mhw-cs.solunita.net.com")
        img.shareIcon(src="@/assets/hatenabookmark.svg" alt="hatenabookmark_icon")
</template>

<script>
export default {
  name: 'menu-page',
  data () {
    return {
      links: [
        {
          name      : 'main',
          link      : '/',
          icon      : 'fa-book',
          openNewTab: false,
        },
        {
          name      : 'faq',
          link      : '/faq',
          icon      : 'fa-question-circle',
          openNewTab: false,
        },
        {
          name      : 'feedback',
          link      : '/feedback',
          icon      : 'fa-commenting',
          openNewTab: false,
        },
        {
          name      : 'about',
          link      : '/about',
          icon      : 'fa-info-circle',
          openNewTab: false,
        },
      ],
    }
  },
  methods: {
    pageChange (item) {
      if (item.openNewTab) {
        window.open(item.name, '_blank')
      } else {
        this.$router.push({
          name  : item.name,
          params: {
            lang: this.$route.params.lang,
          },
        })
        this.$store.commit('splitter/toggle', false)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
  margin-bottom: 20px
img
  max-width: 150px
ons-list-title
  text-transform: none
ons-list-item
  cursor: pointer
.social
  display: flex
  justify-content: center
  align-items: center
.fb, .twitter, .line, .hateb
  background: #e0e0e0
  border: 2px solid #000000
  border-radius: 4px
  padding: 3px 3px 0 3px
  margin: 3px
.shareIcon
  width: 18px
</style>
