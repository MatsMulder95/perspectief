<template>
  <div>

    <Introduction :content="aanbod"></Introduction>
    <LargeImage :src="aanbod.large_image.src" style="margin-top: 20vh"></LargeImage>
    <div class="bg-blue">

      <ProjectBlock :content="aanbod.tuinen" :projects="tuin_projects"></ProjectBlock>

      <ProjectBlock :content="aanbod.landgoederen" :projects="landgoederen_projects"></ProjectBlock>

      <ProjectBlock :content="aanbod.openbaar" :projects="openbaar_projects"></ProjectBlock>

      <ProjectBlock :content="aanbod.kunst" :projects="kunst_projects"></ProjectBlock>

    </div>

    <CallAction :content="aanbod.call_to_action" style="margin-top: 15vh; padding-bottom: 15vh"></CallAction>

  </div>

</template>

<script>
    import Introduction from "../../components/Introduction";
    import LargeImage from "../../components/LargeImage";
    import ProjectBlock from "../../components/ProjectBlock";
    export default {
        components: {ProjectBlock, LargeImage, Introduction},
        colorMode: 'blue',
        async asyncData({$content}) {
            const tuin_projects = await $content('projects/tuinen').fetch();
            const landgoederen_projects = await $content('projects/landgoederen').fetch();
            const openbaar_projects = await $content('projects/openbaar').fetch();
            const kunst_projects = await $content('projects/kunst').fetch();
            const aanbod = await $content('aanbod').fetch();

            return {
                tuin_projects,
                landgoederen_projects,
                openbaar_projects,
                kunst_projects,
                aanbod,
            }
        },
        mounted() {
            loadCarousel();
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

  div >>> .btn-small{
    background-color: #DB0D86!important;
    color: white!important;
  }

  div >>> #shadow {
    height: 0px;
  }

  .ProjectBlock{
    padding-bottom: 25vh;
  }

</style>

