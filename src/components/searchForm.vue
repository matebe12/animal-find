<template>
  <form action="">
    <select name="" id="">
      <option value="1">전체</option>
      <option value="2">강아지</option>
      <option value="3">고양이</option>
    </select>
    <input type="text" placeholder="시/군을 입력해주세요." v-model="SIGUN_NM" />
    <span @click="getAnimalsList()"><i class="fas fa-search"></i></span>
  </form>
</template>

<script>
import { getAnimals } from '@/api/animals';
export default {
  data() {
    return {
      SIGUN_NM: '',
    };
  },
  methods: {
    async getAnimalsList() {
      try {
        const reqData = {
          pIndex: 1,
          SIGUN_NM: this.SIGUN_NM,
          PBLANC_BEGIN_DE: '',
          PBLANC_END_DE: '',
          STATE_NM: '',
          SPECIES_NM: '',
          SHTER_NM: '',
        };
        const result = await getAnimals(reqData);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
span {
  position: relative;
  left: -8%;
  cursor: pointer;
}
select,
option {
  width: 10rem;
  height: 3rem;
  border-radius: 1rem 1rem 1rem 1rem;
  border-color: #90b4ff;
  border-style: solid;
}
select::-ms-expand {
  display: none; /* 화살표 없애기 for IE10, 11*/
}
input {
  width: 30rem;
  height: 2.5rem;
  border-radius: 1rem 1rem 1rem 1rem;
  border-color: #90b4ff;
  margin-left: 1rem;
  border-style: solid;
  text-align: center;
  letter-spacing: 0.1rem;
}
input:focus,
select:focus {
  outline: none;
}
</style>
