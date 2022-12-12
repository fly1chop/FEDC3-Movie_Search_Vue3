import { request } from '~/api'

export default {
  namespaced: true,
  state() {
    return {
      movieDetails: {},
      isOpen: false
    }
  },
  mutations: {
    updateMovieDetails(state, newState) {
      state.movieDetails = newState
    },
    updateIsOpen(state, newState) {
      state.isOpen = newState
    }
  },
  actions: {
    async fetchMovieDetails({ commit, state }, imdbID) {
      const details = await request(`i=${imdbID}&plot=full`)

      if(!state.isOpen) {
        commit('updateMovieDetails', details)
        commit('updateIsOpen', true)
      }
    }
  }
}
