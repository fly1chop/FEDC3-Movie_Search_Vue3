<template>
  <div class="padding-container">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '~/assets/_reset'; 

.header {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  
  z-index: 1000;
  width: 90%;
  max-width: calc(#{$max-width} - 12rem);
  height: 7rem;
  border: 1px solid $color-box-border;
  border-radius: $border-radius-default;
  background-color: $color-box-bg;
  box-shadow: $box-shadow;
  padding: 0 4rem;
  display: flex;
  align-items: center;

  a.link {
    font-size: $font-size-default;
    width: 5rem;
  }

  .search-form {
    margin: 0 auto;
  }
}

.btn {
  font-size: $font-size-default;
  border: 1px solid $color-border;
  border-radius: $border-radius-default;
  background-color: $color-box-bg;
  padding: 0 2rem;
  box-shadow: $box-shadow;
  height: 3.4rem;
  line-height: 3.5rem;

  &:hover, &:focus {
    border-color: $color-box-border-hover;
    background-color: $color-box-bg-hover;
  }
}
</style>
