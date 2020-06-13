<template lang="html">
  <div class="container">
    <div class="window">
      <window-title-bar class="title-bar" title="Welcome"></window-title-bar>
      <div class="intro-text">

        <h3 class="name">Ashir Qureshi</h3>
        <p class="typed-word"><span>&rarr; </span>{{ typedWord }}<span class="cursor">i</span></p>
        <router-link :to="{ name: 'portfolio' }">
            <button class="btn startbtn" type="button" name="button">Portfolio</button>
        </router-link>

      </div>
    </div>

    <div class="window">
      <window-title-bar class="title-bar" title="Featured Projects"></window-title-bar>

      <list-projects type="featured"></list-projects>
    </div>
    <message-box v-if="showPopup"></message-box>

  </div>
</template>

<script>

import MessageBox from '@/components/MessageBox.vue';
import ListProjects from '@/components/user/ListProjects.vue';
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
    // Waits until the DOM's next update cycle. Used to wait until everything
    // on the vue is fully loaded.
    this.$nextTick(() => {
      const longString = "I strive to create beautiful experiences.";
      this.typeWriter(longString);
    })


  },
  methods: {
    popup: function() {
      this.showPopup = true;
    },

    async typeWriter(wordsToBeTyped) {
      const interval = Math.random() * (90 - 40) + 40 // Math.random() * (max- min) + min

      if(this.count < wordsToBeTyped.length) {
        this.count += 1;
        this.typedWord = wordsToBeTyped.slice(0, this.count);

        setTimeout(() => {
          this.typeWriter(wordsToBeTyped);
        }, interval);
      } else {
        // console.log("Done!");
      }
    }
  },
  components: {
    'message-box' : MessageBox,
    'list-projects': ListProjects
  }
}
</script>

<style lang="scss" scoped>
span {
  color:$secondary-color;
}


.typed-word {
  font-family: $secondary-font;
  font-size: 2.3em;
  font-weight: bolder;
  text-align: left;
}

.cursor {
  font-size: 1.2em;
  background: $secondary-color;
}


.name {
  text-align: left;
  font-size: 1.6em;
  margin-top: 1em;
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
