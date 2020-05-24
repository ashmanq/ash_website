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
      eventBus.$emit('project-item-selected', this.project);
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
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  transition: 0.5s;
}

.container:hover {
  background-color:#341D87;
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
