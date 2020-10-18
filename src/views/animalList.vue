<template>
  <div class="container">
    <div class="searchForm">
      <searchForm />
    </div>
    <div class="row">
      <div v-if="getAnimalList.length < 1">
        <nodata />
      </div>
      <div v-else class="box">
        <div v-for="(item, index) in getAnimalList" :key="index" class="item">
          <router-link to="" @click.native="getAnimalInfo(item)" class="image">
            <img :src="item.THUMB_IMAGE_COURS" alt="" />
          </router-link>
          <router-link to="" @click.native="getAnimalInfo(item)"
            ><p>{{ item.SPECIES_NM }}</p></router-link
          >
          <router-link to="" @click.native="getAnimalInfo(item)" class="image">
            <div class="overlay">
              <p>품종</p>
              <p>{{ item.SPECIES_NM }}</p>
              <p>색상 {{ item.COLOR_NM }}</p>
              <p>성별 {{ item.SEX_NM }}</p>
              <p>특징</p>
              <p>{{ item.SFETR_INFO }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pagination">
      <VuePaginateAI
        :totalPage="totalCNT"
        @btnClick="changePage"
        activeBGColor="success"
      />
    </div>
  </div>
</template>

<script>
import VuePaginateAI from 'vue-paginate-al';
import searchForm from '@/components/searchForm';
import nodata from '@/components/nodata';

export default {
  computed: {
    getAnimalList() {
      return this.$store.getters.getAnimalsList.row.filter((x, i) => i < 9); //9개 까지만 보여준다.
    },
    totalCNT() {
      return this.$store.getters.getAnimalsList.CNT / 10;
    },
  },
  components: {
    VuePaginateAI,
    searchForm,
    nodata,
  },
  methods: {
    async changePage(n) {
      const reqData = {
        pIndex: n,
        SIGUN_NM: this.$route.query.SIGUN_NM,
        PBLANC_BEGIN_DE: '',
        PBLANC_END_DE: '',
        STATE_NM: '',
        SPECIES_NM: '',
        SHTER_NM: '',
      };
      await this.$store.dispatch('getAnimalsList', reqData);
      // this.$router.push({
      //   path: '/animalList',
      //   query: {
      //     SIGUN_NM: this.$route.query.SIGUN_NM,
      //     pIndex: n,
      //     tdate: new Date().getTime(),
      //   },
      // });
      //this.$route.query.pIndex = n;
    },
    getAnimalInfo(item) {
      this.$store.commit('setCurrentAnimal', item);
      this.$router.replace({
        path: '/view',
        query: {
          ABDM_IDNTFY_NO: item.ABDM_IDNTFY_NO,
        },
      });
    },
  },
};
</script>

<style scoped>
.searchForm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
img {
  width: 20rem;
  height: 20rem;
}
.item {
  width: 20rem;
  position: relative;
}
.item a {
  text-align: center;
  text-decoration: none;
}
.pagination {
  display: flex;
  justify-content: center;
}
.item:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 85%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #000000;
}
.overlay p {
  color: aliceblue;
}
@media screen and (min-width: 660px) {
  .box {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
@media screen and (min-width: 976px) {
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
}
</style>
