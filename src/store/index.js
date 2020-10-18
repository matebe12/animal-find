import Vue from 'vue';
import Vuex from 'vuex';
import animals from './animal';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { animals },
  plugins: [createPersistedState()],
});
