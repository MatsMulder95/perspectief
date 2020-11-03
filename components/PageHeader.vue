<template>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <nuxt-link to="/" class="navbar-brand">
      <img src="/logo_png.png" alt="logo pespectief" id="logo">
    </nuxt-link>
    <div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/over">Over</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/aanbod">Aanbod</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="contact/">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script>
  export default {
      name: 'page-header'
  }
</script>

<style>

  .navbar{
    align-items: normal;
    padding: 25px;
  }
  .nav-link{
    font-family: 'Raleway', sans-serif;
    color: #DB0D86 !important;
    position: relative;
    margin-left: 10px;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
  }

  .nav-link:before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 5px;
    left: 0;
    background-color: #DB0D86;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .nav-link:hover:before {
    visibility: visible;
    width: 100%;
  }

  .nuxt-link-exact-active {
    font-weight: 700;
  }

  #logo{
    max-height: 20vh;
    -webkit-transition: ease-out 200ms;
    -moz-transition: ease-out 200ms;
    transition: ease-out 200ms;
  }

  #logo:hover{
    transform: rotate(-5deg);
  }

</style>
