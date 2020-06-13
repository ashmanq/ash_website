<template lang="html">
  <div class="container">
    <div class="window">
      <window-title-bar title="Portfolios"></window-title-bar>
      <loading-animation v-if="!loaded"></loading-animation>

      <div class="portfolios">
        <div class="portfolio-type">
          <router-link :to="{ name: 'coding'}">
            <img class="p-icon" src="/icons/CodingFolderIcon.svg" alt="">
            <h3>Coding Projects</h3>
          </router-link>
        </div>

        <div class="portfolio-type">
          <router-link :to="{ name: 'art'}">
            <img class="p-icon" src="/icons/ArtFolderIcon.svg" alt="">
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
      loaded: false,
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
  mounted() {
    this.loaded = true;
  },
  methods: {
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
  padding: 2em;

}

.p-icon {
  width:70%;
  align-self: center;
}
</style>
