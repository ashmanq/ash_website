<template lang="html">
  <div class="art-projects">
    <h1 class="main-header">Art Projects</h1>
    <list-projects type="art"></list-projects>
  </div>
</template>

<script>
import ListProjects from '@/components/user/ListProjects.vue';

export default {
  name: 'art-view',
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

.art-projects {
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
