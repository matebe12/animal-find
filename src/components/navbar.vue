<template>
  <div class="container">
    <nav class="navbar">
      <ul>
        <li :class="{ active: $route.path == '/' }">
          <router-link to="/">유기 동물 보호 현황</router-link>
        </li>
        <li :class="{ active: $route.path == '/place' }">
          <router-link to="/satong">보호 장소 검색</router-link>
        </li>
      </ul>
      <ul>
        <li :class="{ active: $route.path == '/' }">
          <router-link to="/">로그인</router-link>
        </li>
        <li :class="{ active: $route.path == '/place' }">
          <router-link to="/satong">회원가입</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
.navbar {
  display: flex;
  justify-content: space-between;
  font-family: 'Poor Story', cursive;
  background: #141d24;
  border-radius: 2px;
}
.navbar ul {
  display: flex;
  list-style: none;
}
.navbar ul li a {
  text-decoration: none;
  color: white;
  white-space: nowrap;
}
.navbar ul li {
  transition-delay: 1s;
  transition: 1s;
  margin: 12px;
}
.navbar ul li:hover {
  border-bottom: solid 1px white;
  color: white;
}
.navbar ul li {
  padding: 0.5%;
}
.active {
  border-bottom: solid 1px white;
}
</style>
