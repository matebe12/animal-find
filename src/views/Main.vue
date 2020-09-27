<template>
  <div>
    <div class="searchForm">
      <searchForm />
    </div>
    <div class="animalList">
      <div>
        list
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
};
</script>

<style scoped>
.searchForm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}
</style>
