import Mock from "mockjs";

Mock.mock("/api/banner",
    "get",
    {
        code: 0,
        msg: "",
        data: [
            {
                id: "2",
                midImg: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/banner-modal.jpg",
                bigImg: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/banner-1.jpeg",
                title: "伦敦",
                description: "北纬51°30′-东经0.1°5′"
            },
            {
                id: "1",
                midImg:
                    "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/banner-modal.jpg",
                bigImg:
                    "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/banner_2.jpg",
                title: "北京",
                description: "东经116°20′-北纬39°56′"
            },
            {
                id: "3",
                midImg: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/banner-modal.jpg",
                bigImg: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/banner-3.jpg",
                title: "华盛顿",
                description: "北纬38°53.707′-西经77°02.182"
            }
        ]
    });
