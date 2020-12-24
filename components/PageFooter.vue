<template>
  <div class="bg-darkblue pb-5 pt-4">
    <div class="container">
      <div class="row pt-5">

        <div class="col-12 lightblue">
          <h5>Perspectief</h5>
          <h2 class="mb-5"><span class="underline" style="white-space: pre-wrap;">Tuin en</span> Landschapsdokter</h2>
        </div>
      </div>

      <div class="row lightblue">
        <div class="col-12 col-md-6">
          <div class="row">

            <div class="col-12">
              <p>
                <span class="material-icons contact-icon">markunread_mailbox</span>
                <a href="https://goo.gl/maps/c13JB1RevNgGy7wF6" target="_blank">Dorpsstraat 44 | 7321Cl Diepenveen</a>
              </p>
              <p>
                <span class="material-icons contact-icon">call</span>
                <a href="tel:0570677757">0570677757</a> | <a href="tel:0625222829">0625222829</a>
              </p>
              <p>
                <span class="material-icons contact-icon">alternate_email</span>
                <a target="_blank" href="mailto:info@tuinenlandschapsdokter.nl">info@tuinenlandschapsdokter.nl</a>
              <p>
                <img class="social-logo" src="~assets/linkedin.png">
                <a href="https://www.linkedin.com/in/ernst-lohle-98452821/" target="_blank">Linkedin</a>
              </p>
              <p>
                <img class="social-logo" src="~assets/facebook.png">
                <a href="https://www.facebook.com/lohleakk/" target="_blank">Facebook</a>
              </p>
            </div>

          </div>


        </div>
        </div>



          <!--
          <div class="row" >
            <div class="col-12 col-md-3">
              <h4>Site map</h4>
              <p class="mt-2">
                <nuxt-link to="/">Home</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/over">Over</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/aanbod">Aanbod</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </p>
            </div>
            <div class="col-12 col-md-6 col-lg-5">
              <h4 class="mt-3 mt-md-0">Contact</h4>
              <div class="row mt-2">

                <div class="col-1">
                  <span class="material-icons contact-icon">markunread_mailbox</span>
                  <span class="material-icons contact-icon">call</span>
                  <span class="material-icons contact-icon">alternate_email</span>
                </div>

                <div class="col-11">
                  <p>Dorpsstraat 44 | 7321Cl Diepenveen</p>

                  <p><a href="tel:0570 677 757">0570677757</a> | <a href="tel:0625 222 829">0625222829</a></p>

                  <a target="_blank" href="mailto:info@tuinenlandschapsdokter.nl"><p>info@tuinenlandschapsdokter.nl</p></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <h4 class="mt-3 mt-md-0">Social</h4>
              <div class="row mt-2">

                <div class="col-1">
                  <img class="social-logo" src="~assets/linkedin.png">
                  <img class="social-logo" src="~assets/facebook.png">
                </div>

                <div class="col-10">
                  <p>
                    <a href="https://www.linkedin.com/in/ernst-lohle-98452821/" target="_blank">Facebook</a>
                  </p>
                  <p>
                    <a href="https://www.facebook.com/lohleakk" target="_blank">LinkedIn</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          -->

      <div id="vhg-logo" style="position: relative; width: 100%; height: 100%">
        <a href="https://www.vhg.org/" target="_blank"><img style="position: absolute; bottom: 0; right: 0px; height: 100px" src="/images/vhg_logo.png"></a>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
      name: 'page-footer'
  }
</script>

<style scoped>
  .social-logo {
    width: 1rem;
    margin-right: 10px;
    transition: all .1s ease-in-out;
  }

  h2{
    margin-top: -1rem;
    font-size: 6vh;
  }

  h5{
    font-size: 2rem;
    margin-left: -5px;
  }

  h4{
    font-size: 1.2rem;
  }


  a{
    color: #ECF0F1;
  }

  .contact-icon{
    font-size: 1rem;
    margin-right: 10px;
    vertical-align: auto;
  }

  p{
    margin-bottom: 5px;
    font-size: 1rem;
  }

  .underline {
    border-bottom: 4px solid currentColor;
    display: inline-block;
    line-height: 0.85;
  }

  @media only screen and (max-width: 400px) {
    #vhg-logo{
      margin-top: 50px;
    }
  }



</style>
