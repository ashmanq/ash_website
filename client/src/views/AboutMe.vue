<template lang="html">
  <div class="container">

    <div class="window">
      <window-title-bar></window-title-bar>
      <div class="window-header">
        <h1>About Me</h1>
      </div>
      <div class="about-me-details">
          <img class="about-me-image" src="/ashqurlogo.svg" alt="Logo">
        <h3>Ashir Qureshi</h3>

        <p>I am an aspiring junior software developer looking to hone the skills I have gained from
        working with CodeClan.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'about-me',
}
</script>

<style lang="scss" scoped>

.about-me-details {
    background: $background-colour;
    padding:3em;
    text-align: left;
    // margin-bottom: 1em;
    border-radius: 0 0 1em 1em;
    line-height: 1.5em;
    font-size: 1.2em;
}

.about-me-image {
  height:150px;
}


</style>
