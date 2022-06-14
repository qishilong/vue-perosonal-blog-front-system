<template>
	<img :src = "loadingUrl"
	     class = "loading-container"
	     alt = "">
</template>

<script>
    import loadingUrl from "@/assets/loading.svg";
    
    export default {
        data () {
            return {
                loadingUrl
            };
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  @import url(~@/styles/mixin.less);

  .loading-container {
	  .self-center()
  }
</style>
