import Mock from "mockjs";
import qs from "querystring";

Mock.mock ( "/api/message",
            "post",
            {
                code: 0,
                msg : "",
                data: {
                    id        : "@guid",
                    nickname  : "@cname",
                    content   : "@cparagraph(1, 10)",
                    createDate: Date.now (),
                    "avatar|1": [
                        "https://n.sinaimg.cn/sinacn20113/560/w1080h1080/20190718/0851-hzxsvnp3572972.jpg",
                        "https://img.ixintu.com/upload/jpg/20210526/6972b8aa37129d42600b547aa5c8e22c_82549_800_830.jpg",
                        "https://img-qn.51miz.com/preview/element/00/01/14/42/E-1144254-5ADEB576.jpg",
                        "https://img.syt5.com/2021/0812/20210812090143440.jpg.420.420.jpg"
                    ]
                }
            } );

Mock.mock ( /^\/api\/message\/?(\?.+)?$/,
            "get",
            function ( options ) {
                const query = qs.parse ( options.url );
    
                return Mock.mock ( {
                                       code: 0,
                                       msg : "",
                                       data: {
                                           total                            : 52,
                                           [ `rows|${ query.limit || 10 }` ]: [
                                               {
                                                   id        : "@guid",
                                                   nickname  : "@cname",
                                                   content   : "@cparagraph(1, 10)",
                                                   createDate: Date.now (),
                                                   "avatar|1": [
                                                       "https://n.sinaimg.cn/sinacn20113/560/w1080h1080/20190718/0851-hzxsvnp3572972.jpg",
                                                       "https://img.ixintu.com/upload/jpg/20210526/6972b8aa37129d42600b547aa5c8e22c_82549_800_830.jpg",
                                                       "https://img-qn.51miz.com/preview/element/00/01/14/42/E-1144254-5ADEB576.jpg",
                                                       "https://img.syt5.com/2021/0812/20210812090143440.jpg.420.420.jpg"
                                                   ]
                                               }
                                           ]
                                       }
                                   } );
            } );