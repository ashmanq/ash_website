<template lang="html">
  <div class="container">
    <h2>Project Type</h2>
    <toolbar :options="projectType" name="pType"></toolbar>
    <button v-on:click="addNewProject()" class="btn" type="button" name="addButton">+</button>
    <admin-list-projects :projects="filterProjects"></admin-list-projects>
    <button class="btn" type="button" name="logout" v-on:click="logout()">Logout</button>
  </div>
</template>

<script>

import PortfolioService from '@/services/PortfolioService.js';
import ToolBar from '@/components/admin/ToolBar.vue';
import AdminListProjects from '@/components/admin/AdminListProjects.vue';
import {eventBus} from '@/main.js';

export default {
  name: 'admin-console',
  data() {
    return {
      // We list project types for the filter toolbar
      projectType: [{name: "All", selected: true}, {name: "Coding"}, {name: "Drawing"}],
      codingProjects: [],
      drawingProjects: [],
      displayType: null,
    }
  },
  mounted() {
    // Get all projects from server
    PortfolioService.getAllProjects("coding")
    .then(res => this.codingProjects = res);
    PortfolioService.getAllProjects("drawing")
    .then(res => this.drawingProjects = res);

    // Listen for toolbar option select
    eventBus.$on('toolbar-pType', (type) => {
      this.displayType = type.toLowerCase();
    })
  },
  computed: {
    filterProjects: function() {
      switch (this.displayType) {
        case "coding":
        return this.codingProjects;
        break;

        case "drawing":
        return this.drawingProjects;
        break;

        default:
        return this.codingProjects.concat(this.drawingProjects);

      }
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      eventBus.$emit('authenticated', false);
    },
    addNewProject() {
      const newProject = {
        // id: this.project.id,
        name: "",
        type: "",
        details: "",
        date: "",
        image: "",
        link: "",
      }
      eventBus.$emit("admin-project-add", newProject);
      console.log("Hi");
    }
  },
  components: {
    "toolbar": ToolBar,
    "admin-list-projects": AdminListProjects,
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
}
</style>
