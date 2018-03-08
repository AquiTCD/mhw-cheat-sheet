import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import monsters from '@/monsters.yml'
const state = {
  monsters   : monsters,
  typesFilter: [],
  keywords   : '',
}
const getters = {
  allMonsters: state => {
    return _(state.monsters).value()
  },
  allMonsterTypes: state => {
    return _.uniq(_.map(state.monsters, 'type'), false)
  },
  filteredMonstersByTypes: state => {
    return _.filter(state.monsters, monster =>
      state.typesFilter.some(type => type === monster.type)
    )
  },
  selectedMonsters: (state, getters) => {
    return _.filter(getters.filteredMonstersByKeywords, { isSelected: true, })
  },
  filteredMonstersByKeywords: (state, getters) => {
    if (state.keywords.trim() === '') {
      return getters.filteredMonstersByTypes
    } else {
      // let parsedKeywordsWithOR = state.keywords.split(' OR ')
      // state.keywords.forEach(words => keywords.push(words.split(' ')))
      let ids = []
      let keywords = state.keywords.split(' ')
      keywords.forEach(word => {
        let idsOfWord = []
        getters.filteredMonstersByTypes.forEach(mons => {
          if (mons.name.includes(word)) {
            idsOfWord.push(mons.id)
          }
        })
        if (ids.length === 0) {
          ids = idsOfWord
        } else {
          ids = _.intersection(ids, idsOfWord)
        }
      })
      return _.filter(getters.filteredMonstersByTypes, monster =>
        ids.some(id => id === monster.id)
      )
    }
  },
  filteredMonsters: (state, getters) => {
    return getters.selectedMonsters
  },
  filteredTypes: state => {
    return _(state.typesFilter).value()
  },
}
const actions = {
  TOGGLE_TYPE_FILTER ({ commit, }, value) {
    if (state.typesFilter.some(type => type === value)) {
      commit('REMOVE_FILTER', value)
    } else {
      commit('ADD_FILTER', value)
    }
  },
  TOGGLE_MONSTER_VISIBLITY ({ commit, }, id) {
    commit('TOGGLE_SELECTED_BY_ID', id)
  },
  ON_ALL_TYPE_FILTER ({ commit, }) {
    commit('ADD_ALL_FILTER')
  },
  OFF_ALL_TYPE_FILTER ({ commit, }) {
    commit('REMOVE_ALL_FILTER')
  },
  ON_ALL_MONSTER_VISIBLITY ({ commit, }) {
    commit('SELECT_ALL_MONSTERS')
  },
  OFF_ALL_MONSTER_VISIBLITY ({ commit, }) {
    commit('DESELECT_ALL_MONSTERS')
  },
  UPDATE_KEYWORDS ({ commit, }, keywords) {
    commit('UPDATE_KEYWORDS', keywords)
  },
}
const mutations = {
  ADD_FILTER (state, value) {
    state.typesFilter.push(value)
  },
  REMOVE_FILTER (state, value) {
    state.typesFilter = state.typesFilter.filter(type => type !== value)
  },
  TOGGLE_SELECTED_BY_ID (stete, id) {
    let idx = _.findIndex(state.monsters, { id: id, })
    state.monsters[idx].isSelected = !state.monsters[idx].isSelected
  },
  ADD_ALL_FILTER (state, getters) {
    state.typesFilter = _.uniq(_.map(state.monsters, 'type'), false)
  },
  REMOVE_ALL_FILTER (state, getters) {
    state.typesFilter = []
  },
  SELECT_ALL_MONSTERS (state, getters) {
    state.monsters.forEach(function (monster) {
      monster.isSelected = true
    })
  },
  DESELECT_ALL_MONSTERS (state, getters) {
    state.monsters.forEach(function (monster) {
      monster.isSelected = false
    })
  },
  UPDATE_KEYWORDS (state, keywords) {
    state.keywords = keywords
  },
}
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
