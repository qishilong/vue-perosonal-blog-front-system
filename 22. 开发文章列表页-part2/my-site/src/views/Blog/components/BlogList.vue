<template>
	<div class = "blog-list-container"
	     ref = "container">
		<ul>
			<li v-for = "item in data.rows"
			    :key = "item.id">
				<div class = "thumb"
				     v-if = "item.thumb">
					<a href = "">
						<img :src = "item.thumb"
						     :alt = "item.title"
						     :title = "item.title"
						     alt = "">
					</a>
				</div>
				
				<div class = "main">
					<a href = "">
						<h2>{{ item.title }}</h2>
					</a>
					<div class = "aside">
						<span>日期: {{ formatDate ( item.createDate ) }}</span>
						<span>浏览: {{ item.scanNumber }}</span>
						<span>评论: {{ item.commentNumber }}</span>
						<a href = "/article/cate/8">{{ item.category.name }}</a>
					</div>
					
					<div class = "desc">
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
		
		<!--分页-->
		<Pager v-if = "data.total"
		       :current = "routeInfo.page"
		       :total = "data.total"
		       :limit = "routeInfo.limit"
		       :visibleNumber = "10"
		       @pageChange = "handlePageChange" />
	</div>
</template>

<script>
    import Pager from "@/components/Pager";
    import fetchData from "@/mixins/fetchData";
    import { getBlogs } from "@/api/blog";
    import { formatDate } from "@/utils";
    
    export default {
        mixins    : [ fetchData ( {} ) ],
        components: {
            Pager
        },
        computed  : {
            // 获取路由信息
            routeInfo () {
                const page = + this.$route.query.page || 1;
                const limit = + this.$route.query.limit || 10;
                const categoryId = + this.$route.params || - 1;
                return {
                    page,
                    limit,
                    categoryId
                };
            }
        },
        methods   : {
            formatDate,
            async fetchData () {
                return await getBlogs (
                    this.routeInfo.page,
                    this.routeInfo.limit,
                    this.routeInfo.categoryId
                );
            },
            handlePageChange ( newPage ) {
                const query = {
                    page : newPage,
                    limit: this.routeInfo.limit
                };
                // 跳转到当前的分类 id, 当前的页容量, newPage 的页码
                if ( this.routeInfo.categoryId === - 1 ) {
                    // 当前没有分类
                    // /article?page=${newPage}&limit=${this.routeInfo.limit}
                    this.$router.push ( {
                                            name: "Blog",
                                            query
                                        } );
                } else {
                    // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
                    this.$router.push ( {
                                            name  : "CategoryBlog",
                                            query,
                                            params: {
                                                categoryId: this.routeInfo.categoryId
                                            }
                                        } );
                }
            }
        },
        watch     : {
            async $route () {
                this.isLoading = true;
                this.$refs.container.scrollTop = 0;
                this.data = await this.fetchData ();
                this.isLoading = false;
            }
        }
    };
</script>

<style scoped
       lang = "less">
  /* 带有作用域的样式 */
  @import url(~@/styles/var.less);

  .blog-list-container {
    position: relative;
    overflow-y: scroll;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    line-height: 1.7;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }

  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;

      img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
      }
    }

    .main {
      flex: 1 1 auto;

      h2 {
        margin: 0;
      }
    }

    .aside {
      font-size: 12px;
      color: @gray;

      span {
        margin-right: 15px;
      }
    }

    .desc {
      margin: 15px 0;
      font-size: 14px;
    }
  }
</style>
