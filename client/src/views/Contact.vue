<template lang="html">
  <div class="container">
    <div class="window">
      <window-title-bar title="Contact Me"></window-title-bar>

      <div class="container">
        <div class="row">

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

          <div class="info">
            <table>
              <tr>
                <td><img class="cnt-img" src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedIn"></td>
                <td>ashir-qureshi</td>
              </tr>
              <tr>
                <td><img class="cnt-img" src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedIn"></td>
                  <td>Ashmanq</td>
              </tr>
              <tr>
                <td><img class="cnt-img" src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedIn"></td>
                <td>@Ash_ManQ</td>
              </tr>
              <tr>
                <td><img class="cnt-img" src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedIn"></td>
              </tr>
            </table>
          </div>

        </div>

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
    flex-direction: column;
    align-items: center;
    img {
      height:60px;
    }
    td {
      width: 1px;
    }
  }

  .form {
    flex:2;
    display: grid;
    align-self: center;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    padding-top: 3em;
  }
  .form label {
    font-size: 1.2em;
    margin-right:1em;
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
      flex:1;
      img {
        height:40px;
      }
    }
    .form {
      grid-template-columns: 1fr ;
      padding: 1em;
    }
    .form label {
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
