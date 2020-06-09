<template lang="html">
  <div class="container">
    <div class="window">
      <window-title-bar></window-title-bar>
      <div class="window-header">
        <h1>Portfolios</h1>
      </div>

      <div class="portfolios">

        <!-- <div v-for="(type, index) in types" :type="type" :key="index" v-on:click="selectPortfolio(type)" class="portfolio-type">
          <router-link :to="{ name: type.name, params: {} }">Yi</router-link>
          <img class="icon" v-bind:src="type.image" alt="">
          <h3>{{type.name}} Projects</h3>
        </div> -->

        <div class="portfolio-type">
          <router-link :to="{ name: 'coding'}">
            <img class="icon" src="/icons/CodingFolderIcon.svg" alt="">
            <h3>Coding Projects</h3>
          </router-link>
        </div>

        <div class="portfolio-type">
          <router-link :to="{ name: 'art'}">
            <img class="icon" src="/icons/ArtFolderIcon.svg" alt="">
            <h3>Art Projects</h3>
          </router-link>
        </div>

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
      types: [
        {
          name: 'coding',
          image:'/icons/CodingFolderIcon.svg'
        },
        {
          name: 'art',
          image:'/icons/ArtFolderIcon.svg'
        }
      ],

    }
  },
  methods: {
    selectPortfolio: function(type){

      const lowerCaseType = type.name.toLowerCase();
      window.location.href = `/portfolio/${lowerCaseType}`;

    }
  }
}
</script>

<style lang="scss" scoped>


.portfolio-type {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 0.3em;
  font-size: 2em;
  padding: 1em;
  width: 9em;
}

.portfolio-type {
  h3 {
      color: $font-colour;
  }
  font-size: 1.5em;
  transition: 0.2s;
}

.portfolio-type:hover {
  background: $secondary-color-hover;
  h3 {
    color:$font-colour-secondary;
  }

  cursor: pointer;
}


.portfolios {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

.icon {
  width:70%;
  align-self: center;
}
</style>
