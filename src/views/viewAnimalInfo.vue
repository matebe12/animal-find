<template>
  <div>
    <div class="container">
      <div class="header">
        <h3>정보 보기</h3>
      </div>
      <div class="view">
        <div class="content">
          <div class="image-box">
            <img :src="getItemInfo.IMAGE_COURS" alt="" />
          </div>
        </div>
        <div class="content">
          <div class="text-box">
            <span
              ><strong>유기번호</strong> {{ getItemInfo.ABDM_IDNTFY_NO }}</span
            >
            <div>
              <span><strong>나이</strong> {{ getItemInfo.AGE_INFO }} </span>
              <span
                ><strong>&#9;몸무게</strong> {{ getItemInfo.BDWGH_INFO }}</span
              >
            </div>
            <span><strong>&#9;품종</strong> {{ getItemInfo.SPECIES_NM }}</span>
            <div>
              <span><strong>&#9;색상</strong> {{ getItemInfo.COLOR_NM }}</span>
              <span><strong>&#9;성별</strong> {{ getItemInfo.SEX_NM }}</span>
              <span
                ><strong>&#9;중성화 여부</strong>
                {{ getItemInfo.NEUT_YN }}</span
              >
            </div>
            <span
              ><strong>발견장소</strong>
              {{ getItemInfo.DISCVRY_PLC_INFO }}</span
            >
            <div>
              <span><strong>상태</strong> {{ getItemInfo.STATE_NM }} </span>
            </div>
            <div>
              <span><strong>특징</strong> {{ getItemInfo.SFETR_INFO }} </span>
            </div>
            <div>
              <span
                ><strong>특이사항</strong> {{ getItemInfo.PARTCLR_MATR }}
              </span>
            </div>
            <div>
              <span
                ><strong>보호소명</strong> {{ getItemInfo.SHTER_NM }}
                <a href="javascript:void(0);" @click="changeModal()"
                  >위치보기</a
                ></span
              >
            </div>
            <div>
              <span
                ><strong>보호소 전화번호</strong>
                {{ getItemInfo.SHTER_TELNO }}</span
              >
            </div>
            <div>
              <p><strong>보호장소</strong> {{ getItemInfo.PROTECT_PLC }}</p>
            </div>
            <div>
              <span
                ><strong>관할기관</strong>
                {{ getItemInfo.JURISD_INST_NM }}</span
              >
            </div>
            <div>
              <span><strong>담당자</strong> {{ getItemInfo.CHRGPSN_NM }}</span>
              <span
                ><strong>담당자연락처</strong>
                {{ getItemInfo.CHRGPSN_CONTCT_NO }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <span class="list"
        ><button @click="$router.back(-1)">목록으로</button></span
      >
    </div>
    <modal v-if="showModal" :item="getItemInfo" @closeModal="closeModal" />
  </div>
</template>

<script>
import modal from '@/components/modal';
export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    modal,
  },
  computed: {
    getItemInfo() {
      return this.$store.getters.getCurrentAnimal;
    },
  },
  methods: {
    changeModal() {
      return (this.showModal = true);
    },
    closeModal() {
      return (this.showModal = false);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
* {
  font-family: 'Poor Story', cursive;
}
.container {
  background: #eee;
  margin-top: 0;
}
.header {
  display: flex;
  justify-content: center;
}
.list {
  background-color: dimgrey;
  float: right;
}
.list button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: forestgreen;
}
@media screen and (max-width: 1265px) {
  .image-box img {
    width: 100%;
    height: 40rem;
  }
  .text-box {
    width: 100%;
    text-align: center;
  }
  .text-box span,
  .text-box div span {
    white-space: nowrap;
    font-size: 1.3rem;
    line-height: 3rem;
    word-break: normal;
  }
  .view {
    display: block;
  }
}
@media screen and (min-width: 1266px) {
  .image-box {
    width: 50%;
    height: 50%;
    float: left;
  }
  .image-box img {
    width: 40rem;
    height: 40rem;
  }
  .text-box {
    width: 100%;
    margin-left: 15%;
  }
  .text-box span,
  .text-box div span {
    white-space: nowrap;
    font-size: 1.3rem;
    line-height: 3rem;
    word-break: normal;
  }
  .view {
    display: flex;
  }
}
</style>
