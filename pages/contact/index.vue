<template>
  <div>
    <Introduction :content="contact"></Introduction>
    <LargeImage :src="contact.large_image.src" style="margin-top: 20vh"></LargeImage>
    <div class="bg-darkyellow">
      <ContentBlock left :content="contact.form"  style="padding-bottom: 25vh">

       <form id="my-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">


         <input type="hidden" name="form-name" value="contact">

         <p>
           <label >Naam:</label>
           <input required type="text" class="form-control" name="name">
         </p>
         <p>
           <label >Email:</label>
           <input required type="email" class="form-control" name="email">
         </p>
         <p>
           <label >Telefoonnummer:</label>
           <input required type="tel" class="form-control" name="phone">
         </p>
         <p>
           <label>Bericht:</label>
           <textarea rows="5" class="form-control" name="message"></textarea>
         </p>
         <p>
           <button id="form-submission" type="submit" class="btn mt-2 bg-pink">Verstuur bericht<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div></button>
         </p>


        </form>

      </ContentBlock>

      <ContentBlock  :content="contact.contact" style="padding-bottom: 15vh">
        <div v-html="contact_content"></div>
      </ContentBlock>

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
      mounted() {
        $("#my-form").submit(function(e) {
          e.preventDefault();

          document.getElementsByClassName('spinner-border')[0].style.display = 'inline-block'
          document.getElementById('form-submission').disabled = true
          document.getElementById('form-submission').classList.add('loadbtn')

          var $form = $(this);
          $.post($form.attr("action"), $form.serialize()).then(function() {
            setTimeout(function(){
              document.getElementById('form-submission').innerHTML = "Verzonden" + '<span style="display: inline-flex; vertical-align: sub; margin-left: 1rem; font-size: 2vh" class="material-icons">done</span>'

            }, 1000);
          });
        });
      }
    }
</script>

<style scoped>
  div >>> .large-image-back{
    background-color: #C1BCA8;
  }

  .spinner-border{
    display: none;
    margin-left: 1rem
  }

  div >>> h3{
    font-size: 1.6rem;
    margin-bottom: 25px;
    font-family: 'Raleway', sans-serif;
  }


</style>

