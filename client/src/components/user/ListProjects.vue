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
    PortfolioService.getAllProjects(this.type)
    .then((res) => {
      this.results = res;
      this.loaded = true;
    });
  },
  components: {
    'list-project-item': ListProjectItem,
  }
}
</script>

<style lang="css" scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
/* 
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  } */

</style>
