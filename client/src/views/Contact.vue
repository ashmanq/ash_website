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
            <div class="info">

              <div class="info-item">
                <a href="https://www.linkedin.com/in/ashir-qureshi/">
                  <img class="icon" src="/icons/linkedinicon.svg" alt="linkedIn">
                </a>
              </div>
              <div class="info-item">
                <a href="https://github.com/ashmanq">
                  <img class="icon" src="/icons/githubicon.svg" alt="linkedIn">
                </a>
              </div>
              <div class="info-item">
                <a href="https://www.instagram.com/ash_manq/">
                  <img class="icon" src="/icons/instagramicon.svg" alt="linkedIn">
                </a>
              </div>

            </div>
            <p class="warning-msg">{{ warningMsg }}</p>
          </form>

      </div>
    </div>

  </div>
</template>

<script>

import MailService from '@/services/MailService.js';
import { VueReCaptcha } from 'vue-recaptcha-v3';
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

  .info {
    padding-top: 3em;
    flex:1;
    display:flex;
    // flex-direction: column;
    justify-content: center;

    img {
      height:60px;
      align-self: center;
    }

    a {
      text-decoration: none;
      color: white;
      padding: 0;
    }

    td {
      width: 1px;
    }
  }

  .info-item {
    text-align: center;
    margin: 0.5em;
  }

  .form {
    max-width: 500px;
    margin:auto;
    flex:1;
    display: grid;
    align-self: center;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: auto;
    padding-top: 3em;
  }
  .form label {
    font-size: 1.2em;
    margin-right:1em;
    text-align: right;
  }
  .form input[type=text],input[type=email],input[type=submit],textarea {
    font-size: 1.2em;
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

  @media only screen and (max-width: 600px) {
    .row {
      flex-direction: column;
    }
    .info {
      padding-top: 0;
    }
    .form {
      grid-template-columns: 1fr ;
      padding: 3em 1em 1em 1em;
    }
    .form label {
      text-align: left;
      font-size: 1em;
      margin-right:0.5em;
      padding: 0.3em;
    }
    .form input[type=text],input[type=email],input[type=submit],textarea {
      font-size: 1em;
      padding: 0.2em;
      margin:0em;
    }

    .warning-msg {
      font-size: 1em;
      text-align: center;
    }
    #sub-btn{
      width:10em;
      height:3em
    }
  }
</style>
