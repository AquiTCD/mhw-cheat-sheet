import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'main',
      component: require('@/pages/MainPage').default,
    },
    {
      path     : '/faq',
      name     : 'faq',
      component: require('@/pages/FAQPage').default,
    },
    {
      path     : '/about',
      name     : 'about',
      component: require('@/pages/aboutPage').default,
    },
    {
      path    : '*',
      redirect: '/',
    },
  ],
})
