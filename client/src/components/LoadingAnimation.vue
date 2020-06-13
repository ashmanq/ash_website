<template lang="html">
  <div class="loader-animation-container">
    <div class="loader-container">

      <div class="loading-ring"></div>
      <div class="loading-ring-inner1"></div>
      <p class="loading-text">Loading</p>
      <div class="loading-ring-inner2"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'loading-animation'
}
</script>

<style lang="scss" scoped>
.loader-animation-container{
  display:flex;
  justify-content: center;
  align-content: center;
  background: $background-colour;
  height:100%;
  border:0;
  padding:0;
  margin:0;
}

.loading-text {
  margin: auto auto;
  position:absolute;
  color:$secondary-color;
  -webkit-animation: 1s flash linear infinite;
  animation: 1.2s flash alternate infinite;
}




.loader-container {
  display:flex;
  position:relative;
  width: 300px;
  height: 300px;
  margin:auto;
  align-items: center;
  justify-content: center;
}

.loading-ring {

  width:200px;
  height:200px;
  background:transparent;
  border-radius:60%;
  border: 2px solid $secondary-color;
  border-top-color: transparent;
  animation: 1s spin linear infinite;

}

.loading-ring-inner1 {
  margin: auto;
  position:absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  width:100px;
  height:100px;
  border-radius:50%;
  border: 4px solid $secondary-color;
  border-top-color: transparent;
  animation: 1.5s spin linear infinite;
}

.loading-ring-inner2 {
  margin: auto;
  position:absolute;
  top: 0; left: 0; bottom: 0; right: 0;

  width:150px;
  height:150px;
  border-radius:50%;
  border: 6px solid transparent;
  border-top-color: $secondary-color;
  animation: 1.2s spin linear infinite;
  animation-direction: reverse;
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

@keyframes flash {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
}



</style>
