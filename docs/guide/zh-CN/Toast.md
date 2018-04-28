### Toast 轻提示框

> 轻提示框，支持自定义位置、显示时间、css

------

#### 例子

基本用法

```javascript
this.$toast('提示信息');
```

```javascript
this.$toast(options);
```
### options 对象字段说明:
| 参数 | 说明 | 类型 | 可选值 | 默认值|
|------|-------|---------|-------|--------|
| message | 文本内容 | String | | |
| position | Toast 的位置 | String | 'top'<br>'bottom'<br>'middle' | 'middle' |
| duration | 持续时间（毫秒）| Number | | 2500 |
