<template lang="html">

  <div class="project-item-container">
    <router-link :to="'/portfolio/'+ project.type + '/' + project.id">
      <div class="image">
        <img v-if="project.image" class="project-item" @error="imageUrlAlt" v-bind:src="project.image" alt="">
        <img v-if="!project.image" class="project-item" src="/icons/CodingFolderIcon.svg" alt="">
        <h3 class="project-item-heading">{{ project.name }}</h3>
        <!-- <p> {{ project.date }}</p> -->
      </div>
    </router-link>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'list-project-item',
  props: ['project'],
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    imageUrlAlt(event) {
      event.target.src = "/icons/CodingFolderIcon.svg"
    }
  }
}
</script>

<style lang="scss" scoped>

  .project-item-container {
    justify-content: center;
  }

  .image {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    height: 225px;
    // margin: 1em;
    align-items: center;
    justify-content: center;
  }

  .image:hover {
    .project-item-heading {
      opacity: 0.9;
    }
  }

  .project-item {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    color:#DFDFDF;
    // border-radius: 7px;
    transition: 0.2s;
  }


  .project-item-heading {
    display:flex;
    flex-direction: column;
    position: absolute;
    text-align: center;
    justify-content: center;
    background-color: $secondary-color;
    margin: 0;
    opacity: 0.6;
    // border-radius: 5px;
    width:100%;
    height:100%;
    transition: all 0.2s ease-in-out;
  }


  .container:hover {
    background-color: $secondary-color-hover;
    cursor: pointer;
  }

  .name {
    font-size: 1.8em;
    text-align: center;
  }

  a{
    color:#DFDFDF
  }

  @media only screen and (max-width: 600px) {
    .container {
      width: 200px;
      margin: 1em;
      padding: 1em;
      border-radius: 1em;
    }

    .name {
      font-size: 1.2em;
    }

    .image {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 200px;
      height: 112px;
      margin: 1em;
      align-items: center;
      justify-content: center;
    }


  }
</style>
