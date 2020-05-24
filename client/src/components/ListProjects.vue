<!--  This component will be used to list all projects -->
<template lang="html">
  <div class="container">
    <list-project-item v-if="results" v-for="(project, index) in results" :project="project" :key="index" ></list-project-item>
  </div>
</template>

<script>

import PortfolioService from '@/services/PortfolioService';
import ListProjectItem from '@/components/ListProjectItem';

export default {
  name: 'list-projects',
  data() {
    return {
      results: null,
    }
  },
  mounted() {
    PortfolioService.getAllCodingProjects()
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
}
</style>
