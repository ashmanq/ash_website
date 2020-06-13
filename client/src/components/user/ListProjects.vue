<!--  This component will be used to list all projects -->
<template lang="html">
  <div class="container">
    <transition name="fade" mode="out-in">
      <loading-animation v-if="!loaded"></loading-animation>
      <div class="container" v-if="results && results!='err'">
        <list-project-item  v-for="(project, index) in results" :project="project" :key="index" ></list-project-item>
        <p class="warning-msg" v-if="results=='err'">
          There was an issue loading this list!
        </p>
      </div>

    </transition>
  </div>
</template>

<script>

import PortfolioService from '@/services/PortfolioService';
import Helpers from '@/services/Helpers.js';
import ListProjectItem from '@/components/user/ListProjectItem';

export default {
  name: "list-projects",
  props: ["type"],
  data() {
    return {
      loaded: false,
      results: null,
    }
  },
  mounted() {
    if(this.type == "featured") {
      // Get all featured projects from server and add to portfolioProjects
      Helpers.getAllFeaturedProjects()
      .then((res) => {
        this.results = res;
        this.loaded = true;
      })
    } else {
      PortfolioService.getAllProjects(this.type)
      .then((res) => {
        this.results = res;
        this.loaded = true;
      });
    }

  },
  components: {
    'list-project-item': ListProjectItem,
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 1em;
  }

</style>
