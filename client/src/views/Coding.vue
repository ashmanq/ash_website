<template lang="html">
  <div class="coding-projects">
    <div class="main-header">
      <h1>Coding Projects</h1>
    </div>

    <list-projects type="coding"></list-projects>
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
  background: $primary-colour;
  padding: 3em;
  margin: 3em;
  border-radius: 0.8em;
}
.main-header {
  text-align: left;
  margin: 0em 0 2em 0;
}
</style>
