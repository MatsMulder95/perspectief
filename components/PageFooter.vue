<template>
  <div class="bg-darkblue">
    <div class="container pt-2">
      <div class="row pt-5 pb-5">
        <div class="col-10 lightblue">
          <h5>Ernst Lohle</h5>
          <h2 class="mb-5">Tuin en Landschapsdokter</h2>

          <div>
            <p>Dorpsstraat 44 <br>7321Cl Diepenveen</p>

            <p>0570677757 <br> 0625222829</p>

            <p>info@tuinenlandschapsdokter.nl</p>
          </div>
        </div>
        <div style="position: relative" class="col-2">
          <div class="row" style="position: absolute; bottom: 0">
            <a class="column">
              <img class="social-logo" src="~assets/linkedin.png">
            </a>
            <a class="column">
              <img class="social-logo" src="~assets/facebook.png">
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
    width: 50px;
  }

  h2{
    margin-top: -1rem;
    font-size: 3rem;
  }

  h5{
    font-size: 2rem;
  }

</style>
