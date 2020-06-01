<template lang="html">
  <div class="message-window">
    <div class="message-box">
      <span class="close">&times;</span>
      <h2>This is a test</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'message-box',
  data() {
    return {

    }
  },
}
</script>

<style lang="css" scoped>
  .message-window {
    /* display: flex;
    justify-content: center;
    align-content: center; */
    /* display: none; */
    position: absolute;
    overflow: auto; /* Enable scroll if needed */
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
  }

  .message-box {
    background-color: white;
    margin: 35% auto;
    width: 60vw;
    /* height:auto; */
    padding: 20px;
    border: 1px solid #888;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
