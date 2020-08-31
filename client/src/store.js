import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emps: [],
    mess: null
  },
  mutations: {
    setAllEmps(state,payload){
      state.emps = payload.emps;
    },
    addEmp(state,payload){
      state.emps.push(payload.emp);
    },
    changeEmp(state,payload){
      state.mess = payload.mess
    }
  },
  actions: {
  },
  modules: {
  }
})
