<template lang="html">
  <div class="container">
    <div class="details">
      <h1>{{ project.name }}</h1>
      <h2>Date: {{ project.date }}</h2>
      <div class="row">
        <img v-bind:src="project.image" v-bind:alt="project.title">
        <article class="description">
          <h2>Description</h2>
          <p>{{ project.details }}</p>
        </article>
      </div>
      <button type="button" name="button">View Project</button>
    </div>

  </div>
</template>

<script>

import PortfolioService from '@/services/PortfolioService.js';

export default {
  name: 'project-detail',
  data(){
    return{
      project: null,
    }
  },
  mounted(){
    const id = this.$route.params.id;
    PortfolioService.getSingleCodingProject(id)
    .then(res => this.project = res);
  }
}
</script>

<style lang="css" scoped>

.container{
  display: flex;
  flex-direction: column;
}
.details{
  max-width: 70%;
  align-self: center;
}

.description{
  display: flex;
  flex-direction: column;
  width: 50%;
}

.row{
  display: flex;
}
.desciption,img{
  width: 50%;
}
</style>
