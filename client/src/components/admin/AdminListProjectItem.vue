<template lang="html">
  <div class="column">
    <img v-on:click="deleteProject()" class="delete" src="/icons/x.svg">
    <div v-on:click="projectSelected" class="image">
        <!-- <p  class="close">&times;</p> -->
        <!-- <p v-on:click="deleteProject()" class="close">&times;</p> -->
      <img v-if="project.image" class="project-item" @error="imageUrlAlt" v-bind:src="project.image" alt="">
      <img v-if="!project.image" class="project-item" src="/icons/CodingFolderIcon.svg" alt="">
      <h3 class="project-item-heading">{{ project.name }}</h3>
    </div>
        <message-box v-if="showPopup" message="Confirm Delete?" event="admin-project-delete"></message-box>
  </div>
</template>

<script>

import {eventBus} from "@/main.js";
import MessageBox from '@/components/MessageBox.vue';

export default {
  name: "admin-list-project-item",
  props: ["project"],
  data() {
    return {
      showPopup: null,
    }
  },
  mounted() {
    eventBus.$on("close-popup", () => {
      this.showPopup = false;
    });
    eventBus.$on("popup-confirm-project-delete", () => {
      eventBus.$emit('admin-project-selected', this.project);
    });
  },
  methods: {
    projectSelected: function() {
      eventBus.$emit('admin-project-selected', this.project);
    },
    deleteProject: function() {
      // eventBus.$emit('admin-project-delete', this.project);
      this.showPopup = true;
      console.log("Delete!");
    },
    imageUrlAlt(event) {
      event.target.src = "/icons/CodingFolderIcon.svg"
    },
    popup: function() {
      this.showPopup = true;
    }
  },
  components: {
    'message-box' : MessageBox,
  }
}
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 210px;
  height: 180px;
  margin: 1em;
  align-items: center;
  justify-content: center;
}

.image:hover {
  .project-item-heading {
    opacity: 0.9;
  }
  cursor: pointer;
}

.project-item {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color:#DFDFDF;
  border-radius: 7px;
  transition: 0.2s;
}


.project-item-heading {
  display:flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  justify-content: center;
  background-color: $secondary-color;
  margin: 0;
  opacity: 0;
  width:100%;
  height:100%;
  transition: all 0.2s ease-in-out;
}



.delete {
  display:flex;
  height:1.8em;
  margin-left:auto;
  z-index: 100;
  color:red;
  opacity: 0.7;
}

.delete:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
