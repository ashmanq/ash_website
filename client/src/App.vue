<template>
  <div id="app">
    <div class="row">
      <router-link class="logo-link" :to="{ name: 'home' }">
        <img v-on:click="closeMenu" class="logo" src="/ashqurlogo.svg" alt="AshQur">
      </router-link>

      <nav v-bind:class="{ open: isOpen }" v-on:click="closeMenu">
        <router-link :to="{ name: 'portfolio' }">Portfolios</router-link>
        <router-link :to="{ name: 'aboutme' }">About</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </nav>

      <div class="menu-btn" v-on:click="mobileNavMenu" v-bind:class="{ open: isOpen }">
        <div class="menu-btn__burger top-line"></div>
        <div class="menu-btn__burger middle-line"></div>
        <div class="menu-btn__burger bottom-line"></div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <router-view id="view" v-bind:class="{ open: isOpen }"></router-view>
    </transition>

    <footer class="footer" v-bind:class="{ open: isOpen }">
      <div class="copyright">
        &copy; Ashir Qureshi {{getCurrentYear()}}
      </div>
      <div class="links">
        <div class="info-item">
          <a href="https://www.linkedin.com/in/ashir-qureshi/">
            <img class="footer-icon" src="/icons/linkedinicon.svg" alt="linkedIn">
          </a>
        </div>
        <div class="info-item">
          <a href="https://github.com/ashmanq">
            <img class="footer-icon" src="/icons/githubicon.svg" alt="linkedIn">
          </a>
        </div>
        <div class="info-item">
          <a href="https://www.instagram.com/ash_manq/">
            <img class="footer-icon" src="/icons/instagramicon.svg" alt="linkedIn">
          </a>
        </div>
      </div>
    </footer>
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
      isOpen: false,
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
    },
    mobileNavMenu: function() {
      this.isOpen = !this.isOpen;
    },
    closeMenu: function() {
      this.isOpen = false;
      console.log("clicked");
      
    }
  },
  components: {
    'window-title-bar': WindowTitleBar,
  }
}
</script>


<style lang="scss"  scoped>
  .row {
    width:90%;
    display: flex;
    justify-content:space-between;
    // margin: auto;
    align-content: center;
    padding:1rem;
    max-width:1200px;
    border-style: none;
    flex-shrink: 0;
    transition: all 0.5s ease-in-out;
  }

  .logo-link {
    display: flex;
    align-items: center;
  }

  .logo {
    text-decoration:none;
    justify-content: center;
    height:4em;
    border-radius: 0;
    padding: 2px;
    z-index: 10;
  }

  .logo:hover {
    cursor: pointer;
  }

  .footer-icon {
    height:30px;
    margin:5px;
  }

  .links {
    display:flex;
  }

  // Menu button styling

  .menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    display: none;
    z-index: 10;
  }
  .menu-btn__burger {
    content: '';
    display: block;
    margin: auto;
    width: 30px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transition: all .5s ease-in-out;
  }

  /* Menu Button Animation */
  .menu-btn.open .menu-btn__burger.middle-line {
    background: transparent;
  }
  .menu-btn.open .menu-btn__burger.top-line {
    transform-origin: center;
    transform: translateY(13.5px) rotate(45deg);
  }
  .menu-btn.open .menu-btn__burger.bottom-line{
    transform-origin: center;
    transform: translateY(-13.5px) rotate(-45deg);
  }


  @media only screen and (max-width: 600px) {
    .logo {
      height:40px;
    }

    nav {
      position: fixed;
      box-sizing: border-box;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      font-size: 2rem;
      background-color: $background-colour;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: right;
      align-items: center;
      z-index: 3;
      clip-path: circle(10px at 90% -10%);
      -webkit-clip-path: circle(10px at 90% -10%);
      transition: all 0.8s ease-out;
      pointer-events: none;
    }

    nav a {
      margin: 0;
    }


    .menu-btn {
      display: flex;
    }

    .footer.open {
      display: none;
    }

    #view.open {
      overflow-y: hidden;
    }


    nav.open {
      display: flex;
      clip-path: circle(2000px at 90% -10%);
      -webkit-clip-path: circle(2000px at 90% -10%);
      pointer-events: all;
      
    }

    // These lines cut out page transitions to stop footer jumping when selecting link from mobile nav
    .fade-enter-active,
    .fade-leave-active {
      transition-duration: 0s;
    }

    .fade-enter,
    .fade-leave-active {
      transition-duration: 0s;
    }

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

  // @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap', "crossorigin=anonymous");

  html, body {
    height: 100%;
  }

  body {
    background-color:$background-colour;
  }

  #app {
    height: 100%;
    font-family: 'firacode';
    color:$font-colour;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #view {
    flex: 1;
    flex-basis: auto;
    justify-content: flex-start;
  }
  a {
    text-decoration: none;
    color:$font-colour-secondary;
  }

  a:hover {
    color:$secondary-color;
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
    width:90%;
    max-width: 1200px;
    background: $background-colour;
    border-radius: 12px 12px 0 0;
    border-style: solid;
    border-width: 1px;
    border-color: $primary-colour;
    margin: 3rem auto 3rem auto;
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

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2em;
    border-left: 6px solid purple;
    padding-left: 0.7em;
  }

  h3 {
    font-weight: normal;
  }
  nav {
    display: flex;
    padding: 1em 0em;
    text-align: right;
    align-items: center;
  }
  nav a{
    text-decoration: none;
    margin-left: 2em;
    padding: .5em;
    font-size: 1.3em;
    color: $font-colour;
    transition: 0.2s;
  }

  nav a:hover {
    color: $font-colour-secondary;
  }

  .router-link-active {
    color:$font-colour-secondary;
  }
  input[type=radio]:hover {
    cursor: pointer;
  }

  .btn{
    font-family: 'firacode';
    text-decoration: none;
    outline: none;
    font-size: 1.5em;
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
    background-color: $secondary-color-hover;
    color:$font-colour-secondary;
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

  .footer {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: $footer-colour;
    padding:3em;
    text-align: center;
    transition-delay: 0.6s;
    transition-property: display;
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
      width:100%;
      // margin: 20px 5px 5px 5px;
      margin: 2rem auto 2rem auto;
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
      text-transform: capitalize;
      color: $font-colour;
      font-size: 1.1em;
    }

    .footer {
      flex-direction: column;

      .copyright {
        margin-bottom: 1rem;
      }
    }

  }
</style>
