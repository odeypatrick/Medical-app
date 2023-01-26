import { createStore } from 'vuex'
import auth from './auth'
import patient from './patient'

export default createStore({
  state: {
    apiUrl: 'http://localhost:5000/api'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    patient
  }
})
