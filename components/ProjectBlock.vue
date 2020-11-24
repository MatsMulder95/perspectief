<template>
  <div class="ProjectBlock">

    <div class="container border-container">
      <div class="bg-lightblue">
        <div class="row justify-content-center"  align="center">
          <div class="col-12 pt-5">
            <h2 class="pink">{{ content.title }}</h2>
          </div>
        </div>
        <div class="row justify-content-center" align="center">
          <div class="col-12 col-md-9">
            <h4 class="darkblue">{{ content.subtitle }}</h4>
          </div>
        </div>
        <div class="row mt-4 mt-md-2">
          <div v-html="info" class="col-12 two-column-content"></div>
        </div>
        <div class="row pb-5">
          <div class="col-12" align="center">
            <h3 style="font-size: 1.8rem">Bekijk onze recente projecten:</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin-top: -5vh">
      <div class="row justify-content-center">
        <div class="col-12 project-container">
          <div :id="content.title.replace(/\s/g, '')" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(project, index) in projects" class="carousel-item" :class="{ 'active': index === 0 }">
                    <div class="row">
                      <!--
                      <div class="col-12 col-md-8 project-image" :style="{ backgroundImage: `url(${ project.image })` }" ></div>
                      -->

                      <div class="col-12 col-lg-8 project-image-holder">

                        <div v-for="(picture, index2) in project.pictures" class="own-carousal-image" :class="['carousel-'+project.title.replace(/\s/g, ''),{ 'active-image': index2 === (project.pictures.length-1) }]" :id="'carousel-'+project.title.replace(/\s/g, '')+'-item-'+index2" :style="[{ backgroundImage: `url(${ picture })` }]"></div>

                        <ol class="carousel-indicators">
                          <li v-for="(picture, index2) in project.pictures" onclick="switchCarousel(this)" :class="['carousel-'+project.title.replace(/\s/g, '')+'-controls',{ 'active': index2 === (project.pictures.length-1) }]" :carousel="'carousel-'+project.title.replace(/\s/g, '')" :carousel-item="'carousel-'+project.title.replace(/\s/g, '')+'-item-'+index2"></li>
                        </ol>

                      </div>


                      <div class="col-12 col-lg-4 bg-darkblue p-5">
                        <h3 style="font-size: 2.2rem" class="lightblue">{{ project.title }}</h3>
                        <p class="lightblue mt-3 content-box">{{ project.subtitle }}</p>
                      </div>
                    </div>
              </div>
            </div>
            <a class="carousel-control-prev" :href="'#'+content.title.replace(/\s/g, '')" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#'+content.title.replace(/\s/g, '')" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>


    <!--
    <div class="container-fluid" style="margin-top: -5vh">
      <div class="row justify-content-center">
        <div class="col-12 col-xl-10">
          <div class="owl-carousel owl-theme">
            <div v-for="project in projects" class="item">
                <ProjectHolder :content="project" link="/contact"></ProjectHolder>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container bg-lightblue" style="padding: 0 15px 15px 15px; margin-top: -2px">
      <div class="border-container" style="height: 75px"></div>
    </div>
    -->



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
  mounted() {

  }

}
</script>

<style scoped>
.two-column-content{
  -webkit-columns: 2 400px;
  -moz-columns: 2 400px;;
  columns: 2 400px;;
  padding: 3vw 4vw 3vw 4vw;
}


#color-container{
  height: 100%;
  position: absolute;
}

.owl-nav{
  background-color: transparent!important;
}

.border-container{
  border: solid 2px var(--bg);
  padding: 10px;
}

.project-holder{
  height: 400px;
}

.project-image-holder{
  min-height: 55vh;
}

.carousel-control-prev{
  left: -10%;
}

.carousel-control-next{
  right: -10%;
}

@media only screen and (max-width: 767px) {
  .project-image-holder{
    min-height: 40vh;
  }
}

.own-carousal-image{
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
  transition: ease-out 0.5s;
}

.active-image{
  opacity: 1;
}

p{
  font-size: 1rem;
  font-weight: 500;
}

.project-container{
  padding-left: 14vw;
  padding-right: 14vw;
}

@media only screen and (max-width: 1750px) {
  .project-container{
    padding-left: 8vw;
    padding-right: 8vw;
  }
}

@media only screen and (max-width: 1450px) {
  .project-container{
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

@media only screen and (max-width: 576px) {
  .project-container{
    padding-left: 12px;
    padding-right: 12px;
  }
}

</style>
