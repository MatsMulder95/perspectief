<template>
  <div id="page-holder">
    <div id="page-transition-holder"></div>
    <PageHeader />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script>
    import PageHeader from "../components/PageHeader";
    import PageFooter from "../components/PageFooter";
    export default {
        components: {PageFooter, PageHeader},
        link: [
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@500;700&display=swap",
            }
        ],


    }

</script>


<style>
  #page-holder {
    overflow: hidden;
    background-image: url("/images/grid.png");
    background-size: 750px 750px;
    background-repeat: repeat;
  }

  #page-overlay{
    position: absolute;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: black;
    margin-left: 100vw;
    -webkit-transition: ease-out 2s;
    -moz-transition: ease-out 2s;
    transition: ease-out 2s;
  }

  #page-transition-holder{
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #153243;
    margin-left: 100%;
  }


  .home-enter-active, .home-leave-active {
    transition: opacity 500ms;
  }
  .home-enter, .home-leave-active { opacity: 0; }
</style>

