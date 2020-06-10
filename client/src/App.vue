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
    background: $secondary-color;
    border-style: none;
    // width:100%
  }
  .logo {
    text-decoration:none;
    // height:4em;
    height:1.3em;
    background: $secondary-color;
    border-radius: 0;
    padding: 1em;
  }

  .logo:hover {
    cursor: pointer;
  }

  .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
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

body {
    background-color:$primary-colour;
    // border-style: solid;
    margin: 0;
}

a {
  text-decoration: none;
}

.warning-msg {
    color:$warning-color;
    font-size: 1.4em;
}

.window {
    background: $background-colour;
    border-radius: 2em 2em 0 0;
    margin: 2em;
    padding-bottom: 2em;
}

.window-header {
  text-align: left;
  margin-left: 2em;
}

.container {
  width:80%;
  margin: auto;
}

#app {
  /* font-family: Helvetica, Arial, sans-serif; */
  font-family: $primary-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color:$font-colour;

}


h1 {
  font-size: 3.5rem;
  font-weight: bold;
}

h2 {
  font-size: 2.5em;
  border-left: 6px solid purple;
  padding-left: 0.7em;
}
nav {
  padding: 1em;
  background: $secondary-color;
  text-align: right;
}
nav a{
  text-decoration: none;
  margin-left: 2em;
  padding: .5em;
  font-size: 1.3em;
  font-weight: bold;
  color: $font-colour;
  background-color: $secondary-color;
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
  font-size: 1.5em;
  text-decoration:none;
  color: $font-colour;
  padding: 1em;
}

.breadcrumb:hover {
  cursor: pointer;
  color: $font-colour-secondary;
}

.breadcrumb {
  text-transform: capitalize;
  color: $font-colour;
  font-size: 1.3em;
}

.breadcrumb:hover {
  color: $font-colour-secondary;
}


footer {
  background: $footer-colour;
  padding:3em;
  text-align: center;
}
</style>
