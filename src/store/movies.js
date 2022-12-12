import router from '~/routes'
import { request } from '~/api'
import { toRaw } from 'vue'

export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
      keyword: '',
      totalResults: '',
      page: 1
    }
  },
  getters: {
    totalPages(state) {
      return Math.ceil(state.totalResults / 10)
    }
  },
  mutations: {
    updateMovieList(state, payload) {
      const { Search, totalResults, keyword, page } = payload
      state.movieList = Search
      state.totalResults = totalResults
      state.keyword = keyword
      state.page = page
    }
  },
  actions: {
    async fetchMovies({ commit, state }, payload) {
      const { page } = payload
      const keyword = payload.keyword ? payload.keyword : state.keyword
      const movies = await request(`s=${keyword}&page=${page}`)

      let { Search, totalResults } = movies
      if(page > 1) {
        const movieListCopy = toRaw(state.movieList)
        Search = [...movieListCopy, ...Search]
      }
      commit('updateMovieList', {
        Search,
        totalResults,
        keyword,
        page
      })

      router.push({
        name: 'search',
        query: { keyword: keyword }
      })
    }
  }
}
