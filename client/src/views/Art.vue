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
    margin: 3em;
    border-radius: 0.8em;
    width:90%;
    max-width: 1200px;
  }

  @media only screen and (max-width: 600px) {
    .art-projects {
      margin: 1em;
      border-radius: 0.4em;
    }
  }

</style>
