<template>
	<div class = "message-area-container">
		<DataForm v-on = "$listeners" />
		<h3>{{ title }}
			<span>{{ subTitle }}</span>
		</h3>
		<DataList :list = "list" />
		<div class = "loading"
		     v-loading = "isListLoading"></div>
	</div>
</template>

<script>
    import DataForm from "@/components/MessageArea/DataForm";
    import DataList from "@/components/MessageArea/DataList";
    
    export default {
        components: {
            DataForm,
            DataList
        },
        props     : {
            title        : {
                type   : String,
                default: ""
            },
            subTitle     : {
                type   : String,
                default: ""
            },
            list         : {
                type   : Array,
                default: () => []
            },
            isListLoading: {
                type   : Boolean,
                default: false
            }
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  .loading {
    position: relative;
    height: 100px;
  }
</style>
