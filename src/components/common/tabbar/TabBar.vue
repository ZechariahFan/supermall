<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

#tab-bar{
  display: flex;
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: #f6f6f6;
  box-shadow: 0px 10px 10px rgba(100,100,100,.01);
}


</style>
