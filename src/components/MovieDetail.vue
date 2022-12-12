<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      class="modal">
      <div class="modal__inner">
        <button
          class="btn close"
          @click="updateIsOpen(false)">
          CLOSE
        </button>
        <div class="modal__content">
          <img
            :src="movie.Poster"
            :alt="movie.Title" />
          <div>
            <h2>{{ movie.Title }}</h2>
            <p>Release Date: {{ movie.Released }}</p>
            <p>Director: {{ movie.Director }}</p>
            <p>Actors: {{ movie.Actors }}</p>
            <p class="plot">
              {{ movie.Plot }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('details', {
      movie: 'movieDetails',
      isOpen: 'isOpen'
    })
  },
  methods: {
    ...mapMutations('details', [
      'updateIsOpen'
    ])
  }
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    background-color: $color-bg;
    border: 1px solid $color-border;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: $box-shadow;
    width: 60vw;
    height: 70vh;

    button.close {
      float: right;
    }
  }

  &__content {
    display: flex;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;

    img {
      height: 100%;
      margin-right: 2rem;
    }

    div {
      overflow: auto;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.3rem;
      }
    }

  }
}
</style>
