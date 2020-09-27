<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>
<script>
import navbar from '@/components/navbar';
export default {
  components: {
    navbar,
  },
};
</script>
<style>
body {
  margin: 0;
}
</style>
