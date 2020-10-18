<template>
  <div>
    <div class="img">
      <img :src="require('@/assets/00502739_20180907.jpg')" alt="" />
      <h2>경기도 유기 보호 동물 현황</h2>
    </div>

    <div class="searchForm">
      <searchForm />
    </div>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm';

export default {
  components: {
    searchForm,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
h2 {
  font-family: 'Poor Story', cursive;
}
.searchForm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.img {
  text-align: center;
}
img {
  height: 20rem;
}
</style>
