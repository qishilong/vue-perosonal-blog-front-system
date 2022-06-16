<template>
	<div class = "blog-detail-container">
		<h1>{{ blog.title }}</h1>
		<div class = "aside">
			<span>日期: {{ formatDate ( blog.createDate ) }}</span>
			<span>浏览: {{ blog.scanNumber }}</span>
			<a href = "">评论: {{ blog.commentNumber }}</a>
			<a href = "">{{ blog.category.name }}</a>
		</div>
		<div class = "markdown-body"
		     v-html = "blog.htmlContent"></div>
	</div>
</template>

<script>
    import { formatDate } from "@/utils";
    import "highlight.js/styles/github.css";
    import "@/styles/markdown.css";
    
    export default {
        props  : {
            blog: {
                type    : Object,
                required: true
            }
        },
        methods: {
            formatDate
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  @import url(~@/styles/var.less);

  .aside {
    font-size: 12px;
    color: @gray;

    span, a {
      margin-left: 15px;
    }
  }

  .markdown-body {
    margin: 2em 0;
  }
</style>
