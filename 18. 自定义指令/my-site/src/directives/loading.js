import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 得到 el 中 loading 效果的 img 元素
function getLoadingImage ( el ) {
    return el.querySelector ( "img[data-role = loading]" );
}

// 创建 img 元素
function createLoadingImg () {
    const img = document.createElement ( "img" );
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

// 导出指令的配置对象
export default function ( el,
                          binding ) {
    // 根据 binding.value 的值, 决定创建活删除 img 元素
    const curImg = getLoadingImage ( el );
    if ( binding.value ) {
        if ( !curImg ) {
            const img = createLoadingImg ();
            el.appendChild ( img );
        }
    } else {
        if ( curImg ) {
            curImg.remove ();
        }
    }
    /* if(binding.value === true){
        创建 img 元素
        if( 没有 img 元素){
            则创建 img 元素
        }
    } else {
        删除 img 元素
    } */
}