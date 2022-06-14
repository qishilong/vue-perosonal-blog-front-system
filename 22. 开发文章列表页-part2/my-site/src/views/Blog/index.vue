<template>
	<Layout>
		<BlogList />
		<!--<template #right>
		
		</template>-->
	</Layout>
</template>

<script>
    import Layout from "@/components/Layout";
    import BlogList from "@/views/Blog/components/BlogList";
    
    export default {
        components: {
            Layout,
            BlogList
        }
    };
</script>

<style></style>
