<template>
  <div id="app">

    <div class="row">
      <router-link :to="{ name: 'home' }">
        <img class="logo" src="/ashqurlogo.svg" alt="AshQur">
      </router-link>

      <nav>
        <router-link :to="{ name: 'portfolio' }">Portfolios</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
        <router-link :to="{ name: 'aboutme' }">About Me</router-link>
      </nav>
    </div>

    <transition name="fade" mode="out-in">
      <router-view id="view"></router-view>
    </transition>

    <footer>&copy; Ashir Qureshi {{getCurrentYear()}}</footer>
  </div>


</template>

<script>

import WindowTitleBar from '@/components/WindowTitleBar';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  data() {
    return {
      loaded: false,

    }
  },
  mounted() {
    this.$nextTick(() => {
        this.loaded = true;
    })
    // Hide the Google ReCaptcha Badge
    this.$recaptchaLoaded()
      .then (() => {
        const recaptcha = this.$recaptchaInstance;
        recaptcha.hideBadge();
      });

  },
  methods: {
    getCurrentYear: function() {
      return new Date().getFullYear();
    }
  },
  components: {
    'window-title-bar': WindowTitleBar,
  }
}
</script>


<style lang="scss"  scoped>
  .row {
    display: flex;
    justify-content:center;
    // background: $secondary-color;
    border-style: none;
  }
  .logo {
    text-decoration:none;
    height:1.3em;
    // background: $secondary-color;
    border-radius: 0;
    padding: 1em;
  }

  .logo:hover {
    cursor: pointer;
  }


</style>


<style lang="scss">
  @font-face {
    font-family: comfortaa;
    src: url('./assets/font/Comfortaa-VariableFont_wght.ttf') format('truetype');
  }

  @font-face {
    font-family: firacode;
    src: url('./assets/font/FiraCode-VariableFont_wght.ttf') format('truetype');
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap');

  body {
      background-color:$primary-colour;
      margin: 0;
  }

  a {
    text-decoration: none;
  }

  .icon {
    height:5em;
    transition: 0.1s;
    padding: 0.6em;
    transition: all 0.2s ease-in-out;
  }

  .icon:hover {
    filter: brightness(70%);
  }

  .warning-msg {
      color:$warning-color;
      font-size: 1.4em;
      transition: all 0.5s ease-in-out;
  }

  .window {
      background: $background-colour;
      border-radius: 12px 12px 0 0;
      margin: 20px;
      padding-bottom: 20px;
  }

  .window-header {
    text-align: left;
    margin-left: 20px;
  }

  .container {
    width:90%;
    margin: auto;
  }

  .row {
    display: flex;

  }

  #app {
    /* font-family: Helvetica, Arial, sans-serif; */
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color:$font-colour;

  }


  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2em;
    border-left: 6px solid purple;
    padding-left: 0.7em;
  }
  nav {
    padding: 1em;
    // background: $secondary-color;
    text-align: right;
  }
  nav a{
    text-decoration: none;
    margin-left: 2em;
    padding: .5em;
    font-size: 1.3em;
    font-weight: bold;
    color: $font-colour;
    // background-color: $secondary-color;
    transition: 0.2s;
  }

  nav a:hover {
    // color: $font-hover-color;
    color: $font-colour-secondary;
  }

  .router-link-active {
    color:$font-colour-secondary;
  }
  input[type=radio]:hover {
    cursor: pointer;
  }

  .btn{
    text-decoration: none;
    font-weight: bold;
    outline: none;
    color: #D8D8D8;
    display:block;
    padding:20px;
    margin: 20px;
    border-radius: 10px;
    border-style: hidden;
    background-color: #4211E3;
    cursor: pointer;
    transition: 0.2s;
  }

  .btn:hover{
    // background-color: #6640e3;
    background-color: $secondary-color-hover;
    color:$font-colour-secondary;
  }

  img{
    border-radius: 10px;
  }

  .radio-toolbar {
    margin: 0px 10px;
  }
  .radio-toolbar input[type=radio] {
    opacity: 0;
    position: fixed;
    width:0;
  }
  .radio-toolbar label {
    display: inline-block;
    background-color: $secondary-color;
    padding: 1em 1.1em;
    font-size: 1.2em;
    font-weight: bolder;
    border-radius: 4px;
    width: 150px;
    color: $font-colour;
    transition: 0.2s;
  }
  .radio-toolbar input[type="radio"]:checked + label {
    background-color:white;
    color: black;
  }
  .radio-toolbar label:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }


  .breadcrumb {
    text-decoration:none;
    text-transform: capitalize;
    font-size: 1.3em;
    color: $font-colour;
    padding: 1em;
    transition: 0.2s;
  }

  .breadcrumb:hover {
    cursor: pointer;
    color: $font-colour-secondary;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    transition-duration: 0.2s;
    opacity: 0
  }

  footer {
    background: $footer-colour;
    padding:3em;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {

    .icon {
      height:3em;
      padding: 0.6em;
    }

    .icon:hover {
      height: 4.2em;
    }

    .warning-msg {
        font-size: 1em;
    }

    .window {
        margin: 10px;
        padding-bottom: 20px;
    }


    .container {
      width:95%;
    }


    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2em;
    }
    nav {
      padding: 0.7em;
      text-align: right;
    }
    nav a{
      margin-left: 1em;
      padding: .2em;
      font-size: 1em;
    }

    .btn{
      font-size: 1.1em;
      padding:15px;
      margin: 10px;
    }


    .radio-toolbar label {
      padding: 1em 1.1em;
      font-size: 1em;
      width: 50px;
    }


    .breadcrumb {
      font-size: 1em;
      padding: 0.5em;
    }



    .breadcrumb {
      text-transform: capitalize;
      color: $font-colour;
      font-size: 1.1em;
    }


  }
</style>
