<template>
  <div class="bg-darkblue">
    <div class="container pt-2">
      <div class="row pt-5 pb-5">
        <div class="col-12 col-md-10 lightblue">
          <h5>Perspectief</h5>
          <h2 class="mb-5">Tuin en Landschapsdokter</h2>

          <div>
            <p>Dorpsstraat 44 <br>7321Cl Diepenveen</p>

            <p>0570677757 <br> 0625222829</p>

            <p>info@tuinenlandschapsdokter.nl</p>
          </div>
        </div>
        <div style="position: relative" class="col-12 col-md-2 mt-5 mt-md-0 ml-2 ml-md-0">
          <div class="row" style="position: absolute; bottom: 0">
            <a class="column">
              <a href="https://www.linkedin.com/in/ernst-lohle-98452821/" target="_blank"><img class="social-logo" src="~assets/linkedin.png"></a>
            </a>
            <a class="column">
              <a href="https://www.facebook.com/lohleakk" target="_blank"><img class="social-logo" src="~assets/facebook.png"></a>
            </a>
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

</style>
