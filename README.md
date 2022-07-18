# 一个动画框架

## 用法

```html
<!-- 引入 js 文件 -->
<script src="js/startAnimation.js"></script>
<script>
  // 调用函数
  startAnimation(box, {
    left: 200,
    width: 300,
    opacity: 0.3
  }, () => {
    // 回调函数内容
  })
</script>
```
