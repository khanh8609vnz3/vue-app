import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    newTask: 'newTask'
  },
  mutations: {
    getTask(state, task) {
      state.newTask = task;
    }
  },
  actions: {
    getTask({ commit }, task) {
      commit("getTask", task);
    }
  }
});
