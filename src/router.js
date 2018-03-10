import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/:lang/',
      name     : 'main',
      component: require('@/pages/MainPage').default,
    },
    {
      path     : '/:lang/faq',
      name     : 'faq',
      component: require('@/pages/FAQPage').default,
    },
    {
      path     : '/:lang/feedback',
      name     : 'feedback',
      component: require('@/pages/FeedbackPage').default,
    },
    {
      path     : '/:lang/about',
      name     : 'about',
      component: require('@/pages/AboutPage').default,
    },
    {
      path    : '*',
      redirect: '/ja/',
    },
  ],
})
