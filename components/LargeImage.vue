<template>
  <div class="container-fluid">
    <div class="large-image-back" id="color-holder"></div>
    <div :style="{ backgroundImage: `url(${ src })` }" id="image-holder"></div>
    <div style="height: 15vh" class="large-image-back"></div>
  </div>

</template>

<script>
  export default {
      name: 'large-image',
      props: ['src']
  }
</script>

<style scoped>
  #image-holder{
    margin-left: 8%;
    margin-right: 8%;
    background-position: center;
    background-size: cover;
    height: 75vh;
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
