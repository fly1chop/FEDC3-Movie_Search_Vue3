<template>
  <section class="home">
    <div class="box">
      <SearchForm class="search-form" />
    </div>
  </section>
</template>

<script>
import SearchForm from '~/components/SearchForm'
export default {
  components: {
    SearchForm
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  .box {
    position: absolute;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url(../assets/img/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg);
    background-size: contain;
  }
}
</style>
