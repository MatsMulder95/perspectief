<template>
  <div>

    <!-- INTRO -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5 style="margin-left: -10px" class="darkblue">{{ homepage.introduction.name }}</h5>
            <Introduction :content="introduction_content"></Introduction>
            <nuxt-link to="/over"><button type="button" class="btn mt-3 bg-pink">{{ homepage.introduction.btn }}</button></nuxt-link>
          </div>
        </div>

      </div>

    <!-- Large Image -->
    <LargeImage :src="homepage.large_image.src" style="margin-top: 25vh"></LargeImage>

      <div class="bg-grey" style="padding-bottom: 12vh">
        <div class="container" align="center">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="yellow">{{ homepage.aanbod.title }}</h2>
            </div>
            <div class="col-12 col-md-10">
              <h4 class="text-white">{{ homepage.aanbod.subtitle }}</h4>
            </div>

          </div>

            <div class="row">
              <div class="col-12 col-lg-6 p-3">
                <ProjectHolder :content="homepage.aanbod.tuinen" link="/aanbod#tuinen"></ProjectHolder>
              </div>
              <div class="col-12 col-lg-6 p-3">
                <ProjectHolder :content="homepage.aanbod.landgoederen" link="/aanbod#landgoederen"></ProjectHolder>
              </div>

              <div class="col-12 col-lg-6 p-3">
                <ProjectHolder :content="homepage.aanbod.openbare_ruimte" link="/aanbod#openbare-ruimte"></ProjectHolder>
              </div>
              <div class="col-12 col-lg-6 p-3">
                <ProjectHolder :content="homepage.aanbod.kunst" link="/aanbod#kunst"></ProjectHolder>
              </div>
            </div>
        </div>

      </div>

    <CallAction :content="homepage.call_to_action" link="/contact" style="margin-top: 15vh; padding-bottom: 15vh"></CallAction>

  </div>


</template>

<script>
  import LargeImage from "../components/LargeImage";
  import ProjectHolder from "../components/ProjectHolder";
  import CallAction from "../components/CallAction";
  import Introduction from "../components/Introduction";
  export default {
      colorMode: 'grey',
      components: {Introduction, CallAction, ProjectHolder, LargeImage},
      async asyncData({$content}) {
          const homepage = await $content('homepage').fetch()
          return {
              homepage,
          }
      },
      created() {
          this.introduction_content = {
            introduction: {
                title: this.homepage.introduction.title,
                subtitle: this.homepage.introduction.description,
            },

          }
      },

  }
</script>

<style scoped>
  div >>> .large-image-back{
    background-color: #B7B7B7;
  }

  h1{
    margin-top: -1rem;
  }

  .introduction{
    padding: 0;
    margin-top: -1rem;
  }


</style>




