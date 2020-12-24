<template>
  <div>
    <Introduction :content="over"></Introduction>
    <LargeImage :src="over.large_image.src" style="margin-top: 15vh"></LargeImage>
    <div class="bg-green">
      <ContentBlock :content="over.achtergrond" left  style="padding-bottom: 20vh">
        <div class="darkblue" v-html="achtergrond_content"></div>
      </ContentBlock>

      <ContentBlock :content="over.werkwijze"  style="padding-bottom: 20vh">
        <div class="darkblue"  v-html="achtergrond_werkwijze"></div>
      </ContentBlock>

      <ContentBlock :content="over.kosten" left style="padding-bottom: 20vh">
        <div  v-html="achtergrond_kosten"></div>
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
    import CallAction from "../../components/CallAction";
    import ContentBlockWide from "@/components/ContentBlockWide";
    const md = new MarkdownIt();
    export default {
        head: {
          title: 'Perspectief - Over ons'
        },
        components: {ContentBlockWide, CallAction, ContentBlock, LargeImage, Introduction},
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
    }
</script>

<style scoped>
  div >>> .large-image-back{
    background-color: #B3C1A8;
  }

  .content-block-wide >>> h6{
    margin-top: 25px;
  }

</style>

