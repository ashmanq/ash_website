<template lang="html">
  <div class="project-detail">
    <h2>Project Details</h2>
    <!-- <div class="row"> -->
      <label for="name">Name</label>
      <input type="text" name="name" :value="project.name" required>
    <!-- </div> -->
    <!-- <div class="row"> -->
      <label for="date">Date</label>
      <input type="date" name="date" :value="date" required>
    <!-- </div> -->
    <!-- <div class="row"> -->
      <label for="details">Date</label>
      <textarea rows="10" cols="20" type="text" name="details" required>
        {{ project.details }}
      </textarea>
    <!-- </div> -->
    <!-- <div class="row"> -->
      <label for="img">Image</label>
      <input type="text" name="img" :value="project.image" >
    <!-- </div> -->
    <!-- <div class="row"> -->
      <label for="link">Link</label>
      <input type="text" name="link" :value="project.link" required>
    <!-- </div> -->
    <!-- <div class="row"> -->
      <select class="" name="type">
        <option v-if="checkType(type)" v-for="(type, index) in types" :value="type">{{ type }}</option>
      </select>
    <!-- </div> -->





    <label for="link">Link</label>
    <input type="text" name="name" value="" required>
  </div>
</template>

<script>

import moment from 'moment';
import {eventBus} from "@/main.js";

export default {
  name: "admin-project-detail",
  props: ["project", "types"],
  data() {
    return {
      date: null,
    }
  },
  mounted() {
    this.date = moment(this.project.date).format("yyyy-MM-DD");
  },
  methods: {
    checkType: function(type) {
      if(type === this.project.type) {
        return "selected";
      }
    }
  }

}
</script>

<style lang="css" scoped>
.project-detail {
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-gap: 10px;
  padding: 15px;

}
</style>
