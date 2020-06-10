<!--  This component will be used to list all projects -->
<template lang="html">
  <div class="container">
    <loading-animation v-if="!loaded"></loading-animation>
    <list-project-item v-if="results && results!='err'" v-for="(project, index) in results" :project="project" :key="index" ></list-project-item>
    <p class="warning-msg" v-if="results=='err'">
      There was an issue loading this list!
    </p>
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

</style>
