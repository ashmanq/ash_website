<template lang="html">
  <div class="portfolio-container">
    <div class="header">
      <h1>Portfolios</h1>
    </div>

    <div class="portfolios">

      <div v-for="(type, index) in types" :type="type" :key="index" v-on:click="selectPortfolio(type)" class="portfolio-type">
        <h2>{{type}} Projects</h2>
      </div>

    </div>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'porfolio',
  data() {
    return {
      types: ['Coding', 'Art'],

    }
  },
  methods: {
    selectPortfolio: function(type){

      const lowerCaseType = type.toLowerCase();
      window.location.href = `/portfolio/${lowerCaseType}`;

    }
  }
}
</script>

<style lang="scss" scoped>

.portfolio-container {
  display: flex;
  flex-direction: column;
  // align-items: center;
  background-color: $primary-colour;
  color:#DFDFDF;
  padding: 3em;
  margin: 3em;
  border-radius: 0.8em;
  text-align: left;
}

.portfolio-type {
  padding: 2em;
  margin: 2em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 1em;
  background: $secondary-color;
}

.portfolio-type h2 {
  border-left: unset;
  transition: 0.2s;
}

.portfolio-type:hover {
  background: $secondary-color-hover;
  color:$font-colour-secondary;
  cursor: pointer;
}

.portfolios {
  margin-top: 4em;
  display: flex;
  flex-wrap: wrap;
}

.header {

}
</style>
