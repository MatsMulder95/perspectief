<template>
  <div class="container" align="center">
    <div class="row">
      <div class="col-12">
        <h2 class="darkblue">{{ content.title }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-9">
        <h4 class="darkblue">{{ content.subtitle }}</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <nuxt-link :to=link><button type="button" class="btn mt-3 bg-pink">{{ content.btn }}</button></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name : 'call-action',
      props: {
          content: Object,
          link: String,
      }
  }
</script>

<style scoped>

</style>
