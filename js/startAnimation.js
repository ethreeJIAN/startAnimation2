function startAnimation (box, attrObj, callback){
    // 0 如果 attr 为 opacity，end * 100
    
    // 1 清除定时器
    clearInterval(box.timer)


    // 3 设置定时器
    box.timer = setInterval(() => {
        //  设置标签，如果为 true 表示所有属性都达到终点
        var flag = true

        // 遍历属性
        for (var attr in attrObj){
            
            // 获取节点的属性值
            var cur = getStyle(box, attr)
            switch (attr) {
                case "opacity":
                    cur = Math.round(parseFloat(cur) * 100)
                    break;
                default:
                    cur = parseInt(cur)
                    break;
            }

            // 设置终点值
            var end = null
            if (attr === "opacity"){
                end = attrObj[attr] * 100
            }else{
                end = attrObj[attr]
            }

            // 设置速度
            var speed = (end - cur) / 20
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

            // 终点停止
            if (cur !== end){
                flag = false
            }

            // 移动节点
            switch (attr) {
                case "opacity":
                    box.style.opacity = (cur + speed) / 100
                    break;
                case "scrollTop":
                    document.documentElement.scrollTop += speed
                    break;
                default:
                    box.style[attr] = cur + speed + "px"
                    break;
            }
        }
        // 如果 flag 为真，关闭定时器，执行回调
        if (flag){
            clearInterval(box.timer)
            if (callback){
                callback()
            }
        }
    }, 30)
}

function getStyle (box, attr){
    if (box.currentStyle){
        return box.currentStyle[attr]
    }else{
        return getComputedStyle(box, null)[attr]
    }
}