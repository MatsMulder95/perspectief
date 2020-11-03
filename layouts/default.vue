<template>
  <div id="page-holder">
    <div id="page-transition-holder"></div>
    <div id="particles-js"></div>
    <PageHeader style="position: relative; z-index: 70"></PageHeader>
    <Nuxt style="position: relative; z-index: 70"></Nuxt>
    <PageFooter style="position: relative; z-index: 70"></PageFooter>
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
                href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@500;700&family=Raleway:wght@400;500;600;700&display=swap",
            }
        ],
        mounted() {
            particlesJS.load('particles-js', 'particles.json', function() {
                console.log('callback - particles.js config loaded');
            });
        }

    }

</script>


<style>
  #page-holder {
    overflow: hidden;

  }

  #particles-js{
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 50;
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
    margin-left: 0;
  }

  .home-enter-active, .home-leave-active {
    transition: opacity 500ms;
  }
  .home-enter, .home-leave-active { opacity: 0; }

  p{
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 8vh;
  }

  h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 4rem;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

  h4 {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
  }

  h5 {
    font-family: vivaldi;
    font-size: 5vh;
  }

  h6 {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
  }


</style>

