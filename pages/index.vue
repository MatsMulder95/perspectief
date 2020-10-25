<template>
  <div>

    <!-- INTRO -->
      <div class="container" style="padding-top: 15vh">
        <div class="row">
          <div class="col-12">
            <h5 class="darkblue">{{ homepage.introduction.name }}</h5>
            <h1 class="darkblue">{{ homepage.introduction.title }}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <h4 class="darkblue" style="font-size: 1.2rem; ">{{ homepage.introduction.description }}</h4>

          </div>
        </div>
        <nuxt-link to="/over"><button type="button" class="btn mt-4 bg-pink">{{ homepage.introduction.btn }}</button></nuxt-link>
      </div>

    <!-- Large Image -->
    <LargeImage :src="homepage.large_image.src" style="margin-top: 25vh"></LargeImage>

      <div class="bg-grey" style="padding-bottom: 12vh">
        <div class="container" align="center">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="yellow">{{ homepage.aanbod.title }}</h2>
            </div>
            <div class="col-9">
              <h4 class="text-white">{{ homepage.aanbod.subtitle }}</h4>
            </div>
          </div>

            <div class="row mt-5">
              <div class="col-6">
                <ProjectHolder :content="homepage.aanbod.tuinen"></ProjectHolder>
              </div>
              <div class="col-6">
                <ProjectHolder :content="homepage.aanbod.landgoederen"></ProjectHolder>
              </div>
            </div>
          <div class="row mt-5">
              <div class="col-6">
                <ProjectHolder :content="homepage.aanbod.openbare_ruimte"></ProjectHolder>
              </div>
              <div class="col-6">
                <ProjectHolder :content="homepage.aanbod.kunst"></ProjectHolder>
              </div>
            </div>
        </div>
      </div>

    <CallAction :content="homepage.call_to_action" style="margin-top: 15vh; padding-bottom: 15vh"></CallAction>

  </div>


</template>

<script>
  import LargeImage from "../components/LargeImage";
  import ProjectHolder from "../components/ProjectHolder";
  import CallAction from "../components/CallAction";
  export default {
      colorMode: 'grey',
      components: {CallAction, ProjectHolder, LargeImage},
      async asyncData({$content}) {
          const homepage = await $content('homepage').fetch()
          return {
              homepage,
          }
      },
      transition: {
          leave: function (el, done) {
              const holder = document.getElementById('page-transition-holder');
              holder.classList.add('page-animation');
              holder.addEventListener("transitionend", popOneTimeAlert);
              function popOneTimeAlert() {
                  holder.removeEventListener("transitionend", popOneTimeAlert);
                  done()
              }
              holder.style.marginLeft = '0';
          },
          enter: function (el, done) {
              const holder = document.getElementById('page-transition-holder');
              holder.addEventListener("transitionend", popOneTimeAlert);
              function popOneTimeAlert() {
                  holder.removeEventListener("transitionend", popOneTimeAlert);
                  holder.classList.remove('page-animation');
                  holder.style.marginLeft = '100vw';
                  done()
              }
              holder.style.marginLeft = '-100vw'
          }
      }

  }
</script>

<style scoped>
  div >>> .large-image-back{
    background-color: #B7B7B7;
  }

  h1{
    margin-top: -2rem;
  }


</style>




