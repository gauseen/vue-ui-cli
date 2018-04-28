## vui-m

### A high quality UI Toolkit built on Vue 2.x.

#### [文档 API](https://vui-m.github.io/docs/)
#### [在线演示](https://gauseen.github.io/vui-m/#/home)

>#### 可用组件
```javascript
Test
Toast
```

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
