<template lang="html">

  <div class="">
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
  .image {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 210px;
    height: 180px;
    padding: 1em;
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
    // flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    // background-color: $secondary-color;
    color:#DFDFDF;
    border-radius: 7px;
    transition: 0.2s;
  }


  .project-item-heading {
    position: absolute;
    text-align: center;
    background-color: $secondary-color;
    // border-radius: 6px;
    margin: 0;
    opacity: 0;
    width:85%;
    // top:15%;
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


  }
</style>
