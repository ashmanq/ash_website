<template lang="html">
  <div class="container">
    <div class="window">
      <window-title-bar></window-title-bar>
      <div class="window-header">
          <h1>Administration</h1>
      </div>
      <transition name="fade" mode="out-in">
        <login v-if="!authenticated"></login>
      </transition>

      <div v-if="authenticated">
        <transition name="fade" mode="out-in">
          <admin-console v-if="!selectedProject"></admin-console>
        </transition>
        <transition name="fade" mode="out-in">
          <admin-project-details v-if="selectedProject" :project="selectedProject" :types="projectTypes" :addOrEdit="type"></admin-project-details>
        </transition>
      </div>


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
      projectTypes: ["coding", "art"],
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

<style lang="scss" scoped>
h1 {
  margin-bottom: 2em;
}

</style>
