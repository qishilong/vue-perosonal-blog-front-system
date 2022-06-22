export default [
    {
        name     : "Home",
        path     : "/",
        component: () => import(/* webpackChunkName: "home" */"@/views/Home"),
        meta     : {
            title: "首页"
        }
    },
    {
        name     : "About",
        path     : "/about",
        component: () => import(/* webpackChunkName: "home" */"@/views/About"),
        meta     : {
            title: "关于我"
        }
    },
    {
        name     : "Blog",
        path     : "/article",
        component: () => import(/* webpackChunkName: "home" */"@/views/Blog"),
        meta     : {
            title: "文章"
        }
    },
    {
        name     : "CategoryBlog",
        path     : "/article/cate/:categoryId",
        component: () => import(/* webpackChunkName: "home" */"@/views/Blog"),
        meta     : {
            title: "文章"
        }
    },
    {
        name     : "BlogDetail",
        path     : "/article/:id",
        component: () => import(/* webpackChunkName: "home" */"@/views/Blog/Detail"),
        meta     : {
            title: "文章详情"
        }
    },
    {
        name     : "Project",
        path     : "/project",
        component: () => import(/* webpackChunkName: "home" */"@/views/Project"),
        meta     : {
            title: "项目&效果"
        }
    },
    {
        name     : "Message",
        path     : "/message",
        component: () => import(/* webpackChunkName: "home" */"@/views/Message"),
        meta     : {
            title: "留言板"
        }
    }
];
