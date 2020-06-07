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
        <a v-if="project.link" v-bind:href="project.link" class="btn" type="button" name="button">View Project</a>
        <a v-if="project.codelink" v-bind:href="project.codelink" class="btn" type="button" name="button">View Code</a>
      </div>

      <article class="grid-item details" v-html="details">
        <!-- <p class="details">{{ details }}</p> -->
      </article>

      <div class="grid-item">
        <img class="image" v-if="image" @error="imageUrlAlt" v-bind:src="image" v-bind:alt="name">
        <div class="row">
          <div class="tags" v-if="tags" v-for="(tag, index) in tags" :tag="tag" :key="index">{{tag}}</div>
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
      project: "",
      name: "",
      date: "",
      details: "",
      image: "",
      link: "",
      tags: "",
      codelink: "",
    }
  },
  mounted(){
    const id = this.$route.params.id;
    const type = this.$route.params.type;


    PortfolioService.getSingleProject(type,id)
    .then(res => {
      try {
        this.project = res;
        this.name = res.name;
        this.date = moment(res.date).format("DD-MM-yyyy");
        this.details = res.details;
        this.image = res.image;
        this.link = res.link;
        if(res.tags) {
          this.tags = res.tags.split(",");
        }
        if(type==="coding") {
          this.codelink = res.codelink;
        }
      } catch (e) {
        console.log(e);
      }
    });
  },
  methods: {
    imageUrlAlt(event) {
      event.target.src = "https://www.ashqur.co.uk/img/logo.82b9c7a5.png"
    }
  }
}
</script>
<style lang="css">

.details h3 {
  font-size: 1.6em;
  margin-bottom: 0.2em;
  border-left: 6px solid purple;
  padding-left: 0.7em;
  height:1.2em;
}
/* My attempt at using animations for the text */
/* .details p {
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

@keyframes typing{
  from { width: 0 }
  to {width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
} */
</style>
<style lang="scss" scoped>

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
  font-size: 2.6em;
  margin-top: 0em;
  margin-bottom: 0.4em;
  text-align: left;
}

.details {
  line-height: 1.8em;
  font-size: 1.2em;
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
  height: auto;
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
  background-color: $secondary-color;
  border-radius: 10px;
}

</style>
