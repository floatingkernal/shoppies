import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nominations: [],
  },
  mutations: {
    addNomination(state, nomination) {
      state.nominations.push(nomination)
    },
    removeNomination(state, index) {
      state.nominations.splice(index, 1)
    },
    loadNominations(state, nominations) {
      state.nominations = nominations
    }
  },
  actions: {
  },
  modules: {
  }
})
