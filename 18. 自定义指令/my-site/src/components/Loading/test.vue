<template>
	<div class = "center">
		<Loading v-if = "isLoading" />
		<button @click = "isLoading = !isLoading">切换显示/隐藏</button>
	</div>
</template>

<script>
    import Loading from "./index";
    
    export default {
        components: {
            Loading
        },
        data () {
            return {
                isLoading: true
            };
        }
    };
</script>

<style scoped>
    /* 带有作用域的样式 */
    .center {
        position: relative;
    }
</style>
