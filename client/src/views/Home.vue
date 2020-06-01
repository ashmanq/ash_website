<template lang="html">
  <div class="container">
    <div class="intro-text">
      <h1>Welcome to AshQur.co.uk!</h1>
      <p>My name is Ashir Qureshi and the purpose of this site is for me to
        display my portfolio of work.</p>
    </div>
    <message-box v-if="showPopup"></message-box>
    <button v-on:click="popup" type="button" name="button">Show Popup</button>
  </div>
</template>

<script>

import MessageBox from '@/components/MessageBox.vue';

export default {
  name: 'home-view',
  data() {
    return {
      showPopup: null,
    }
  },
  methods: {
    popup() {
      this.showPopup = true;
    }
  },
  components: {
    'message-box' : MessageBox,
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-text{
  max-width:70%;
}
</style>
