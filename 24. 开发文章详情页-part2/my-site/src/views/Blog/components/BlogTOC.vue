<template>
	<div class = "blog-toc container">
		<h1>目录</h1>
		<RightList :list = "toc"
		           @select = "handleSelect" />
	</div>
</template>

<script>
    import RightList from "@/views/Blog/components/RightList";
    
    export default {
        components: { RightList },
        props     : {
            toc: {
                type: Array
            }
        },
        methods   : {
            handleSelect ( item ) {
                location.hash = item.anchor;
            }
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  .blog-toc-container {
    h2 {
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 1em;
      margin: 0;
    }
  }
</style>
