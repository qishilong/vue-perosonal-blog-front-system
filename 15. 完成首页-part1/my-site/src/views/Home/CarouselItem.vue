<template>
	<div class = "carousel-item-container">CarouselItem</div>
</template>

<script>
    export default {};
</script>

<style lang = "less"
       scoped>
  /* 带有作用域的样式 */
  @import url(~@/styles/var.less);

  .carousel-item-container {
    background: @dark;
    width: 100%;
    height: 100%;
    color: #ffffff;
  }
</style>
