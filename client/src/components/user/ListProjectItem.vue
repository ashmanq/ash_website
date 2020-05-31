<template lang="html">
  <div v-on:click="selectProjectItem()" class="container">
      <h2>{{ project.name }}</h2>
      <!-- <p> {{ project.details }}</p> -->
      <p> {{ project.date }}</p>
      <img v-bind:src="project.image"/>
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

<style lang="css" scoped>
.container {
  display:flex;
  flex-direction: column;
  background-color: #5A33AB;
  color:#DFDFDF;
  width: 25vw;
  min-width: 200px;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  transition: 0.5s;
}

.container:hover {
  background-color:#341D87;
  cursor: pointer;
}

img{
  max-width: 50%;
  align-self: center;
  margin-bottom: 20px;
}

a{
  color:#DFDFDF
}
</style>
