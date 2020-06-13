<template lang="html">
  <div >
    <span v-on:click="deleteProject()" class="close">&times;</span>
    <div v-on:click="projectSelected" class="admin-pItem">
      <h3>{{ project.name }}</h3>
    </div>

  </div>
</template>

<script>

import {eventBus} from "@/main.js";

export default {
  name: "admin-list-project-item",
  props: ["project"],
  methods: {
    projectSelected: function() {
      eventBus.$emit('admin-project-selected', this.project);
    },
    deleteProject: function() {
      eventBus.$emit('admin-project-delete', this.project);
    }
  }
}
</script>

<style lang="css" scoped>
.admin-pItem {
  display: flex;
  flex-direction: column;
  padding: 2em;
  margin: 1em;
  background-color: #5A33AB;
  min-width: 200px;
  transition: 0.2s;
}

.admin-pItem:hover {
  background-color:#341D87;
  cursor: pointer;
}

.close {
  position: relative;
  top: 2em;
  right: -4em;
  font-size: 1.7em;
   z-index: 100;
   color:black;
  /* padding: 0px;
  margin: 0px; */
  opacity: 0.4;
}

.close:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
