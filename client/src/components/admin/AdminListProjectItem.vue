<template lang="html">
  <div >
    <span v-on:click="deleteProject()" class="close">&times;</span>
    <div v-on:click="projectSelected" class="admin-pItem">
      <h2>{{ project.name }}</h2>
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
      console.log("Yo");
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
  background-color: gold;
  min-width: 200px;
}

.admin-pItem:hover {
  cursor: pointer;
}

.close {
  position: relative;
  top: -1.1em;
  right: -4em;
  font-size: 1.7em;
   z-index: 100;
  /* padding: 0px;
  margin: 0px; */
  opacity: 0.4;
}

.close:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
