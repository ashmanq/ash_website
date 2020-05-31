<template lang="html">
  <div class="container">
    <h1>Drawing Projects</h1>
    <list-projects type="drawing"></list-projects>
  </div>
</template>

<script>
import ListProjects from '@/components/user/ListProjects.vue';

export default {
  name: 'drawing-view',
  data(){
    return {

    }
  },
  components: {
    'list-projects': ListProjects,
  }
}
</script>

<style lang="css" scoped>
</style>
