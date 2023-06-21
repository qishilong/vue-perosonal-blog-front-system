import Mock from "mockjs";

Mock.mock("/api/setting",
    "get",
    {
        code: 0,
        msg: "",
        data: {
            avatar: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar.jpg",
            siteTitle: "我的个人空间",
            github: "https://github.com/qishilong",
            qq: "663253062",
            qqQrCode: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar.jpg",
            weixin: "Sunny_qsl",
            weixinQrCode: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar.jpg",
            mail: "663253062@qq.com",
            icp: "Chinese",
            githubName: "qishilong",
            favicon: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar.jpg"
        }
    });