import Vue from 'vue'
import Vuex from 'vuex'

import App from '@/App'
import store from '@/store'
Vue.use(Vuex)
describe('App.vue', () => {
  const Constructor = Vue.extend(App)
  const vm = new Constructor({ store }).$mount()

  it('provides a closed menu by default', () => {
    expect(vm.menuIsOpen)
      .to.equal(false)
  })
})
