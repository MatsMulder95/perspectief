<template>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <nuxt-link to="/" class="navbar-brand">
      <img src="~/assets/logo.png" alt="">
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
  }
  .nav-link{
    font-family: 'Open Sans', sans-serif;
    color: #DB0D86 !important;
    position: relative;
    margin-left: 1rem;
    font-weight: 400;
  }

  .nav-link:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
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
    font-weight: 900;
  }

</style>
