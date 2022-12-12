<template>
  <header class="header">
    <RouterLink
      class="link"
      to="/">
      Home
    </RouterLink>
    <SearchForm class="search-form" />
  </header>
  <main>
    <section class="movies">
      <h1 class="movies__title">
        Search results for: {{ query }} ({{ totalResults ? totalResults : 0 }})
      </h1>
      <ul class="movies__list">
        <li
          v-for="movie in movieList"
          :key="movie.imdbID"
          class="movie">
          <div class="movie__img">
            <img
              :src="movie.Poster"
              :alt="movie.Title" />
            <div class="movie__info">
              <div class="box">
                <h2 class="movie__info--title">
                  {{ movie.Title }}
                </h2>
                <p class="movie__info--year">
                  {{ movie.Year }}
                </p>
                <button
                  :id="movie.imdbID"
                  class="btn"
                  @click="fetchMovieDetails">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <h2
        v-if="!totalResults"
        class="no-results">
        Sorry, no results were found... 😢
      </h2>
      <button
        v-if="totalResults"
        class="btn load-more"
        @click="fetchMovies">
        Load More
      </button>
    </section>
    <MovieDetail />
  </main>
</template>

<script>
import SearchForm from '~/components/SearchForm'
import MovieDetail from '~/components/MovieDetail'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    MovieDetail,
    SearchForm
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('movies', [
      'movieList',
      'totalResults',
      'page'
    ]),
    ...mapGetters('movies', ['totalPages'])
  }, 
  methods: {
    fetchMovieDetails(e) {
      this.$store.dispatch('details/fetchMovieDetails', e.target.id)
    },
    fetchMovies() {
      if(this.page < this.totalPages) {
        let nextPage = this.page
        this.$store.dispatch('movies/fetchMovies', {
          page: nextPage += 1
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.movies {
  margin: 12rem 0;

  &__title {
    font-size: 3.4rem;
    margin-bottom: 3rem;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 20rem);
    grid-gap: 3rem;
    justify-content: center;
  }

  .load-more {
    display: block;
    margin: 4rem auto;
  }

  .no-results {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
  }
}

.movie {
  position: relative;

  &__info {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;

    &--title {
      font-size: 2rem;
      text-align: center;
      line-height: 1.4;
    }

    &--year {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
    
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: $color-box-bg-hover;
      opacity: 0.9;
    }

    .box {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
      
  }

  &:hover, &:focus {
    .movie__info {
      display: block;
    }    
  }
}
</style>
