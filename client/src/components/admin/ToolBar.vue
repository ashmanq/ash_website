<template lang="html">
  <div class="toolbar-container">
    <div v-for="(option, index) in options" :option="option" :key="index" :indexValue="name" class="radio-toolbar">
      <input type="radio" v-bind:id="optionId(option.name, index)" :name="name"
      v-bind:value="option.name" :checked="isSelected(option)"/>
      <label v-on:click="selectOption(option.name)" v-bind:for="optionId(option.name, index)">
        {{ option.name }}
      </label>
    </div>
  </div>
</template>

<script>

import {eventBus} from "@/main.js";

export default {
  name: "toolbar",
  props: ["options", "name"],
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    isSelected(option) {
      if(option.selected) {
        return true;
      }
      return false;
    },
    optionId(option, indexValue) {
      return option.replace(/\s+/g, '-').toLowerCase() + indexValue;
    },
    selectOption(option) {
      eventBus.$emit(`toolbar-${this.name}`, option);
    }
  }
}
</script>

<style lang="css" scoped>
.toolbar-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
