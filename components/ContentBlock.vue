<template>
  <div class="container content-block">
    <div class="row" align="center">
      <div class="col-12">
        <h2 class="yellow">{{ content.title }}</h2>
      </div>
    </div>
    <div class="row justify-content-center" align="center">
      <div class="col-12 col-lg-9">
        <h4 class="darkblue">{{ content.subtitle }}</h4>
      </div>
    </div>

    <div v-if="left" class="row mt-5">
      <div class="col-12 col-lg-4 image-holder">
        <div style="right: 0" class="color-back"><div :style="{ backgroundImage: `url(${ content.image })` }" class="image image-left"></div></div>
      </div>
      <div class="col-12 col-lg-8 content-holder content-left">
        <slot>This is the default content if nothing gets specified to go here</slot>
      </div>
    </div>

    <div v-else class="row mt-5">
      <div class="col-12 col-lg-8 content-holder">
        <slot>This is the default content if nothing gets specified to go here</slot>
      </div>
      <div class="col-12 col-lg-4 image-holder">
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
  .content-holder{
    background-color: var(--main-color);
    padding: 7vh 8vh 7vh 7vh;
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
    top: 1rem;
    bottom: 1rem;
    right: 1rem;
    z-index: 20;
  }

  .image-left{
    left: 1rem;
    right: 0;
  }

  .content-left{
    padding: 7vh 7vh 7vh 8vh;
  }

  @media only screen and (max-width: 575px) {
    .image-holder{
      height: 50vh;
    }
    .color-back{
      top: 0;
      height: 100%;
    }

    .image{
      width: 100%;
      height: 100%;
      top:0;
      left: 0;
  }
  }


</style>
