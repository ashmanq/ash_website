<template lang="html">
  <div class="project-detail">
    <h2>Project Details</h2>
    <div class="form-container" @submit.prevent="updateDetails">
      <form class="details" method="post">

        <label class="custom-input" for="names">Name</label>
        <input class="custom-input" type="text" name="name" v-model:value="name" required>

        <label class="custom-input" for="p-date" >Date</label>
        <input class="custom-input" type="date" name="p-date" v-model:value="date"  placeholder="yyyy-mm-dd" required>

        <label class="custom-input" for="details">Details</label>
        <textarea class="custom-input" rows="10" cols="20" type="text" name="details" v-model:value="details" required>
          <!-- {{ project.details }} -->
        </textarea>

        <label class="custom-input" for="img">Image</label>
        <input class="custom-input" type="text" name="img" v-model:value="image">

        <label class="custom-input" for="link">Link</label>
        <input class="custom-input" type="url" name="link" v-model:value="link" required>

        <label class="custom-input" for="type">Type</label>

        <label v-if="addOrEdit=='edit'" class="custom-input" for="type">{{ type }}</label>
        <select v-if="addOrEdit=='add'" class="custom-input" name="type" v-model:selected="type" required>
          <option disabled value="">Please select one</option>
          <option  v-for="(type, index) in types" :value="type">{{ type }}</option>
        </select>

        <div class="">

        </div>
        <div class="row">

          <input v-if="addOrEdit=='edit'" type="submit" name="" value="Update">
          <input v-if="addOrEdit=='add'" type="submit" name="" value="Add">

          <button v-on:click="confirmCancel()" class="btn" type="button" name="button">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import PortfolioService from '@/services/PortfolioService.js';
import {eventBus} from "@/main.js";

export default {
  name: "admin-project-detail",
  props: ["project", "addOrEdit", "types"],
  data() {
    return {
      name: "",
      date: null,
      details: "",
      image: "",
      link: "",
      type: ""
    }
  },
  mounted() {
    // If editing existing project then prefill details
    // with existing information
    // if(this.addOrEdit === "edit") {
    if(this.project.date !== "") {
      this.date = moment(this.project.date).format("yyyy-MM-DD");
    }
    this.name = this.project.name;
    this.details = this.project.details;
    this.image = this.project.image;
    this.link = this.project.link;
    this.type = this.project.type;
    // }



  },
  methods: {
    checkType: function(type) {
      if (type === this.project.type) {
        return "selected";
      }
    },
    confirmCancel() {
      eventBus.$emit('cancel-project-selected');
    },
    updateDetails() {
      const newProject = {
        // id: this.project.id,
        name: this.name,
        type: this.type,
        details: this.details,
        date: this.date,
        image: this.image,
        link: this.link,
      }
      if(this.addOrEdit == "add") {
        PortfolioService.addNewProject(this.type, newProject)
        .then((res) => {
          if(res == "err") {
            console.log("Error updating project");
            eventBus.$emit('authenticated', false);
          } else {
            console.log("Added successfully");
            eventBus.$emit('cancel-project-selected');
          }
        })
      } else if(this.addOrEdit == "edit") {
        PortfolioService.updateProject(this.type, this.project.id, newProject)
        .then((res) => {
          if(res == "err") {
            console.log("Error updating project");
            eventBus.$emit('authenticated', false);
          } else {
            console.log("Updated successfully");
            eventBus.$emit('cancel-project-selected');
          }
        })
      }
    }
  }

}
</script>

<style lang="css" scoped>
.project-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  width: 100%;
}
.custom-input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
}

.details {
  display: grid;
  justify-content: center;
  width:40%;
  margin: auto;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  padding: 15px;
  background-color: #878476;
}
.row {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
