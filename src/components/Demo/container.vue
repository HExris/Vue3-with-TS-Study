<template>
  <div class="block">
    <div class="block_title" v-text="title"></div>
    <div class="container">
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String
    }
}
</script>

<style lang="less" scoped>
.block {
  margin: 20px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 10px;
  .block_title {
    font-size: 30px;
  }
}
.container {
  margin-top: 10px;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 4px;
  /deep/ input {
    border-radius: 3px;
    border-width: 1px;
    padding: 10px 5px;
    font-size: 18px;
    outline: none;
    width: 280px;
    box-sizing: border-box;
  }
}
</style>