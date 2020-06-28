<template lang="html">
  <div class="container">

    <div class="window">
      <window-title-bar class="title-bar" :title="name"></window-title-bar>
      <!-- <transition name="fade" mode="out-in"> -->
        <loading-animation v-if="!loaded"></loading-animation>
      <!-- </transition> -->

      <transition name="fade" mode="out-in">
        <div v-if="loaded" class="project-details">

          <router-link v-if="loaded" :to="{ name: project.type}">
          <p class="breadcrumb">&larr; {{ project.type }} Projects</p>
          </router-link>

          <div v-if="project" class="information">
            <div class="grid-item">
              <!-- <h2 class="header">{{ name }}</h2> -->
              <h3 class="date">Date: {{ date }}</h3>
            </div>

            <div class="grid-item">
              <img class="image" v-if="image" @error="imageUrlAlt" v-bind:src="image" v-bind:alt="name">
            </div>


            <div class="grid-item">
              <div class="row">
                <div class="tags row" v-if="tags" v-for="(tag, index) in tags" :tag="tag" :key="index">{{tag}}</div>
              </div>
            </div>




            <article class="grid-item details" v-html="details">
            </article>

            <div class="grid-buttons">
              <a v-if="project.link" v-bind:href="project.link"  type="button" name="button">
                <img class="icon" src="/icons/webpageicon.svg" v-bind:alt="project.title">
              </a>
              <a v-if="project.codelink" v-bind:href="project.codelink"  type="button" name="button">
                <img class="icon" src="/icons/codeicon.svg" v-bind:alt="project.title">
              </a>
            </div>

          </div>
        </div>
      </transition>

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
      loaded: false,
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
        this.loaded = true;
      } catch (e) {
        this.loaded = true;
      }
    });
  },
  methods: {
    imageUrlAlt(event) {
      event.target.src = "/icons/CodingFolderIcon.svg"
    }
  }
}
</script>
<style lang="css">


</style>
<style lang="scss" scoped>

  .information {
    max-width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-row: auto;
    grid-gap: 1em 6em;
    margin-top: 3em;
    margin-bottom: 3em;
  }

  .header {
    font-size: 2em;
    margin-top: 0em;
    margin-bottom: 0.4em;
    text-align: left;
  }

  .details {
    line-height: 1.5em;
    font-size: 1.2em;
    text-align: left;
  }


  .date {
    margin-top: 0px;
    text-align: left;
    font-size: 1.5em;
    color: $font-colour-secondary;
  }

  .grid-item{
    display: flex;
    flex-direction: column;
    align-content: center;
    height: auto;
  }

  .grid-buttons {
    display: flex;
    align-items: center;
    justify-content:center;
  }


  .row{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2.5em;
  }

  .image {
    object-fit: cover;
    width: 60%;
    margin: 1.8em auto 0em;
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

  @media only screen and (max-width: 600px) {
    .information {
      max-width: 90%;
      grid-gap: 1em 3em;
      margin-top: 2em;
      margin-bottom: 2em;
    }

    .header {
      font-size: 1.7em;
    }

    .details {
      line-height: 1.1em;
      font-size: 1.1em;
      text-align: left;
    }

    .row{
      margin-top: 2em;
    }

    .image {
      margin: 1em auto 0em;
      width: 80%;
    }

    .btn {
      width:80px;
      font-size: 1em;
    }

    .tags {
      margin: 0.4em 1em 0 0.5em;
      padding: 0.2em;
    }
  }

</style>
