<template>
  <div>
    <div id="image-holder" :style="{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.44) 29.17%, rgba(0, 0, 0, 0.1) 46.88%, rgba(0, 0, 0, 0.1) 100%), url(${ content.image })` }" align="left">
      <div id="text-holder">
        <h3 class="text-white">{{ content.title }}</h3>
        <p class="text-white">{{ content.subtitle }}</p>
        <nuxt-link to="/aanbod"><button type="button" class="btn btn-small mt-3 bg-yellow darkblue">Bekijk Projecten</button></nuxt-link>
      </div>
    </div>
    <div class="bg-lightgrey" id="shadow"></div>
  </div>

</template>

<script>
  export default {
      name: 'project-holder',
      props : {
          content: Object
      },
  }
</script>

<style scoped>
  #image-holder{
    position: relative;
    width: 100%;
    padding-top: 75%;
    background-position: center;
    background-size: cover;
  }

  #shadow{
    width: 100%;
    height: 7px;
  }

  #text-holder{
    padding: 2rem;
    position: absolute;
    bottom: 0;
  }
</style>
