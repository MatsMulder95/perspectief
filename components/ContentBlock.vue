<template>
  <div class="container">
    <div class="row" align="center">
      <div class="col-12">
        <h2 class="yellow">{{ content.title }}</h2>
      </div>
    </div>
    <div class="row justify-content-center" align="center">
      <div class="col-9">
        <h4 class="darkblue">{{ content.subtitle }}</h4>
      </div>
    </div>
    <div v-if="left" class="row mt-5">
      <div class="col-4 image-holder">
        <div style="right: 0" class="color-back"><div :style="{ backgroundImage: `url(${ content.image })` }" class="image image-left"></div></div>
      </div>
      <div class="col-8 content-holder content-left">
        <slot>This is the default content if nothing gets specified to go here</slot>
      </div>
    </div>
    <div v-else class="row mt-5">
      <div class="col-8 content-holder">
        <slot>This is the default content if nothing gets specified to go here</slot>
      </div>
      <div class="col-4 image-holder">
        <div  class="color-back"><div :style="{ backgroundImage: `url(${ content.image })` }" class="image"></div></div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
      name: 'content-block',
      props: {
          content: Object,
          left: Boolean,
          largeImage: Boolean,
      }
  }
</script>

<style scoped>
  h4 {
    font-weight: bold;
  }

  .content-holder{
    background-color: var(--main-color);
    padding: 5rem 8rem 5rem 5rem;
  }

  .image-holder{
    position: relative;
    padding: 0;
  }

  .color-back{
    background-color: var(--bg);
    position: absolute;
    width: 110%;
    min-width: 110%;
    height: 90%;
    top: 5%;
  }

  .image{
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 105%;
    top: 2rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 20;
  }

  .image-left{
    left: 2rem;
    right: 0;
  }

  .content-left{
    padding: 5rem 5rem 5rem 8rem;
  }

</style>
