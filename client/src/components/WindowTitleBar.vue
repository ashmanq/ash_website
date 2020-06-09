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
  // background-color: $secondary-color;
  background:#474663;
  height: 1.4em;
  border-style: solid;
  border-width: 2px;
  // border-color: $secondary-color-hover;
  border-color: #474663;
  border-radius: 10px 10px 0 0;
}

.row {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.close {
  padding:0.2em 0.9em;
  margin-right: 1.5em;
  border-radius: 0.2em;
  background-color: $warning-color;
}
</style>
