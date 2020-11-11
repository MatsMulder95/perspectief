<template>
  <div class="bg-darkblue">
    <div class="container pt-2">
      <div class="row pt-5 pb-5">
        <div class="col-12 col-md-10 lightblue">
          <h5>Perspectief</h5>
          <h2 class="mb-5">Tuin en Landschapsdokter</h2>

          <div>
            <p>Dorpsstraat 44 <br>7321Cl Diepenveen</p>

            <p><a href="tel:0570677757">0570677757</a><br><a href="tel:0625222829">0625222829</a></p>

            <a target="_blank" href="mailto:info@tuinenlandschapsdokter.nl"><p>info@tuinenlandschapsdokter.nl</p></a>
          </div>
        </div>


        <div style="position: relative" class="col-12 col-md-2 mt-5 mt-md-0 ml-2 ml-md-0">
          <div class="row" style="position: absolute; bottom: 0">
            <div class="column">
              <a href="https://www.linkedin.com/in/ernst-lohle-98452821/" target="_blank"><img class="social-logo" src="~assets/linkedin.png"></a>
            </div>
            <div class="column">
              <a href="https://www.facebook.com/lohleakk" target="_blank"><img class="social-logo" src="~assets/facebook.png"></a>
            </div>
          </div>
        </div>


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
    margin: 5px;
    width: 45px;
    transition: all .1s ease-in-out;
  }

  .social-logo:hover{
    transform: scale(1.1);
    cursor: pointer;
  }

  h2{
    margin-top: -1rem;
    font-size: 5vh;
  }

  h5{
    font-size: 2rem;
    margin-left: -5px;
  }

  p{
    font-size: 1.7vh;
  }

  a{
    color: #ECF0F1;
  }

</style>
