<template lang="html">
  <div class="container">
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

.container {
  display: flex;
  flex-direction: column;
}

.portfolio-type {
  padding: 2em;
  background: $primary-colour;
}

.portfolio-type h2 {
  border-left: unset;
}

.portfolio-type h2:hover {
  cursor: pointer;
}
</style>
