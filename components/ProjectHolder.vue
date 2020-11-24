<template>
  <div class="container-fluid project-holder">
    <div class="row">
      <div class="col-12" style="padding: 1vh">
        <div class="content"  :style="{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.44) 29.17%, rgba(0, 0, 0, 0.1) 46.88%, rgba(0, 0, 0, 0.1) 100%), url(${ content.image })` }">
          <div class="text-holder container-fluid" align="left">
            <div class="row">
              <div class="col-12">
                <h3 class="text-white">{{ content.title }}</h3>
                <p class="text-white">{{ content.subtitle }}</p>
              </div>
            </div>
          </div>
          <nuxt-link class="project-link" :to="link"><button type="button" class="btn btn-small mt-3 bg-yellow darkblue">{{ content.btn }}</button></nuxt-link>


        </div>
      </div>
    </div>
  </div>


    <!--
    <div id="image-holder" :style="{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.44) 29.17%, rgba(0, 0, 0, 0.1) 46.88%, rgba(0, 0, 0, 0.1) 100%), url(${ content.image })` }" align="left">
      <div id="text-holder" >

      </div>
    </div>

    <div class="bg-lightgrey" id="shadow"></div>
    -->

</template>

<script>
  export default {
      name: 'project-holder',
      props : {
          content: Object,
          link: String,
      },
  }
</script>

<style scoped>

  .content{
    background-size: cover;
    background-position: center;
    padding-bottom: 3rem;
    min-height: 40vh;
    padding-top: 19vh;
  }

  .text-holder{
    position: relative;
    height: 100%;
    padding: 1rem;
  }

  .project-holder{
    border: solid 2px var(--bg);
  }
  .project-link{
    position: absolute;
    left: 25px;
    bottom: 25px;
  }



</style>
