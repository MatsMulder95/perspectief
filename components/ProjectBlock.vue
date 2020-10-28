<template>
  <div class="ProjectBlock">
    <div class="container">
      <div class="row" align="center">
        <div class="col-12 pt-5">
          <h2 class="yellow">{{ content.title }}</h2>
        </div>
      </div>
      <div class="row justify-content-center" align="center">
        <div class="col-9">
          <h4 class="darkblue">{{ content.subtitle }}</h4>
        </div>
      </div>
      <div class="row bg-lightblue mt-3">
        <div v-html="info" class="col-12 two-column-content" ></div>
      </div>
      <div class="row bg-lightblue pb-3">
        <div class="col-12" align="center">
          <h3 style="font-size: 2rem">Bekijk onze recente projecten:</h3>
        </div>
      </div>

  </div>
    <div class="container-fluid">

      <div class="row justify-content-center">
        <div class="col-10">
          <div class="owl-carousel owl-theme">
            <div v-for="project in projects" class="item">
              <ProjectHolder :content="project" link="/contact"></ProjectHolder>
            </div>
          </div>


        </div>

      </div>
    </div>
    <div class="container bg-lightblue" style="height: 75px"></div>
    <div class="container bg-darkblue pt-3"></div>



  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it'
  import ProjectHolder from "./ProjectHolder";
  const md = new MarkdownIt();
  export default {
      name: 'project-block',
      components: {ProjectHolder},
      props: {
          content: Object,
          projects: Array,
      },
      created() {
          this.info = md.render(this.content.content);
          this.example_project = {
              title: 'Tuin in Diepenveeen',
              subtitle: "een mooi project hoor",
              image: '/images/example_image.jpg',
          }

      },

  }
</script>

<style scoped>
  .two-column-content{
    column-count: 2;
    padding: 4rem;
  }

  #color-container{
    height: 100%;
    position: absolute;
  }

  .owl-nav{
    background-color: transparent!important;
  }


</style>
