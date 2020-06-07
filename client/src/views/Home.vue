<template lang="html">
  <div class="container">
    <div class="intro-text">
      <!-- <h3 class="welcome-text">Welcome to AshQur.co.uk!</h3> -->
      <h3 class="name">Ashir Qureshi</h3>
      <p class="intro-what">I strive to create beautiful experiences</p>
      <button v-on:click="gotoPortfolio" class="btn startbtn" type="button" name="button">Portfolio</button>
    </div>
    <message-box v-if="showPopup"></message-box>
    <button v-on:click="popup" type="button" name="button">Show Popup</button>
  </div>
</template>

<script>

import MessageBox from '@/components/MessageBox.vue';
import {eventBus} from '@/main.js';

export default {
  name: 'home-view',
  data() {
    return {
      showPopup: null,
    }
  },
  mounted() {
    eventBus.$on("close-popup", () => {
      this.showPopup = false;
    })
  },
  methods: {
    popup: function() {
      this.showPopup = true;
    },
    gotoPortfolio: function() {
        window.location.href = `/portfolio/`;
    }
  },
  components: {
    'message-box' : MessageBox,
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  text-align: left;
  font-size: 1.6em;
  margin-top: 3.5em;
}

.intro-text{
  width:70%;
  background:#2F2F2F;
  padding: 4em;
  margin-top: 4em;
  border-radius: 0.5em;
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
