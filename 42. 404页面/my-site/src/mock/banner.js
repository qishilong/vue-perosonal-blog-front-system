import Mock from "mockjs";

Mock.mock ( "/api/banner",
            "get",
            {
                code: 0,
                msg : "",
                data: [
                    {
                        id         : "2",
                        midImg     : "https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg",
                        bigImg     : "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0F/ChMkJlbKwiyIYPeGAAskxXh5WKoAALGkAAAAAAACyTd961.jpg",
                        title      : "伦敦",
                        description: "北纬51°30′-东经0.1°5′"
                    },
                    {
                        id         : "1",
                        midImg     :
                            "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
                        bigImg     :
                            "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=1920&h=1080",
                        title      : "北京",
                        description: "东经116°20′-北纬39°56′"
                    },
                    {
                        id         : "3",
                        midImg     : "https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg",
                        bigImg     : "https://pic.macsc.com/pic/202009/17085452_4309330190.jpeg",
                        title      : "华盛顿",
                        description: "北纬38°53.707′-西经77°02.182"
                    }
                ]
            } );
