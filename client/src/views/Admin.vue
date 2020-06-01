<template lang="html">
  <div class="container">
    <h1>Administration Page</h1>

    <login v-if="!authenticated"></login>

    <div v-if="authenticated">
      <admin-console v-if="!selectedProject"></admin-console>
      <admin-project-details v-if="selectedProject" :project="selectedProject" :types="projectTypes" :addOrEdit="type"></admin-project-details>
    </div>

  </div>
</template>

<script>

import Login from '@/components/admin/Login.vue';
import AdminConsole from '@/components/admin/AdminConsole.vue';
import AdminProjectDetail from '@/components/admin/AdminProjectDetail.vue';
import {eventBus} from '../main.js';

export default {
  name: 'admin-view',
  data() {
    return {
      authenticated: false,
      selectedProject: null,
      projectTypes: ["coding", "drawing"],
      type: null,
    }
  },
  mounted() {

    // We check if we have a token and that tha user is administrator
    if(localStorage.getItem('token') && localStorage.getItem('user') == "administrator") {
      this.authenticated = true;
    };

    // If we are authenticated
    eventBus.$on('authenticated', (isAutheticated) => {
      if(!isAutheticated) {
        this.authenticated = false;
        // this.selectedProject = null;
      } else if(isAutheticated) {
        this.authenticated = true;
      }
    });

    // When a project is selected
    eventBus.$on('admin-project-selected', (project) => {
      this.type = "edit";
      this.selectedProject = project;
    });

    // When user cancels from project details page
    eventBus.$on('cancel-project-selected', () => {
      this.selectedProject = null;
    });

    // When creating a new project
    eventBus.$on('admin-project-add', (project) => {
      this.type = "add";
      this.selectedProject = project;
    });

    // When deleting a project

  },
  components: {
    'login': Login,
    'admin-console': AdminConsole,
    'admin-project-details': AdminProjectDetail,
  }
}
</script>

<style lang="css" scoped>
h1 {
  margin-bottom: 2em;
}

</style>
