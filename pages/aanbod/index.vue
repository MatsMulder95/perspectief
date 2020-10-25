<template>
  <div>
    <Introduction :content="aanbod"></Introduction>
    <LargeImage :src="aanbod.large_image.src" style="margin-top: 20vh"></LargeImage>
  </div>

</template>

<script>
    import Introduction from "../../components/Introduction";
    import LargeImage from "../../components/LargeImage";
    export default {
        components: {LargeImage, Introduction},
        colorMode: 'blue',
        async asyncData({$content}) {
            const aanbod = await $content('aanbod').fetch()
            return {
                aanbod,
            }
        },
        transition: {
            leave: function (el, done) {
                const holder = document.getElementById('page-transition-holder');
                holder.classList.add('page-animation');
                holder.addEventListener("transitionend", popOneTimeAlert);
                function popOneTimeAlert() {
                    holder.removeEventListener("transitionend", popOneTimeAlert);
                    done()
                }
                holder.style.marginLeft = '0';
            },
            enter: function (el, done) {
                const holder = document.getElementById('page-transition-holder');
                holder.addEventListener("transitionend", popOneTimeAlert);
                function popOneTimeAlert() {
                    holder.removeEventListener("transitionend", popOneTimeAlert);
                    holder.classList.remove('page-animation');
                    holder.style.marginLeft = '100vw';
                    done()
                }
                holder.style.marginLeft = '-100vw'
            }
        }
    }
</script>

<style scoped>
  div >>> .large-image-back{
    background-color: #AFC2C6;
  }
</style>

