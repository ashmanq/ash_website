<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'coding' }">Coding</router-link>
    </nav>
    <router-view id="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav a{
  padding-left: 10px;
}

button{
  padding:20px;
  font-size: 1.4em;
  margin: 20px;
  border-radius: 10px;
  background-color: #D4BAE4;
  cursor: pointer;
  transition: 0.5s;
}

button:hover{
  background-color: #9374BC;
}

img{
  border-radius: 10px;
}
</style>
