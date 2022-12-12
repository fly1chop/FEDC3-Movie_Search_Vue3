import { createStore } from 'vuex'
import movies from './movies'
import details from './details'

export default createStore({
  modules: {
    movies,
    details
  }
})
