<template lang="html">
  <div class="coding-projects">
    <div class="window">
      <window-title-bar></window-title-bar>
      <div class="window-header">
        <h1>Coding Projects</h1>
      </div>
      <list-projects type="coding"></list-projects>
    </div>

  </div>
</template>

<script>
import ListProjects from '@/components/user/ListProjects.vue';

export default {
  name: 'coding-view',
  data(){
    return {

    }
  },
  components: {
    'list-projects': ListProjects,
  }
}
</script>

<style lang="scss" scoped>
.coding-projects {
  //
  // padding: 3em;
  margin: 3em;
  border-radius: 0.8em;
}



</style>
