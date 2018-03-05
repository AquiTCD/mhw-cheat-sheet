<template lang="pug">
v-ons-page
  v-ons-toolbar(modifier="transparent")
  .header
    img(src="../assets/icon.png" alt="icon")

  v-ons-list-title Menu
  v-ons-list
    v-ons-list-item(
      modifier="chevron"
      v-for="item in essentialLinks"
      @click="goTo(item.link, item.openNewTab)"
      :key="item.link"
      )
      .left
        v-ons-icon(fixed-width :icon="item.icon")
      .center {{ item.label }}
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      essentialLinks: [
        {
          label     : 'メインページ',
          link      : '/main',
          icon      : 'fa-book',
          openNewTab: false,
        },
        {
          label     : 'FAQ',
          link      : '/faq',
          icon      : 'fa-question-circle',
          openNewTab: false,
        },
        {
          label     : '問題報告',
          link      : 'https://docs.google.com/forms/d/e/1FAIpQLSfNMkmoh6HshmJlMabxCAYAebXoYF9TVWU_60Qvw5Tuu_26zA/viewform?usp=sf_link',
          icon      : 'fa-commenting',
          openNewTab: true,
        },
        {
          label     : 'about',
          link      : '/about',
          icon      : 'fa-info-circle',
          openNewTab: false,
        },
      ],
    }
  },
  methods: {
    goTo (url, openNewTab) {
      if (openNewTab) {
        window.open(url, '_blank')
      } else {
        location.href = url
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-title {
  text-transform: none;
}

ons-list-item {
  cursor: pointer;
}
</style>
