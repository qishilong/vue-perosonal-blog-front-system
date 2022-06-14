<template>
	<div class = "home-container"
	     ref = "container"
	     @wheel = "handleWheel"
	     v-loading = "isLoading">
		<ul class = "carousel-container"
		    :style = "{
            marginTop,
		}"
		    @transitionend = "handleTransitionEnd">
			<li v-for = "(item, i) in banners"
			    :key = "item.id">
				<CarouselItem :carousel = "item" />
			</li>
		</ul>
		
		<div class = "icon icon-up"
		     v-show = "index >= 1"
		     @click = "switchTo(index - 1)">
			<Icon type = "arrowUp" />
		</div>
		<div class = "icon icon-down"
		     v-show = "index < banners.length - 1"
		     @click = "switchTo(index + 1)">
			<Icon type = "arrowDown" />
		</div>
		
		<ul class = "indicator">
			<li v-for = "(item, i) in banners"
			    :key = item.id
			    :class = "{
                    active: i === index,
			    }"
			    @click = "switchTo(i)"></li>
		</ul>
		<!--<Loading v-if = "isLoading" />-->
	</div>
</template>

<script>
    import { getBanners } from "@/api/banner";
    import CarouselItem from "@/views/Home/CarouselItem";
    import Icon from "@/components/Icon";
    // import Loading from "@/components/Loading";
    
    export default {
        components: {
            CarouselItem,
            Icon
            // Loading
        },
        data () {
            return {
                banners        : [],
                index          : 1,
                containerHeight: 0,
                switching      : false,  // 是否正在切换中
                isLoading      : true
            };
        },
        async created () {
            this.banners = await getBanners ();
            this.isLoading = false;
        },
        mounted () {
            this.containerHeight = this.$refs.container.clientHeight;
            window.addEventListener ( "resize",
                                      this.handleResize );
        },
        destroyed () {
            window.removeEventListener ( "resize",
                                         this.handleResize );
        },
        computed: {
            marginTop () {
                return - this.index * this.containerHeight + "px";
            }
        },
        methods : {
            switchTo ( i ) {
                this.index = i;
            },
            handleWheel ( e ) {
                if ( this.switching ) {
                    return;
                }
                if ( e.deltaY < - 5 && this.index > 0 ) {
                    // 往上滚动
                    this.switching = true;
                    this.index --;
                } else if ( e.deltaY > 5 && this.index < this.banners.length - 1 ) {
                    // 往下滚动
                    this.switching = true;
                    this.index ++;
                }
            },
            handleTransitionEnd () {
                this.switching = false;
            },
            handleResize () {
                this.containerHeight = this.$refs.container.clientHeight;
            }
        }
    };
</script>

<style lang = "less"
       scoped>
  /* 带有作用域的样式 */
  @import url(~@/styles/var.less);
  @import url(~@/styles/mixin.less);

  .home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    // 测试
    // width: 60%;
    // height: 40%;
    // overflow: visible;
    // border: 2px solid #008c8c;
    // margin: 100px auto;

    ul {
      margin: 0;
      list-style: none;
      padding: 0;
    }
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;

    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
	  .self-center();
    font-size: 30px;
    @gap: 25px;
    color: @gray;
    transform: translateX(-50%);

    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }

    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }

    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }

  .indicator {
	  .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;

    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #ffffff;
      box-sizing: border-box;

      &.active {
        background: #ffffff;
      }
    }
  }
</style>
