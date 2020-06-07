<template>
  <div id="app">
    <div class="row">
      <img v-on:click="takeToHomePage" class="logo" src="/ashqurlogo.svg" alt="AshQur">

      <nav>
        <!-- <router-link id="home" :to="{ name: 'home' }">Home</router-link> -->
        <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
        <router-link :to="{ name: 'aboutme' }">About Me</router-link>
      </nav>
    </div>

    <router-view id="view"></router-view>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'App',
  data() {
    return {
      navSelected: "home"
    }
  },
  methods: {
    takeToHomePage: function() {
      window.location.href = `/`;
    }
  }
}
</script>
<style lang="scss"  scoped>
  .row {
    display: flex;
  }
  .logo {
    text-decoration:none;
    height:4em;
    background: $secondary-color;
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

body {
    background-color:$background-colour;
}
#app {
  /* font-family: Helvetica, Arial, sans-serif; */
  font-family: 'comfortaa';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  // height:2.5em;
  // color: #808080;
}
nav {
  padding: 1em;
  background: $secondary-color;
  width: 100%;
  text-align: right;
}
nav a{
  text-decoration: none;
  margin-left: 2em;
  padding: .5em;
  font-size: 1.8em;
  font-weight: bold;
  color: $font-colour;
  background-color: $secondary-color;
  transition: 0.2s;
}

nav a:hover {
  // background-color: $secondary-color-hover;
  color: $secondary-color-hover;
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
  background-color: #6640e3;
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
</style>
