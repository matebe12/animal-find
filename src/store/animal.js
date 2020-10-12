//import store from '@/store/index';

const state = {
  CNT: 0,
  row: [],
};
const mutations = {
  getAnimalsList(state, data) {
    state.CNT = data[0].head[0].list_total_count;
    state.row = data[1].row;
  },
};

export default { state, mutations };
