<template lang="html">
  <div class="container">
    <div class="window">
      <window-title-bar title="Contact Me"></window-title-bar>

      <div class="container">
        <form id="contact-form" class="form" @submit.prevent="sendMail()" action="index.html" method="post">
          <label for="name">Name:</label>
          <input type="text" name="name" v-model:value="newMail.name" required>

          <label for="email">Email:</label>
          <input type="email" name="email" v-model:value="newMail.email" required>

          <label for="message">Message:</label>
          <textarea name="message" rows="8" cols="80" v-model:value="newMail.message" required></textarea>
          <label for=""></label>
          <input id="sub-btn" class="btn"
          type="submit" name="submit" value="submit"/>
          <p></p>
          <p class="warning-msg">{{ warningMsg }}</p>
        </form>

      </div>
    </div>

  </div>
</template>

<script>

import MailService from '@/services/MailService.js';

export default {
  name: 'contact',
  data() {
    return {
      newMail: {
        name: "",
        email: "",
        message: ""
      },
      warningMsg: "",
    }
  },
  mounted() {
    this.warningMsg = "";
  },
  methods: {

    async sendMail() {

      this.warningMsg = "";

      // Google ReCaptcha
      await this.$recaptchaLoaded();
      const token = await this.$recaptcha('submit');

      this.newMail.token = token;

      // Send message to server
      MailService.sendMail(this.newMail)
      .then((res) => {
        this.newMail.name = "";
        this.newMail.email = "";
        this.newMail.message = ""

        if(res.error) {
          this.warningMsg = res.error;
        } else {
          this.warningMsg = "Success!"
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>


.form {
  display: grid;
  align-self: center;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  padding-top: 3em;
}
.form label {
  font-size: 1.5em;
  margin-right:1em;
}
.form input[type=text],input[type=email],input[type=submit],textarea {
  font-size: 1.5em;
  font-family: $primary-font;
  margin:0.2em;
}

.warning-msg {
  font-size: 2em;
  text-align: center;
}
#sub-btn{
  width:10em;
  margin:1em auto 1em auto;

}
</style>
