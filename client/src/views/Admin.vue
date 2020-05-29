<template lang="html">
  <div class="container">
    <h1>Administration Page</h1>
    <login></login>
  </div>
</template>

<script>

import Login from '@/components/Login.vue';

export default {
  name: 'admin-view',
  data() {
    return {

    }
  },
  components: {
    'login': Login,
  }
}
</script>

<style lang="css" scoped>


</style>
