import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main.vue';
import AnimaList from '@/views/animalList.vue';
import viewAnimalInfo from '@/views/viewAnimalInfo.vue';
import notFound from '@/views/404.vue';
import nodata from '@/components/nodata.vue';

import store from '@/store/index';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/animalList',
    name: 'animalList',
    component: AnimaList,
    beforeEnter: async (to, from, next) => {
      const reqData = {
        pIndex: 1,
        SIGUN_NM: to.query.SIGUN_NM,
        PBLANC_BEGIN_DE: '',
        PBLANC_END_DE: '',
        STATE_NM: '',
        SPECIES_NM: '',
        SHTER_NM: '',
      };
      await store.dispatch('getAnimalsList', reqData);
      if (store.state.animals.CNT === 0) {
        next('/nodata');
      }
      next();
    },
  },
  {
    path: '/view',
    name: 'viewAnimalInfo',
    component: viewAnimalInfo,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    path: '/nodata',
    component: nodata,
  },
  {
    path: '*',
    component: notFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
