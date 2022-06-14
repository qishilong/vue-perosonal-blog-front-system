<template>
	<ul class = "rightListContainer">
		<li v-for = "(item, i) in list"
		    :key = "i">
			<span @click = "handleClick"
			      :class = "{ active: item.isSelect }">{{ item.name }}</span>
			<RightList :list = "item.children"
			           @select = "handleClick" />
		</li>
	</ul>
</template>

<script>
    export default {
        name   : "RightList",
        props  : {
            // [ { name: "xxx", isSelect: true, children:[ { name: "yyy", isSelect: true } ] } ]
            list: {
                type   : Array,
                default: () => []
            }
        },
        methods: {
            handleClick ( item ) {
                this.$emit ( "select",
                             item );
            }
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  @import url(~@/styles/var.less);

  .rightListContainer {
    list-style: none;
    padding: 0;

    .rightListContainer {
      margin-left: 1em;
    }

    li {
      min-height: 40px;
      line-height: 40px;
      cursor: pointer;

      .active {
        color: @warn;
        font-weight: bold;
      }
    }
  }
</style>
