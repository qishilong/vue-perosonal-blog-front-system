import eventBus from "@/eventBus";
import defaultGif from "@/assets/default.gif";
import { debounce } from "@/utils";

let imgs = [];

function setImage ( img ) {
    img.dom.src = defaultGif;   // 先暂时使用默认图片
    // 处理图片
    // 该图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect ();
    const height = rect.height || 150;
    if ( rect.top >= - height && rect.top <= clientHeight ) {
        // 在视口范围内
        img.dom.src = img.src;
        imgs = imgs.filter ( ( i ) => i !== img );
    }
}

// 希望调用该函数, 就可以设置那些合适的图片
function setImages () {
    for ( const img of imgs ) {
        // 处理该图片
        setImage ( img );
    }
}

eventBus.$on ( "mainScroll",
               debounce ( setImages,
                          50 ) );

export default {
    inserted ( el,
               bindings ) {
        const img = {
            dom: el,
            src: bindings.value
        };
        imgs.push ( img );
        
        // 立即处理它
        setImage ( img );
    },
    unbind ( el ) {
        imgs = imgs.filter ( ( img ) => img.dom !== el );
    }
};