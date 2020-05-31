<!--  This component will be used to list all projects -->
<template lang="html">
  <div class="container">
    <list-project-item v-if="results" v-for="(project, index) in results" :project="project" :key="index" ></list-project-item>
    <p v-if="!results">
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
      results: null,
    }
  },
  mounted() {
    PortfolioService.getAllProjects(this.type)
    .then(res => this.results = res);
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
  justify-content: center;
}

</style>
