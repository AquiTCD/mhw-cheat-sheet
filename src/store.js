import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import monsters from '@/monsters.yml'
const state = {
  monsters: monsters,
}
const getters = {
  monsters: state => {
    return _(state.monsters).value()
  },
  monsterTypes: state => {
    return _.uniq(_.map(state.monsters, 'type'), false)
  },
  selectedMonsters: state => {
    return _.filter(state.monsters, { isSelected: true, })
  },
}
const mutations = {}
const actions = {}
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    splitter: {
      namespaced: true,
      state     : {
        open: false,
      },
      mutations: {
        toggle (state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen
          } else {
            state.open = !state.open
          }
        },
      },
    },
  },
  state,
  getters,
  mutations,
  actions,
})
