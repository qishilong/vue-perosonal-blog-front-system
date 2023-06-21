import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message",
    "post",
    {
        code: 0,
        msg: "",
        data: {
            id: "@guid",
            nickname: "@cname",
            content: "@cparagraph(1, 10)",
            createDate: Date.now(),
            "avatar|1": [
                "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-4.jpg",
                "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-2.jpg",
                "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-1.jpg",
                "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-3.jpg"
            ]
        }
    });

Mock.mock(/^\/api\/message\/?(\?.+)?$/,
    "get",
    function (options) {
        const query = qs.parse(options.url);

        return Mock.mock({
            code: 0,
            msg: "",
            data: {
                total: 52,
                [`rows|${query.limit || 10}`]: [
                    {
                        id: "@guid",
                        nickname: "@cname",
                        content: "@cparagraph(1, 10)",
                        createDate: Date.now(),
                        "avatar|1": [
                            "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-4.jpg",
                            "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-2.jpg",
                            "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-1.jpg",
                            "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/avatar-3.jpg"
                        ]
                    }
                ]
            }
        });
    });