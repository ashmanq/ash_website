<template lang="html">
  <div class="title-bar">
    <div class="row">
      <span class="close">X</span>
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
  background-color: $secondary-color;
  height: 1.4em;
  border-style: solid;
  border-width: 2px;
  border-color: $secondary-color-hover;
  border-radius: 15px 15px 0 0;
}

.row {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.close {
  padding:0.2em;
  margin-right: 1.5em;
  border-radius: 0.2em;
  background-color: $warning-color;
}
</style>
