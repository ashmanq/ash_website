<template lang="html">
  <div class="column admin-list-item">
    <img v-on:click="showConfirmationPoppup" class="delete" src="/icons/x.svg">
    <div v-on:click="projectSelected" class="image">
        <!-- <p  class="close">&times;</p> -->
        <!-- <p v-on:click="deleteProject()" class="close">&times;</p> -->
      <img v-if="project.image" class="project-item" @error="imageUrlAlt" v-bind:src="project.image" alt="">
      <img v-if="!project.image" class="project-item" src="/icons/CodingFolderIcon.svg" alt="">
      <h3 class="project-item-heading">{{ project.name }}</h3>
    </div>

    <div v-if="showPopup" class="options">
      <p>Confirm Delete?</p>
      <div class="row">
        <button v-on:click="confirmDelete" type="button" name="button">OK</button>
        <button v-on:click="cancelPoppup" type="button" name="button">Cancel</button>
      </div>

    </div>

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

  },
  methods: {
    projectSelected() {
      eventBus.$emit('admin-project-selected', this.project);
    },

    showConfirmationPoppup() {
      // eventBus.$emit('admin-project-delete', this.project);
      this.showPopup = true;
    },
    imageUrlAlt(event) {
      event.target.src = "/icons/CodingFolderIcon.svg"
    },

    cancelPoppup() {
      this.showPopup = false;
    },

    confirmDelete() {
      eventBus.$emit('admin-project-delete', this.project);
    }
  },
  components: {
    'message-box' : MessageBox,
  }
}
</script>

<style lang="scss" scoped>
.admin-list-item {
  position:relative;
}
.options {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  text-align: center;
  font-size: 2em;
  background-color: black;
  width:100%;
  height:100%;
  z-index: 10;
  transform: translate(0,-100%);
  button {
    font-size: 0.6em;
    margin: 10px;
  }
  button:hover {

    cursor: pointer;
  }
}


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
