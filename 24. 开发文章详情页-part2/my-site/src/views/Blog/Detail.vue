<template>
	<Layout>
		<div class = "main-container"
		     v-loading = "isLoading">
			<BlogDetail :blog = "data"
			            v-if = "data" />
		</div>
		<template #right>
			<div class = "right-container"
			     v-loading = "isLoading">
				<BlogTOC :toc = "data.toc"
				         v-if = "data" />
			</div>
		</template>
	</Layout>
</template>

<script>
    import fetchData from "@/mixins/fetchData";
    import { getBlog } from "@/api/blog";
    import Layout from "@/components/Layout";
    import BlogDetail from "@/views/Blog/components/BlogDetail";
    import BlogTOC from "@/views/Blog/components/BlogTOC";
    
    export default {
        components: {
            Layout,
            BlogDetail,
            BlogTOC
        },
        mixins    : [ fetchData ( null ) ],
        methods   : {
            async fetchData () {
                return await getBlog ( this.$route.params.id );
            }
        }
    };
</script>

<style lang = "less"
       scoped>
  .main-container {
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }

  .right-container {
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
  }
</style>
