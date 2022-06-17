<template>
	<div class = "blog-comment-container">
		<MessageArea title = "评论列表"
		             :subTitle = "`(${data.total})`"
		             :list = "data.rows"
		             :isListLoading = "isLoading"
		             @submit = "handleSubmit" />
	</div>
</template>

<script>
    import MessageArea from "@/components/MessageArea";
    import fetchData from "@/mixins/fetchData";
    import {
        getComments,
        postComment
    } from "@/api/blog";
    
    export default {
        mixins:[fetchData( { total : 0,
                               rows: []
                           })],
        components: {
            MessageArea
        },
        data () {
            return {
                page : 1,
                limit: 10
            };
        },
        methods: {
            async fetchData () {
                return await getComments ( this.$route.params.id,
                                           this.page,
                                           this.limit );
            },
            async handleSubmit ( formData,
                                 callback ) {
                const resp = await postComment ( {
                                                     blogId: this.$route.params.id,
                                                     ...formData
                                                 } );
                this.data.rows.unshift ( resp );
                this.data.total ++;
                callback ( "评论成功" );
            }
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  .blog-comment-container {
    margin: 30px 0;
  }
</style>
