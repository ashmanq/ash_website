<template lang="html">
  <div class="container">
    <h1>Coding Projects</h1>
    <list-projects></list-projects>
  </div>
</template>

<script>
import ListProjects from '@/components/ListProjects.vue';

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

<style lang="css" scoped>
</style>
