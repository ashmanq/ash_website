<template lang="html">
  <div class="message-window">
    <div class="message-box">
      <h2>Confirm</h2>
      <p class="message">{{  message }}</p>
      <div class="row">
        <button v-on:click="confirmPopup()" class="btn" type="button" name="button">OK</button>
        <button v-on:click="closePopup()" class="btn" type="button" name="button">Cancel</button>
      </div>

    </div>
  </div>
</template>

<script>

import {eventBus} from "@/main.js";

export default {
  name: 'message-box',
  props: ['message', 'event'],
  data() {
    return {

    }
  },
  methods: {
    closePopup(){
      eventBus.$emit('close-popup');
    },

    confirmPopup() {
      eventBus.$emit('close-popup');
      eventBus.$emit(this.event);
    }
  }
}
</script>

<style lang="scss" scoped>
  .message-window {
    display: flex;
    justify-content: center;
    align-items: center;
    /* display: none; */
    position: absolute;
    overflow: auto; /* Enable scroll if needed */
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
  }

  .message-box {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background-color: $background-colour;
    margin-top: 5%;
    width: 60vw;
    height:350px;
    padding: 20px;
    border: 1px solid #888;
    overflow: auto;
  }

  .message {
    font-size: 2em;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 3em;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
