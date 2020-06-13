<template lang="html">
  <div class="title-bar">

    <div class="row">
      <span class="title">{{ title }}</span>
      <span class="close"></span>
    </div>
    <div class="contents">

    </div>
  </div>
</template>

<script>
export default {
  name: "window-title-bar",
  props: ["title"],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    padding-left: 12px;
    text-align: center;
    padding: 5px;
    flex: 1;
  }
  .title-bar {
    display: flex;
    background:#474663;
    min-height: 25px;
    border-style: solid;
    border-width: 1px 1px 0 1px;
    border-color: #7270a1;
    border-radius: 8px 8px 0 0;
  }

  .row {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: flex-end;
    padding:5px;
  }

  .close {
    padding:3px 14px;
    height: 50%;
    margin-right: 16px;
    border-radius: 3px;
    background-color: $warning-color;
    position: absolute;
  }
</style>
