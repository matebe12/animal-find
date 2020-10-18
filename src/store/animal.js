//import store from '@/store/index';

import { getAnimals } from '../api/animals';

const state = {
  CNT: 0,
  row: [],
  currentAnimal: {},
};
const mutations = {
  getAnimalsList(state, data) {
    if (data !== undefined) {
      state.CNT = data[0].head[0].list_total_count;
      state.row = data[1].row;
    } else {
      state.CNT = 0;
      state.row = [];
    }
  },
  setCurrentAnimal(state, data) {
    state.currentAnimal = data;
  },
};
const actions = {
  async getAnimalsList({ commit }, data) {
    try {
      const result = await getAnimals(data);
      commit('getAnimalsList', result.data.AbdmAnimalProtect);
    } catch (error) {
      console.log(error);
    }
  },
};
const getters = {
  getAnimalsList(state) {
    return { CNT: state.CNT, row: state.row };
  },
  getCurrentAnimal(state) {
    return state.currentAnimal;
  },
};

export default { state, mutations, getters, actions };
