<template>
  <div id="page-holder">
    <div id="mobile-nav" class="mobile-nav bg-darkblue d-flex justify-content-center">
      <span id="close-nav" class="material-icons text-white">close</span>
       <table style="height: 100%">
          <tbody>
          <tr>
            <td class="align-middle" align="center">
              <p class="mobile-link-effect">
                <nuxt-link @click.native="closeMenu" id='test' class="mobile-link" to="/">Home</nuxt-link>
              </p>
              <p class="mobile-link-effect">
                <nuxt-link @click.native="closeMenu" class="mobile-link" to="/over">Over</nuxt-link>
              </p>
              <p class="mobile-link-effect">
                <nuxt-link @click.native="closeMenu" class="mobile-link" to="/aanbod">Aanbod</nuxt-link>
              </p>
              <p class="mobile-link-effect">
                <nuxt-link @click.native="closeMenu" class="mobile-link" to="/contact">Contact</nuxt-link>
              </p>
            </td>
          </tr>
          </tbody>
        </table>

    </div>
    <div id="page-transition-holder">
    </div>
    <div id="particles-js"></div>
    <PageHeader style="position: relative; z-index: 70"></PageHeader>
    <Nuxt style="position: relative; z-index: 70"></Nuxt>
    <PageFooter style="position: relative; z-index: 70"></PageFooter>
  </div>
</template>

<script>
    import PageHeader from "../components/PageHeader";
    import PageFooter from "../components/PageFooter";
    import anime from "animejs";


    export default {
        components: {PageFooter, PageHeader},
        link: [
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@500;700&family=Raleway:wght@400;500;600;700&display=swap",
            }
        ],
      methods:{
          closeMenu(){
            anime({
              targets: '.mobile-link-effect',
              opacity: 0,
            });
            anime({
              targets: '#close-nav',
              opacity: 0,
            });
          }
      },
        mounted() {
            particlesJS.load('particles-js', '/particles.json', function() {
                console.log('callback - particles.js config loaded');
            });
            document.getElementById('mobile-nav-button').addEventListener('click',function (el){
              anime({
                targets: '#mobile-nav',
                marginLeft: '0',
                easing: 'easeInOutCubic',
                duration: '500ms',
              });
              anime({
                targets: '.mobile-link-effect',
                opacity: 1,
                delay: anime.stagger(100,{start: 200},{duration: '500ms'})
              });
              anime({
                targets: '#close-nav',
                opacity: 1,
              });
            })
          document.getElementById('close-nav').addEventListener('click',function (el){
            anime({
              targets: '#mobile-nav',
              marginLeft: '100vw',
              easing: 'easeInOutCubic',
              duration: '500ms',
            });
          })
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
    font-size: 1.1rem;
  }

  .mobile-nav{
    position: fixed;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    top: 0;
    margin-left: 100vw;
  }

  .mobile-link{
    color: white;
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
  }

  .mobile-link:hover{
    color: white;
  }
  .mobile-link:focus{
    outline: none!important;
  }

  #close-nav{
    position: absolute;
    right: 0;
    padding: 20px;

  }

</style>

