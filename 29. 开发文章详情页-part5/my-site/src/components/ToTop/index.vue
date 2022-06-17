<template>
	<div class = "to-top-container"
	     v-show = "show"
	     @click = "handleClick">
		Top
	</div>
</template>

<script>
    export default {
        data () {
            return {
                show: false
            };
        },
        created () {
            this.$bus.$on ( "mainScroll",
                            this.handleScroll );
        },
        destroyed () {
            this.$bus.$off ( "mainScroll",
                             this.handleScroll );
        },
        methods: {
            handleScroll ( dom ) {
                if ( !dom ) {
                    this.show = false;
                    return;
                }
                this.show = dom.scrollTop >= 500;
            },
            handleClick () {
                this.$bus.$emit ( "setMainScroll",
                                  0 );
            }
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  @import url(~@/styles/var.less);

  .to-top-container {
    background: @primary;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    z-index: 99;
    right: 50px;
    bottom: 50px;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
  }
</style>
