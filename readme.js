/*

dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，
dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架


1. 安装
   npm install dva-cli -g

2. 创建项目
   dva new dva-test

3. 启动项目
   npm start


4. 目录介绍
   src/routes  用来存放页面 类似于pages文件夹
   src/components  用来存放公共组件
   src/index.js  入口文件
   src/router.js 路由文件

5. 使用 history 路由 去除 #
   npm install --save history

   然后修改 index.js
   import { createBrowserHistory as createHistory } from 'history';
   const app = dva({
      history: createHistory(),
   });

6. module -> state
   modules 文件夹 下面相当于 redux
   每个文件有 namespace 区分
   
   页面中使用跟之前一样 还是 mapStateToProps 来用

7. module -> effects
   effects 用于解决异步 使用 generator 语法

8. module -> subscriptions
   subscriptions 页面加载时触发 可以根据当前路径 做其他事情   
   要先在入口文件 index.js 中将对应 modules 加载进来


8. 请求
   utils/example.js 默认私用fetch发送请求
   services/example.js 存放所有的api
   .webpackrc 里面配置转发
 

*/