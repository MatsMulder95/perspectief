export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Perspectief',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'OwlCarousel/owl.carousel.min.css'},
      { rel: 'stylesheet', href: 'OwlCarousel/owl.theme.default.min.css'},

    ],
    script: [

      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.3/umd/popper.min.js"
      },
      {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
      },

      {
        src: '/test.js',
      },
      {
        src: "/OwlCarousel/owl.carousel.min.js"
      },
      {
        src: "/particles.js"
      },
      {
        src: '/rough.js'
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/color-mode'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'bootstrap-vue/nuxt',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    appear: true,
    beforeLeave: function (el) {
      $("#page-transition-holder").css({"marginLeft": '100vw'});
    },
    enter: function (el, done) {
      $("#page-transition-holder").animate({marginLeft: '-100vw'},"slow",
        function () {
          done()
        });
    },
    leave: function (el, done) {
      $("#page-transition-holder").animate({marginLeft: '0'},"slow", function () {
        done()
      });
    },
  }
}
