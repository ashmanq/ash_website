<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'coding' }">Coding</router-link>
      <router-link :to="{ name: 'drawing' }">Drawing</router-link>
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
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 3rem;
}

nav a{
  padding-left: 10px;
}

input[type=radio]:hover {
  cursor: pointer;
}

.btn{
  text-decoration: none;
  display:block;
  padding:20px;
  font-size: 1em;
  margin: 20px;
  border-radius: 10px;
  border-style: hidden;
  background-color: #D4BAE4;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover{
  background-color: #9374BC;
}

img{
  border-radius: 10px;
}

.radio-toolbar {
  margin: 0px 10px;
}
.radio-toolbar input[type=radio] {
  opacity: 0;
  position: fixed;
  width:0;
}
.radio-toolbar label {
  display: inline-block;
  background-color: #f5ce42;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #444;
  border-radius: 4px;
  width: 150px;
  color: #2C3E50;
  transition: 0.2s;
}
.radio-toolbar input[type="radio"]:checked + label {
  background-color: white;
  border-color: orange;
}
.radio-toolbar label:hover {
  background-color: white;
  cursor: pointer;
}
</style>
