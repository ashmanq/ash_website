<template lang="html">
  <div class="container">
    <h1>About Me</h1>
    <div class="about-me-details">
        <img src="/ashqurlogo.svg" alt="">
      <h3>Ashir Qureshi</h3>

      <p>I am an aspiring junior software developer looking to hone the skills I have gained from
      working with CodeClan.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-me',
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width:80%;
  margin: auto;
  flex-direction: column;
  // align-items: flex-start;
  align-items: center;

}

.about-me-details {
    background: $background-colour;
    padding:4em;
    // width: 100%;
    justify-content: flex-start;
    text-align: left;
    margin-bottom: 4em;
    border-radius: 0 0 1em 1em;
}
</style>
