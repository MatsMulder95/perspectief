<template>
  <div class="container introduction">
    <div class="row">
      <div class="col-12">
        <h1 style="white-space: pre-wrap;" class="darkblue"><span class="underline" style="white-space: pre-wrap;">{{ titleFirstPart }}</span>{{ titleLastPart }}</h1>
      </div>
    </div>
    <div class="row mt-1">
      <div class="col-12 col-md-7">
        <h4 class="darkblue">{{ content.introduction.subtitle }}</h4>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
      name: 'introduction',
      props: {
          content: Object
      },
      computed: {
          titleFirstPart: function () {
              const split = Math.floor(this.content.introduction.title.length/3);
              return this.content.introduction.title.substr(0,split)
          },
          titleLastPart: function () {
              const split = Math.floor(this.content.introduction.title.length/3);
              return this.content.introduction.title.substr(split)
          }
      }
  }
</script>

<style scoped>
  .underline {
    border-bottom: 4px solid currentColor;
    display: inline-block;
    line-height: 0.85;
  }

  h4{
    font-weight: 400;
    font-size: 1.2rem;
  }

</style>
