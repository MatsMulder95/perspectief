<template>

  <div class="container content-block-wide">
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


    <div class="row justify-content-center" style="margin-top: 20px">

      <div class="col-12 col-md-11">
        <div v-if="left" :style="{ backgroundImage: `url(${ content.image })` }"  class="image"></div>
        <div v-else :style="{ backgroundImage: `url(${ content.image })` }"  class="image image-right"></div>
        <div class="border-container">
          <div class="content-container">
            <div class="slot">
              <slot>This is the default content if nothing gets specified to go here</slot>
            </div>
          </div>
        </div>

      </div>
    </div>




  </div>

</template>

<script>
export default {
name: "ContentBlockWide",
  props: {
    content: Object,
    left: Boolean,
  }
}
</script>

<style scoped>

.image{
  position: absolute;
  height: 55vh;
  left: -3%;
  width: 97%;
  background-size: cover;
  background-position: center;

}

.image-right{
  left: 7%;
}

.border-container{
  margin-top: 75px;
  border: 2px solid var(--bg);;
  padding: 10px;
}


.content-container{
  background-color: var(--bg);
}

.slot{
  width: auto;
  padding: 50vh 4vw 5vh 4vw;
}

@media only screen and (max-width: 575px) {
  .image{
    width: 100%;
    left: 0;
  }

}

</style>
