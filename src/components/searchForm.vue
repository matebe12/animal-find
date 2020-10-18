<template>
  <div>
    <form action="" @submit.prevent="getAnimalsList()">
      <input
        type="text"
        placeholder="시/군을 입력해주세요."
        v-model="SIGUN_NM"
        id="SIGN_NM"
        @input="getSigun"
      />
      <span @click="getAnimalsList()"><i class="fas fa-search"></i></span>
      <div id="list">
        <div
          v-for="(item, index) in SIGUN"
          :key="index"
          class="list"
          @click="setText(index)"
        >
          <div class="item_name" v-html="getHighlight(item)"></div>
          <input type="hidden" name="" :value="item" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { sigun } from '@/util/sigun';
export default {
  data() {
    return {
      SIGUN_NM: '',
      SIGUN: [],
    };
  },
  mounted() {
    /* eslint-disable */
    let currentIndex = -1;
    let input = document.getElementById('SIGN_NM');
    input.addEventListener('keydown', event => {
      let div = document.getElementsByClassName('list');
      if(event.keyCode === 40){
        currentIndex++;
        event.preventDefault();// 아래면 이벤트를 멈춘다.
        addClassName(div);
      }else if(event.keyCode === 38){
        currentIndex--;
        event.preventDefault();// 아래면 이벤트를 멈춘다.
        addClassName(div);
      }else if(event.keyCode === 13){
        selectSIGUN(div);
      }else {
        currentIndex = -1;
      }
    });
    document.addEventListener('click', () => {
      let div = document.getElementById('list');
      removeClass(div);      
    })
    const addClassName = (div) => {
      if(!div) return false;
        removeClassName(div);
        if (currentIndex >= div.length) currentIndex = 0; // 맨 아래일때 위로 보냄
        if (currentIndex < 0) currentIndex = div.length - 1; //최상위 일때 먠 아래 목록으로 보냄.
        div[currentIndex].classList.add('active');
    };

    const removeClassName = (div) => {
      let length = div.length;
      for(let i = 0; i < length; i++){
        div[i].classList.remove('active'); // active를 지운다.
      }
    };

    const selectSIGUN = (div) => {
      if(div.length > 0){
        this.SIGUN_NM = div[currentIndex].childNodes[1].value;
        removeClass(div);
      }
      
    };
    const removeClass = (div) => {
      this.SIGUN = [];
    }    
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
        await this.$store.dispatch('getAnimalsList', reqData);
        
      if(this.$store.state.animals.CNT === 0){
        this.$router.push({path:'/nodata'});
      }else{
          this.$router.push({
          path: '/animalList',
          query: {
            SIGUN_NM: this.SIGUN_NM,
            tdate: new Date().getTime(),
          },
          params:{
            pIndex: 1,
          }
        });
      }
       
      } catch (error) {
        console.error(error);
      }
    },
    getSigun(e) {
      let name = e.target.value;
      if (name !== '') {
        this.SIGUN = sigun.filter(x => x.includes(name)).filter((y,i) => i < 5);
        }
      else this.SIGUN = [];
    },
    setText(el){
      this.SIGUN_NM = document.getElementsByClassName('list')[el].childNodes[1].value;
    },
    getHighlight(name) {
      let regex = new RegExp(document.getElementById('SIGN_NM').value, 'g');
      let result = name.replace(
        regex,
        `<span class="highlight" style="font-weight:bold;">${
          document.getElementById('SIGN_NM').value
        }</span>`,
      );
      return result;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
span {
  position: relative;
  left: -8%;
  cursor: pointer;
}
option {
  width: 10rem;
  height: 3rem;
  border-radius: 1rem 1rem 1rem 1rem;
  border-color: #90b4ff;
  border-style: solid;
}
input {
  width: 20rem;
  height: 2.5rem;
  border-color: #90b4ff;
  margin-left: 1rem;
  border-style: solid;
  text-align: center;
  letter-spacing: 0.1rem;
}
input:focus {
  outline: none;
}
.list {
  text-align: center;
  width: 20rem;
  font-size: 20px;
  font-family: 'Poor Story', cursive;
  cursor: pointer;
}
.searchList {
  background: #eee;
  border-radius: 1rem 1rem 1rem 1rem;
}
.active {
  background: #90b4ff;
}
#list {
  position: absolute;
  z-index: 1;
  background-color: #eee;
  margin-left: 1rem;
}
</style>
