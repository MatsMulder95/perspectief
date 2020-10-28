<template>
  <div>
    <Introduction :content="contact"></Introduction>
    <LargeImage :src="contact.large_image.src" style="margin-top: 20vh"></LargeImage>
    <div class="bg-darkyellow">
      <ContentBlock :content="contact.form"  style="padding-bottom: 25vh">
        <form name="contact" method="POST" data-netlify="true">
          <div class="form-group">
            <label for="FormName">Naam</label>
            <input required type="text" class="form-control" id="FormName">
          </div>
          <div class="form-group">
            <label for="FormEmail">Email address</label>
            <input required type="email" class="form-control" id="FormEmail">
          </div>
          <div class="form-group">
            <label for="FormNumber">Telefoonnummer</label>
            <input required type="number" class="form-control" id="FormNumber">
          </div>
          <div class="form-group">
            <label for="FormMessage">Bericht</label>
            <textarea required class="form-control" id="FormMessage" rows="5"></textarea>
          </div>
          <button type="submit" class="btn mt-2 bg-pink">Vestuur</button>
        </form>

      </ContentBlock>

      <ContentBlock left :content="contact.contact" style="padding-bottom: 15vh">
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
    const md = new MarkdownIt();
    export default {
        components: {ContentBlock, LargeImage, Introduction},
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
    background-color: #C1BCA8;
  }
</style>

