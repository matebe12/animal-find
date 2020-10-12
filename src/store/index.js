import Vue from 'vue';
import Vuex from 'vuex';
import animals from './animal';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { animals },
});
