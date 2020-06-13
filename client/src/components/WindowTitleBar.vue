<template lang="html">
  <div class="title-bar">
    <div class="row">
      <span class="close"></span>
    </div>
    <div class="contents">

    </div>
  </div>
</template>

<script>
export default {
  name: "window-title-bar",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

.title-bar {
  display: flex;
  background:#474663;
  height: 1.4em;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  border-color: #7270a1;
  border-radius: 8px 8px 0 0;
}

.row {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding:0.2em;
}

.close {
  padding:0.2em 0.9em;
  margin-right: 1.5em;
  border-radius: 0.2em;
  background-color: $warning-color;
}
</style>
