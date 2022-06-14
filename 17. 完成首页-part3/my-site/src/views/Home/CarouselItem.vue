<template>
	<div class = "carousel-item-container"
	     ref = "container"
	     @mousemove = "handleMouseMove"
	     @mouseleave = "handleMouseLeave">
		<div class = "carousel-img"
		     ref = "image"
		     :style = "imagePosition">
			<ImageLoader :placeholder = "carousel.midImg"
			             :src = "carousel.bigImg"
			             @load = "this.showWords" />
		</div>
		
		<div class = "title"
		     ref = "title">
			{{ carousel.title }}
		</div>
		<div class = "desc"
		     ref = "desc">
			{{ carousel.description }}
		</div>
	</div>
</template>

<script>
    import ImageLoader from "@/components/ImageLoader";
    
    export default {
        props     : [ "carousel" ],
        components: {
            ImageLoader
        },
        data () {
            return {
                titleWidth   : 0,
                descWidth    : 0,
                containerSize: null,
                innerSize    : null,
                mouseX       : 0,
                mouseY       : 0
            };
        },
        computed: {
            imagePosition () {
                if ( !this.innerSize || !this.containerSize ) {
                    return;
                }
                const extraWidth = this.innerSize.width - this.containerSize.width;
                const extraHeight = this.innerSize.height - this.containerSize.height;
                const left = ( - extraWidth / this.containerSize.width ) * this.mouseX;
                const top = ( - extraHeight / this.containerSize.height ) * this.mouseY;
                return {
                    transform: `translate(${ left }px, ${ top }px)`
                };
            },
            center () {
                return {
                    x: this.containerSize.width / 2,
                    y: this.containerSize.height / 2
                };
            }
        },
        mounted () {
            this.titleWidth = this.$refs.title.clientWidth;
            this.descWidth = this.$refs.desc.clientWidth;
            this.setSize ();
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
            window.addEventListener ( "resize",
                                      this.resize );
        },
        destroyed () {
            window.removeEventListener ( "resize",
                                         this.resize );
        },
        methods: {
            showWords () {
                this.$refs.title.style.opacity = 1;
                this.$refs.title.style.width = 0;
                // 强制让浏览器渲染一次
                this.$refs.title.clientWidth;   // reflow
                this.$refs.title.style.transition = "1s";
                this.$refs.title.style.width = this.titleWidth + "px";
                
                this.$refs.desc.style.opacity = 1;
                this.$refs.desc.style.width = 0;
                // 强制让浏览器渲染一次
                this.$refs.desc.clientWidth;   // reflow
                this.$refs.desc.style.transition = "2s 1s";
                this.$refs.desc.style.width = this.descWidth + "px";
            },
            setSize () {
                this.containerSize = {
                    width : this.$refs.container.clientWidth,
                    height: this.$refs.container.clientHeight
                };
                this.innerSize = {
                    width : this.$refs.image.clientWidth,
                    height: this.$refs.image.clientHeight
                };
            },
            handleMouseMove ( e ) {
                // console.log ( e );
                const rect = this.$refs.container.getBoundingClientRect ();
                // console.log ( rect );
                this.mouseX = e.clientX - rect.left;
                this.mouseY = e.clientY - rect.top;
            },
            handleMouseLeave ( e ) {
                // console.log ( e );
                this.mouseX = this.center.x;
                this.mouseY = this.center.y;
            }
        }
    };
</script>

<style lang = "less"
       scoped>
  /* 带有作用域的样式 */
  @import url(~@/styles/var.less);

  .carousel-item-container {
    // background: @dark;
    width: 100%;
    height: 100%;
    color: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
  }

  .title, .desc {
    position: absolute;
    letter-spacing: 3px;
    left: 30px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }

  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }

  .desc {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }
</style>
