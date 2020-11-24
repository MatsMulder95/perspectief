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
      <div class="col-12 col-lg-8 border-container">
        <div class="content-holder content-left">
          <slot>This is the default content if nothing gets specified to go here</slot>
        </div>

      </div>
    </div>

    <div v-else class="row mt-5">
      <div class="col-12 col-lg-8 border-container">
        <div class="content-holder">
          <slot>This is the default content if nothing gets specified to go here</slot>
        </div>

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
    padding: 7vh 8vh 7vh 7vh;
    border: 1px solid rgba(0,0,0,0.2);
  }

  .border-container{
    background-color: var(--main-color);
    padding: 15px;
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
    padding: 4vw 4vw 4vw 4vw;
  }


  @media only screen and (max-width: 991px) {
    .image-holder{
      height: 40vh;
      overflow: hidden;
    }
    .color-back{
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      position: initial;
    }

    .image{
      width: 100%;
      height: 100%;
      top:0;
      left: 0;
      background-position: center;
  }
  }

  @media only screen and (max-width: 575px) {
    .content-holder{
      padding: 2vh 2vh 2vh 2vh;
      border: none;
    }
  }


</style>
