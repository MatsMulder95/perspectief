<template>
  <div>
    <!--
    <div class="project-focus-holder">
        <div class="row">
          <div class="col-12 col-md-8 project-focus-image-holder">
            <div class="project-focus-image"></div>
          </div>
          <div class="col-12 col-md-4">
            <h1>hoi</h1>
          </div>

        </div>


    </div>
    -->
    <Introduction :content="aanbod"></Introduction>
    <LargeImage :src="aanbod.large_image.src" style="margin-top: 20vh"></LargeImage>
    <div class="bg-blue">


      <ProjectBlock id="tuinen" :content="aanbod.tuinen" :projects="tuin_projects"></ProjectBlock>

      <ProjectBlock id="landgoederen" :content="aanbod.landgoederen" :projects="landgoederen_projects"></ProjectBlock>

      <ProjectBlock id="openbare-ruimte" :content="aanbod.openbaar" :projects="openbaar_projects"></ProjectBlock>

      <ProjectBlock id="kunst" :content="aanbod.kunst" :projects="kunst_projects"></ProjectBlock>


    </div>
    <CallAction :content="aanbod.call_to_action" link="/contact" style="margin-top: 15vh; padding-bottom: 15vh"></CallAction>

  </div>

</template>

<script>
    import Introduction from "../../components/Introduction";
    import LargeImage from "../../components/LargeImage";
    import ProjectBlock from "../../components/ProjectBlock";
    import CallAction from "../../components/CallAction";
    import ContentBlock from "~/components/ContentBlock";
    export default {
        components: {ContentBlock, CallAction, ProjectBlock, LargeImage, Introduction},
        colorMode: 'blue',
        async asyncData({$content}) {
            const tuin_projects = await $content('projects/tuinen').fetch();
            const landgoederen_projects = await $content('projects/landgoederen').fetch();
            const openbaar_projects = await $content('projects/openbaar').fetch();
            const kunst_projects = await $content('projects/kunst').fetch();
            const aanbod = await $content('aanbod').fetch();

            return {
                tuin_projects,
                landgoederen_projects,
                openbaar_projects,
                kunst_projects,
                aanbod,
            }
        },
        mounted() {

            loadCarousel();
        },
    }
</script>

<style scoped>
  div >>> .large-image-back{
    background-color: #AFC2C6;
  }

  div >>> .btn-small{
    background-color: #DB0D86!important;
    color: white!important;
  }



  .ProjectBlock{
    padding-bottom: 25vh;
  }

  .project-focus-holder{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 150;
    top: 0;
    background-color: rgba(0,0,0,0.75);
  }

  .project-focus-holder .row{
    height: 100%;
    padding: 5%;
    margin: 0;
  }

  .project-focus-image{
    background-image: url("/images/example_image.jpg");
    background-size: cover;
    height: 100%;
    margin: 15px;
  }

  .project-focus-image-holder{
    background-color: #153243;
    padding: 0;
  }


</style>

