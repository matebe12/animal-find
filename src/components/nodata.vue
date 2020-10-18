<template>
  <div>
    <div class="searchForm">
      <searchForm />
    </div>
    <div class="mainbox">
      <i class="far fa-question-circle fa-spin"></i>
      <div class="msg">
        존재하는 데이터가 없습니다.
        <p><router-link to="/">홈으로</router-link></p>
        <p>
          <router-link to="" @click.native="backPage">뒤로가기</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm';
export default {
  components: {
    searchForm,
  },
  methods: {
    backPage() {
      this.$router.back(-1);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');

.searchForm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.mainbox {
  margin: auto;
  height: 600px;
  width: 600px;
  position: relative;
  background-color: cornflowerblue;
}

.err {
  color: #ffffff;
  font-family: 'Poor Story', cursive;
  font-size: 10.5rem;
  position: absolute;
  left: 25%;
  top: 8%;
}

.far {
  position: absolute;
  font-size: 7rem;
  left: 45%;
  top: 15%;
  color: #ffffff;
}

.err2 {
  color: #ffffff;
  font-family: 'Poor Story', cursive;
  font-size: 10.5rem;
  position: absolute;
  left: 68%;
  top: 8%;
}

.msg {
  text-align: center;
  font-family: 'Poor Story', cursive;
  font-size: 1.6rem;
  position: absolute;
  left: 16%;
  top: 45%;
  width: 75%;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .mainbox {
    margin: auto;
    height: 600px;
    width: 300px;
    position: relative;
  }
  .err {
    color: #ffffff;
    font-family: 'Poor Story', cursive;
    font-size: 8rem;
    position: absolute;
    left: 20%;
    top: 8%;
  }

  .far {
    position: absolute;
    font-size: 5rem;
    left: 45%;
    top: 15%;
    color: #ffffff;
  }
  .err2 {
    color: #ffffff;
    font-family: 'Poor Story', cursive;
    font-size: 8rem;
    position: absolute;
    left: 73%;
    top: 8%;
  }
}
</style>
