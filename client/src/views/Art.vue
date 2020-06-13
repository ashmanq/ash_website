<template lang="html">
  <div class="art-projects">
    <div class="window">
          <window-title-bar title="Art Projects"></window-title-bar>
      <div class="window-header">
        <router-link :to="{ name: 'portfolio' }"><p class="breadcrumb">&larr; Portfolios</p></router-link>
      </div>
      <list-projects type="art"></list-projects>
    </div>
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
  // padding: 3em;
  margin: 3em;
  border-radius: 0.8em;
}

</style>
