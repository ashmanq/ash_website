<template lang="html">
  <div class="container">

    <div action="#" @submit.prevent="login">

        <!-- <form class="form" action="index.html" method="post"> -->
        <form class="form" method="post">
        <h2>Login</h2>

        <label for="username">Username</label>
        <input type="text" name="username" id="username" v-model="username" required autocomplete="username">

        <label for="password">Password</label>
        <input type="password" name="password" id="paswword" v-model="password" required autocomplete="current-password">

        <button class="btn" type="submit" name="button">Login</button>

        <p class="warning-msg">{{ msg }}</p>
        <p></p>
      </form>
    </div>
  </div>
</template>

<script>

import PortfolioService from '@/services/PortfolioService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      msg: '',
    }
  },
  methods: {
    login() {
      this.msg = '';
      const loginDetails = {
        username: this.username,
        password: this.password
      }
      PortfolioService.login(loginDetails)
      .then((res) => {
        this.username = '';
        this.password = '';
        if(res == "err") {
          eventBus.$emit('authenticated', false);
          this.msg = "Error connecting to server!";
          return;
        }
        if(res.auth) {
          eventBus.$emit('authenticated', true);
        } else {
          eventBus.$emit('authenticated', false);
          this.msg = res.error;
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
button {
  margin-top: 40px;
}
.container {
  display:flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  border-style: solid;
  border-radius: 10px;
  width: 500px;
  /* padding-bottom:40px; */
}

.form input {
  font-size: 1.2em;
  text-align: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
}

.form label {
  margin-top: 15px;
  margin-bottom: 5px;
}

.warning-msg {
  color: red;
  font-size: 0.7em;
  height: 30px;
}
</style>
