<template>
  <div>
    <Introduction :content="contact"></Introduction>
    <LargeImage :src="contact.large_image.src" style="margin-top: 20vh"></LargeImage>
    <div class="bg-darkyellow">
      <ContentBlockWide left :content="contact.form"  style="padding-bottom: 25vh">

       <form id="my-form" action="/thank-you" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">


         <input type="hidden" name="form-name" value="contact">
         <div class="form-group">
           <label for="FormName">Naam
           <input required type="text" class="form-control" id="FormName">
           </label>
         </div>
         <div class="form-group">
           <label for="FormEmail">Email address
           <input required type="email" class="form-control" id="FormEmail">
           </label>
         </div>
         <div class="form-group">
           <label for="FormNumber">Telefoonnummer
           <input required type="number" class="form-control" id="FormNumber">
           </label>
         </div>
         <div class="form-group">
           <label for="FormMessage">Bericht
           <textarea required class="form-control" id="FormMessage" rows="5"></textarea>
           </label>
         </div>

          <button type="submit" class="btn mt-2 bg-pink">Vestuur</button>


        </form>

      </ContentBlockWide>

      <ContentBlockWide left :content="contact.contact" style="padding-bottom: 15vh">
        <div v-html="contact_content"></div>
      </ContentBlockWide>

    </div>
    <CallAction :content="contact.call_to_action" link="/aanbod" style="margin-top: 15vh; padding-bottom: 15vh"></CallAction>

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
        components: {ContentBlockWide, CallAction, ContentBlock, LargeImage, Introduction},
        colorMode: 'yellow',

        async asyncData({$content}) {
            const contact = await $content('contact').fetch()
            return {
                contact,
            }
        },
        created () {
            this.contact_content = md.render(this.contact.contact.content)
        },
    }
</script>

<style scoped>
  div >>> .large-image-back{
    background-color: #C1BCA8;
  }


</style>

