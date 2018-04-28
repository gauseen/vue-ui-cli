## vue-ui-cli
> vue ui 库脚手架

>#### 目录结构
```
|———build       # webpack 配置项
|
|
|———config      # 配置项
|
|
|———distNpm     # vue ui 组件库产出 ———> npm run build:preview，用于发布 npm 包
|
|
|———distPreview # 预览项目产出 ———> npm run build:preview
|
|
|
|———.vuepress——| vui-docs   # 文档产出目录 ———> npm run build:docs
|
|
|
|———preview     # 组件（预览）测试目录
|
|
|———docs        # UI 库文档编写目录
|
|
|                 |————index.js    # vue ui 库入口文件
|                 |
|                 |————components  # vue ui 组件开发目录
|                 |
|———src(组件开发)——|————mixins      # mixins
|                 |
|                 |————styles      # 公共样式及单页面抽离出的样式
|                 |
|                 |————utils       # 公用方法
|
|
|———npmPublish  # 发布 npm 包 所需文件 
|
|
|———static      # 静态文件


```
>#### 安装依赖
```bash
npm i vui-m -S
```

>#### Vue 全局安装
```bash
import Vue from 'vue';
import Vuim from 'vui-m'
Vue.use(Vuim)

import 'vui-m/dist/css/vui-m.css'
```

>#### 举个栗子
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

#### 我的组件库，欢迎访问
#### [文档 API](https://vui-m.github.io/docs/)
#### [在线演示](https://gauseen.github.io/vui-m/#/home)

>#### scripts

```bash
npm run dev              # 本地开发 components
npm run dev:docs         # 本地开发 文档 API

npm run build:npm        # 编译 npm 包
npm run build:preview    # 编译 在线演示 demo
npm run build:docs       # 编译 文档 API

npm run gh:preview       # 部署 在线演示
npm run gh:docs          # 部署 文档 API
```
