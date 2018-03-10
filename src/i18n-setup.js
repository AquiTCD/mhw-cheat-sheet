import Vue from 'vue'
import VueI18n from 'vue-i18n'
const messages = {
  en: require('@/locales/en.yml'),
  ja: require('@/locales/ja.yml'),
}

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale        : 'ja',
  fallbackLocale: 'ja',
  messages,
})

// const loadedLanguages = ['ja','en'] // our default language that is prelaoded
//
// function setI18nLanguage (lang) {
//   i18n.locale = lang
//   document.querySelector('html').setAttribute('lang', lang)
//   return lang
// }
//
// export function loadLanguageAsync (lang) {
//   if (i18n.locale !== lang) {
//     if (!loadedLanguages.includes(lang)) {
//       return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}`).then(msgs => {
//         i18n.setLocaleMessage(lang, msgs.default)
//         loadedLanguages.push(lang)
//         return setI18nLanguage(lang)
//       })
//     }
//     return Promise.resolve(setI18nLanguage(lang))
//   }
//   return Promise.resolve(lang)
// }
