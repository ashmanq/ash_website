<template lang="html">
  <div class="container">
    <div v-if="project" class="details">
      <a v-bind:href="'/portfolio/'+ project.type">Back to list</a>
      <h1>{{ project.name }}</h1>
      <h2>Date: {{ project.date }}</h2>
      <div class="row">
        <img v-if="project.image" v-bind:src="project.image" v-bind:alt="project.title">
        <article class="description">
          <h2>Description</h2>
          <p>{{ project.details }}</p>
          <a v-bind:href="project.link" class="btn" type="button" name="button">View Project</a>
        </article>
      </div>

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
    const type = this.$route.params.type;
    PortfolioService.getSingleProject(type,id)
    .then(res => this.project = res);
  },
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
  align-items: center;
}

.description{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex:1;
}

.row{
  display: flex;
}
.desciption,img{
  width: 50%;
}

.btn{
  width:200px;
}
</style>
