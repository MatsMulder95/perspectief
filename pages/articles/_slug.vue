<template>
  <div>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
    export default {
        async asyncData ({ $content, params }) {
            const post = await $content('articles', params.slug).fetch()

            return { post }
        }
    }
</script>
