import router from './index'
import store from '~/store'

router.beforeEach(to => {
  if(to.query.keyword && to.query.keyword !== store.state.movies.keyword) {
    store.dispatch('movies/fetchMovies', {
      keyword: to.query.keyword,
      page: 1
    })
  }
})
