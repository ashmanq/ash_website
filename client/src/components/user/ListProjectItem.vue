<template lang="html">

  <!-- <div v-on:click="selectProjectItem()" class="container"> -->
  <div class="">
    <router-link :to="'/portfolio/'+ project.type + '/' + project.id">
      <div class="container">
        <h3 class="name">{{ project.name }}</h3>
        <p> {{ project.date }}</p>
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
    selectProjectItem: function(){
      window.location.href = `/portfolio/${this.project.type}/${this.project.id}`;
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: $secondary-color;
    color:#DFDFDF;
    width: 300px;
    margin: 1em;
    padding: 1em;
    border-radius: 1em;
    transition: 0.5s;
  }

  .container:hover {
    background-color: $secondary-color-hover;
    cursor: pointer;
  }

  .name {
    font-size: 2em;
  }

  img{
    max-width: 50%;
    align-self: center;
    margin-bottom: 20px;
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

    img{
      max-width: 50%;
      margin-bottom: 20px;
    }

  }
</style>
