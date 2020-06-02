<template lang="html">
  <div class="container">
    <a v-bind:href="'/portfolio/'+ project.type">Back to list</a>
    <h1 class="main-header">Portfolio</h1>
    <div v-if="project" class="information">

      <div class="grid-item">
        <h2 class="header">{{ name }}</h2>
        <h3 class="date">Date: {{ date }}</h3>
      </div>

      <div class="grid-buttons">
        <a v-bind:href="project.link" class="btn" type="button" name="button">View Project</a>
      </div>

      <article class="grid-item">
        <p class="details">{{ details }}</p>
      </article>

      <div class="grid-item">
        <img class="image" v-if="image" @error="imageUrlAlt" v-bind:src="image" v-bind:alt="name">
        <div class="row">
          <div class="tags" v-for="(tag, index) in tags" :tag="tag" :key="index">{{tag}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import moment from 'moment';
import PortfolioService from '@/services/PortfolioService.js';

export default {
  name: 'project-detail',
  data(){
    return{
      project: null,
      name: null,
      date: null,
      details: null,
      image: null,
      link: null,
      tags: null,
    }
  },
  mounted(){
    const id = this.$route.params.id;
    const type = this.$route.params.type;
    PortfolioService.getSingleProject(type,id)
    .then(res => {
      this.project = res;
      this.name = res.name;
      this.date = moment(res.date).format("DD-MM-yyyy");
      this.details = res.details;
      this.image = res.image;
      this.link = res.link;
      this.tags = res.tags.split(",");
    });
  },
  methods: {
    imageUrlAlt(event) {
      event.target.src = "https://www.ashqur.co.uk/img/logo.82b9c7a5.png"
    }
  }
}
</script>

<style lang="css" scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.information {
  max-width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: auto;
  grid-gap: 3em 6em;
  margin-top: 3em;
}

.header {
  font-size: 2.5em;
  margin-top: 0em;
  margin-bottom: 0.4em;
  text-align: left;
}

.details {
  line-height: 1.8em;
  font-size: 1.4em;
  text-align: left;
}

.date {
  margin-top: 0px;
  text-align: left;
}

.grid-item{
  display: flex;
  flex-direction: column;
  align-content: center;
}

.grid-buttons {
  display: flex;
  align-items: flex-end;
}


.row{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5em;
}

.image {
  object-fit: cover;
  width: 100%;
  margin: 1.8em 0em 0em 0em;
}

.btn {
  width:100px;
  font-size: 1.2em;
}

.tags {
  margin: 1em 1.5em 0 1em;
  font-weight: bold;
  text-align: center;
  padding: 0.6em;
  background-color: pink;
  border-radius: 10px;

}
</style>
