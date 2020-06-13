<template lang="html">
  <div class="project-detail">
    <h2 class="" >Project Details</h2>
    <div class="form-container" @submit.prevent="updateDetails">
      <form  method="post">
        <table class="details-table">
          <tr>
            <td><label class="custom-input" for="names">Name</label></td>
            <td><input class="custom-input" type="text" name="name" v-model:value="name" required></td>
          </tr>
          <tr>
            <td><label class="custom-input" for="p-date" >Date</label></td>
            <td><input class="custom-input" type="date" name="p-date" v-model:value="date"  placeholder="yyyy-mm-dd" required></td>
          </tr>
          <tr>
            <td><label class="custom-input" >Details</label></td>
            <td><ckeditor class="editor" :editor="editor" v-model="details" @ready="onEditorReady" :config="editorConfig"></ckeditor></td>
          </tr>
          <tr>
            <td><label class="custom-input" for="img">Image</label></td>
            <td><input class="custom-input" type="text" name="img" v-model:value="image"></td>
          </tr>
          <tr>
            <td><label class="custom-input" for="link">Link</label></td>
            <td><input class="custom-input" type="url" name="link" v-model:value="link" required></td>
          </tr>
          <tr>
            <td><label v-if="type == 'coding'" class="custom-input" for="codelink">Code Link</label></td>
            <td><input v-if="type == 'coding'" class="custom-input" type="url" name="codelink" v-model:value="codelink"></td>
          </tr>
          <tr>
            <td><label class="custom-input" for="tags">Tags</label></td>
            <td><input class="custom-input" type="text" name="tags" v-model:value="tags"></td>
          </tr>
          <tr>
            <td><label class="custom-input" for="type">Type</label></td>
            <td>
              <label v-if="addOrEdit=='edit'" class="custom-input type" for="type">{{ type }}</label>
              <select v-if="addOrEdit=='add'" class="custom-input" name="type" v-model:selected="type" required>
                <option disabled value="">Please select one</option>
                <option  v-for="(type, index) in types" :value="type">{{ type }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label class="custom-input" >Featured</label></td>
            <td>
              <div class="row">
                <input v-model:checked="featured" type="radio" id="No" name="featured" value="0">
                <label for="No">No</label>
                <input v-model:checked="featured" type="radio" id="Yes" name="featured" value="1">
                <label for="Yes">Yes</label>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td class="warning-msg">{{ message }}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div class="row">

                <input v-if="addOrEdit=='edit'" class="btn" type="submit" name="" value="Update">
                <input v-if="addOrEdit=='add'" class="btn" type="submit" name="" value="Add">

                <button v-on:click="confirmCancel()" class="btn" type="button" name="button">Cancel</button>
              </div>
            </td>
          </tr>
        </table>


      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import PortfolioService from '@/services/PortfolioService.js';
import {eventBus} from "@/main.js";

export default {
  name: "admin-project-detail",
  props: ["project", "addOrEdit", "types"],
  data() {
    return {
      name: "",
      date: null,
      image: "",
      link: "",
      type: "",
      featured: "0",
      tags: "",
      codelink: null,

      editor: InlineEditor,
      details: "",
      editorConfig: {
          // The configuration of the editor.
          removePlugins: [  'image' ],
         toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'heading' ]
      },
      message: ""
    }
  },
  mounted() {
    // If editing existing project then prefill details
    // with existing information
    if(this.project.date !== "") {
      this.date = moment(this.project.date).format("yyyy-MM-DD");
    }
    this.name = this.project.name;
    this.image = this.project.image;
    this.link = this.project.link;
    this.type = this.project.type;
    this.tags = this.project.tags;
    this.featured = this.project.featured;

    if(this.project.type === "coding") {
      this.codelink = this.project.codelink;
    }
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
        name: this.name,
        type: this.type,
        details: this.details,
        date: this.date,
        image: this.image,
        link: this.link,
        featured: parseInt(this.featured),
        tags: this.tags,
      }

      if(this.project.type == 'coding') {
          newProject.codelink = this.codelink;
      }

      if(this.addOrEdit == "add") {
        PortfolioService.addNewProject(this.type, newProject)
        .then((res) => {
          if(res.error) {
            this.message = "Error updating project";

            if(res.error == "Invalid Token") {
              localStorage.removeItem('user', res.user);
              localStorage.dremoveItem('token', res.token);
              eventBus.$emit('authenticated', false);
            }

          } else {
            eventBus.$emit('cancel-project-selected');
          }
        })
      } else if(this.addOrEdit == "edit") {
        PortfolioService.updateProject(this.type, this.project.id, newProject)
        .then((res) => {
          if(res.error) {
            this.message = "Error updating project";
            if(res.error == "Invalid Token") {
              localStorage.removeItem('user', res.user);
              localStorage.removeItem('token', res.token);
              eventBus.$emit('authenticated', false);
            }
          } else {
            eventBus.$emit('cancel-project-selected');
          }
        })
      }
    },
    onEditorReady() {
      this.details = this.project.details;
    }
  }

}
</script>

<style lang="scss" scoped>
  .project-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-container {
    margin: auto;
  }

  .custom-input {
    width: 100%;
    border-style: none;
    padding: 0px;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.4em;
  }

  .editor {
    background: #383838;
    border-radius: 5px;
  }

  .details-table {
    margin: auto;
    background-color: #878476;
  }

  table {
    border-color: red;

  }
  tr:nth-child(odd) {
    background: $primary-colour;
    padding:10px;
  }

  td {
    text-align: center;

  }

  .row {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .type {
    text-align: center;
  }
</style>
