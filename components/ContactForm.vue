<template>
<form
    name="ask-question">
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        @input="ev => form.askPerson = ev.target.value"
        :value="panelist"
        :checked="form.askPerson === panelist"
      />
      <span>{{ panelist }}</span>
    </label>

  </form>
</template>

<script>
export default {
name: "contact-form",
data () {
    return {
      form: {
        askPerson: ""
      },
      panelists: ['Evan You', 'Chris Fritz'],
    }
  },
   methods: {
      encode (data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      handleSubmit () {
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        axios.post(
          "/",
          this.encode({
            "form-name": "ask-question",
            ...this.form
          }),
          axiosConfig
        );
      }
      }
}
</script>

<style scoped>

</style>
