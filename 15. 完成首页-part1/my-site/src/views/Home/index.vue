<template>
	<div class = "home-container"
	     ref = "container">
		<ul class = "carousel-container"
		    :style = "{
            marginTop,
		}">
			<li v-for = "item in banners"
			    :key = "item.id">
				<CarouselItem />
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
	</div>
</template>

<script>
    import { getBanners } from "@/api/banner";
    import CarouselItem from "@/views/Home/CarouselItem";
    import Icon from "@/components/Icon";
    
    export default {
        components: {
            CarouselItem,
            Icon
        },
        data () {
            return {
                banners        : [],
                index          : 1,
                containerHeight: 0
            };
        },
        async created () {
            this.banners = await getBanners ();
        },
        mounted () {
            this.containerHeight = this.$refs.container.clientHeight;
        },
        computed: {
            marginTop () {
                return - this.index * this.containerHeight + "px";
            }
        },
        methods : {
            switchTo ( i ) {
                this.index = i;
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
