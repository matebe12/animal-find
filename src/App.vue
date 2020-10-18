<template>
  <div id="app">
    <navbar />
    <router-view :key="$route.fullPath" />
    <footervue />
  </div>
</template>
<script>
import navbar from '@/components/navbar';
import footervue from '@/components/footer';

export default {
  components: {
    navbar,
    footervue,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  min-height: 100%;
  position: relative;
  padding-bottom: 20rem; /* footer height */
}
</style>
