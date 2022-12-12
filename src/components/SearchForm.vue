<template>
  <form @submit.prevent>
    <input
      v-model="keyword"
      class="search-form__input"
      type="text"
      placeholder="Search for movies" />
    <button
      class="btn"
      @click="fetchMovies">
      Search
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    fetchMovies() {
      this.$store.dispatch('movies/fetchMovies', {
        keyword: this.keyword,
        page: 1
      })
      this.keyword = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  align-items: center;
  
  &__input {
    border-radius: $border-radius-default;
    margin-right: 1.5rem;
    padding: 1rem 2rem;
    width: 40vw;
    min-width: 15rem;
  }
}
</style>
