<template lang="html">
  <div class="message-window">
    <div class="message-box">
      <span v-on:click="closePopup()" class="close">&times;</span>
      <h2>This is a test</h2>
      <p class="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>

import {eventBus} from "@/main.js";

export default {
  name: 'message-box',
  data() {
    return {

    }
  },
  methods: {
    closePopup(){
      eventBus.$emit('close-popup');
    }
  }
}
</script>

<style lang="css" scoped>
  .message-window {
    display: flex;
    justify-content: center;
    align-content: center;
    /* display: none; */
    position: absolute;
    overflow: auto; /* Enable scroll if needed */
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    width: 100vw; /* Full width */
    height: 100vw; /* Full height */
  }

  .message-box {
    background-color: white;
    margin-top: 5%;
    width: 60vw;
    height: 30%;
    padding: 20px;
    border: 1px solid #888;
    overflow: auto;
  }

  .message {
    font-size: 3em;
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
