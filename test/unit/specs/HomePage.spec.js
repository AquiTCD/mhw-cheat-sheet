import Vue from 'vue'
import Vuex from 'vuex'
import $ons from 'vue-onsenui/esm'
import * as VOns from '@/vue-onsen-components'
import { shallow } from 'vue-test-utils'
import assert from 'power-assert'
import HomePage from '@/pages/HomePage'
Object.values(VOns).forEach(comp => Vue.component(comp.name, comp))
Vue.use(Vuex)
Vue.use($ons)

describe('HomePage.vue', () => {
  let state = []
  let getters = []
  let actions =  []
  // const Constructor = Vue.extend(HomePage)
  // const vm = new Constructor().$mount()
  let testOptions = {
      state,
      getters,
      actions,
    }
  const store = new Vuex.Store(testOptions)
  const wrapper = shallow(HomePage)
  it('should render correct contents', () => {
    expect(wrapper.find('.home-toolbar .center').text())
      .to.equal('MHW WeakPoints CheatSheet')
  })
  it('should render correct contents', () => {
    assert(wrapper.find('.home-toolbar').find('.center').text()
      === 'MHW WeakPoints CheatSheet')
  })
  it('should render correct contents', () => {
    assert(wrapper.find('.home-toolbar')[0].find('.center')[0].text()
      === 'MHW WeakPoints CheatSheet')
  })
  it('should render correct contents', () => {
    assert(wrapper.html()
      === 'MHW WeakPoints CheatSheet')
  })
  //
  // it('should contain proper list items', () => {
  //   expect(vm.essentialLinks.every(item => item.link && item.icon && item.label))
  // })
  //
  // it('opens a new tab when clicking an item', () => {
  //   const stub = sinon.stub(window, 'open')
  //   stub.returns({})
  //
  //   // Click on the first item
  //   vm.$el.querySelectorAll('ons-list-item')[0].click()
  //   expect(stub).calledWithExactly(vm.essentialLinks[0].link, '_blank')
  //
  //   stub.restore()
  // })
})
