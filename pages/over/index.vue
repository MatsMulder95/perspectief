<template>
  <div>
    <Introduction :content="over"></Introduction>
    <LargeImage :src="over.large_image.src" style="margin-top: 15vh"></LargeImage>
    <div class="bg-green">
      <ContentBlock :content="over.achtergrond"  style="padding-bottom: 25vh">
        <div v-html="achtergrond_content"></div>
      </ContentBlock>

      <ContentBlock :content="over.werkwijze" left style="padding-bottom: 25vh">
        <div v-html="achtergrond_werkwijze"></div>
      </ContentBlock>

      <ContentBlock :content="over.kosten"  style="padding-bottom: 15vh">
        <div v-html="achtergrond_kosten"></div>
      </ContentBlock>

    </div>

    <CallAction :content="over.call_to_action" link="/contact" style="margin-top: 15vh; padding-bottom: 15vh"></CallAction>

  </div>

</template>

<script>
    import Introduction from "../../components/Introduction";
    import LargeImage from "../../components/LargeImage";
    import ContentBlock from "../../components/ContentBlock";
    import MarkdownIt from 'markdown-it'
    const md = new MarkdownIt();
    export default {
        components: {ContentBlock, LargeImage, Introduction},
        colorMode: 'green',
        async asyncData({$content}) {
            const over = await $content('over').fetch()
            return {
                over
            }
        },
        created () {
            this.achtergrond_content = md.render(this.over.achtergrond.content)
            this.achtergrond_werkwijze = md.render(this.over.werkwijze.content)
            this.achtergrond_kosten = md.render(this.over.kosten.content)
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
    background-color: #B3C1A8;
  }

</style>

