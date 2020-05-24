<template lang="html">
  <div class="container">
    <div class="intro-text">
      <h1>Welcome to AshQur.co.uk!</h1>
      <p>My name is Ashir Qureshi and the purpose of this site is for me to
        display my portfolio of work.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home-view',
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
