<template lang="html">
  <div v-on:click="projectSelected" class="admin-pItem">
    <h2>{{ project.name }}</h2>
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
</style>
