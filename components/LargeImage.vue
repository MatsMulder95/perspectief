<template>
  <div class="container-fluid">
    <div id="border">
    <div class="large-image-back" id="color-holder"></div>
    <div :style="{ backgroundImage: `url(${ src })` }" id="image-holder" class="ml-0 ml-sm-3 ml-md-5 mr-0 mr-md-5 mr-sm-3"></div>
    <div style="height: 20vh" class="large-image-back"></div>
    </div>
  </div>

</template>

<script>
  export default {
      name: 'large-image',
      props: ['src'],
      mounted() {



      }
  }
</script>

<style scoped>
  #image-holder{
    background-position: center;
    background-size: cover;
    height: 85vh;
    position: relative;
  }


  .container-fluid{
    padding: 0;
    position: relative;
  }

  #color-holder{
    position: absolute;
    height: 50%;
    width: 100%;
    bottom: 0;
  }

</style>
