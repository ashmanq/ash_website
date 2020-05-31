<template lang="html">
  <div class="container">
    <h1>Administration Page</h1>
    <login v-if="!authenticated"></login>
    <div v-if="authenticated">
      <admin-console v-if="!selectedProject"></admin-console>
      <admin-project-details v-if="selectedProject" :project="selectedProject" :types="types"></admin-project-details>
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
      types: ["coding", "drawing"],
    }
  },
  mounted() {
    // We check if we have a token and that tha user is administrator
    if(localStorage.getItem('token') && localStorage.getItem('user') == "administrator") {
      this.authenticated = true;
    };
    eventBus.$on('authenticated', (isAutheticated) => {
      isAutheticated ? this.authenticated = true : this.authenticated = false;
    });
    eventBus.$on('admin-project-selected', (project) => {
      this.selectedProject = project;
    });
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
