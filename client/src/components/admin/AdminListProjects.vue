<!--  This component will be used to list all projects -->
<template lang="html">
  <div class="admin-list">
    <admin-list-project-item v-if="projects" v-for="(project, index) in projects" :project="project" :key="index" ></admin-list-project-item>
    <p v-if="!projects">
      There was an issue loading this list!
    </p>
  </div>
</template>

<script>

import PortfolioService from '@/services/PortfolioService';
import AdminListProjectItem from '@/components/admin/AdminListProjectItem';

export default {
  name: 'admin-list-projects',
  props: ["type", "projects"],
  data() {
    return {

    }
  },
  components: {
    'admin-list-project-item': AdminListProjectItem,
  }
}
</script>

<style lang="css" scoped>
.admin-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
