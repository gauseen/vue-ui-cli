### 快速上手

> 就是这么简单！

-------------

>#### 暂时可用组件
```js
Toast
```
多谢支持，持续更新中...

-------------

#### 安装依赖
```bash
npm i vui-m -S
```

#### Vue 全局安装
```bash
import Vue from 'vue';
import Vuim from 'vui-m'
Vue.use(Vuim)

import 'vui-m/dist/css/vui-m.css'
```

#### 举个栗子
```javascript
<template>
  <Test :txt="value" />
</template>
<script>
  export default {
      data () {
          return {
              value: '传值测试'
          }
      }
  }
</script>
```
