<template lang="html">
  <div class="container">
    <window-title-bar class="title-bar"></window-title-bar>
    <div class="intro-text">

      <!-- <h3 class="welcome-text">Welcome to AshQur.co.uk!</h3> -->
      <h3 class="name">Ashir Qureshi</h3>
      <p class="typed-word"><span>&rarr; </span>{{ typedWord }}<span class="cursor">i</span></p>
      <!-- <p class="intro-what">I strive to create beautiful experiences</p> -->
      <button v-on:click="gotoPortfolio" class="btn startbtn" type="button" name="button">Portfolio</button>
    </div>
    <message-box v-if="showPopup"></message-box>
    <!-- <button v-on:click="popup" type="button" name="button">Show Popup</button> -->
  </div>
</template>

<script>

import MessageBox from '@/components/MessageBox.vue';
import WindowTitleBar from '@/components/WindowTitleBar'
import {eventBus} from '@/main.js';

export default {
  name: 'home-view',
  data() {
    return {
      showPopup: null,
      typedWord: "",
      count: 0,
    }
  },
  mounted() {

    eventBus.$on("close-popup", () => {
      this.showPopup = false;
    });

    const longString = "I strive to create beautiful experiences.";
    this.typeWriter(longString);

  },
  methods: {
    popup: function() {
      this.showPopup = true;
    },
    gotoPortfolio: function() {
        window.location.href = `/portfolio/`;
    },
    async typeWriter(wordsToBeTyped) {
      const interval = Math.random() * (90 - 40) + 40 // Math.random() * (max- min) + min

      if(this.count < wordsToBeTyped.length) {
        this.count += 1;
        this.typedWord = wordsToBeTyped.slice(0, this.count);
        // console.log(wordsToBeTyped.slice(0, this.count));
        setTimeout(() => {
          this.typeWriter(wordsToBeTyped);
        }, interval);
      } else {
        console.log("Done!");
      }
    }
  },
  components: {
    'message-box' : MessageBox,
    'window-title-bar': WindowTitleBar,
  }
}
</script>

<style lang="scss" scoped>
span {
  color:$secondary-color;
}
.typed-word {
  font-family: $secondary-font;
  font-size: 2.5em;
  font-weight: bolder;
  text-align: left;
}

.cursor {
  font-size: 1.2em;
  background: $secondary-color;
}

.container {
  display: flex;
  flex-direction: column;
  margin:auto;
  align-items: center;
  width:70%;
  align-items: stretch;
  padding: 2em;
}

.name {
  text-align: left;
  font-size: 1.6em;
  margin-top: 3.5em;
}

.intro-text{
  background:$background-colour;
  padding: 4em;
}

.intro-what {
  font-family: "firacode";
  font-size: 2.5em;
  text-align: left;
  margin-top: 1.2em;
  margin-bottom: 2em;
}

.startbtn {

  font-size: 1.7em;
  margin-left: 0;
}
</style>
