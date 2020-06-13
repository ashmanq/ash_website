<template lang="html">
  <div class="coding-projects">
    <div class="window">
      <window-title-bar title="Coding Projects"></window-title-bar>
      <div class="window-header">
        <router-link :to="{ name: 'portfolio' }"><p class="breadcrumb">&larr; Portfolios</p></router-link>
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
  margin: 3em;
  border-radius: 0.8em;
}


</style>
