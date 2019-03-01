# vue-demo-1
vue 上手练习

- chap1 <script> 引入 vue
- chap2 过滤器 | 指令 v-bind v-on v-text v-html 事件语法糖 v-bind/: v-on/@
- chap3 计算属性
- chap4 v-bind 绑定 style 和 class 的语法(变量、对象、数组)
- chap5 vue 内置指令
    > i. v-cloak
    
    > ii. v-once
    
    > iii. v-if v-else-if v-else v-show
    > iv. 数组方法 .push .pop .shift .unshift .splice .sort .reverse
      不会引起数组渲染的情况: 1. 修改数组指定项 2. 直接更改数组长度
      解决方法: 1. Vue.set(app.arr, 1, 'text') 2. filter 返回新的数组
    > v. 快捷绑定事件 .stop .prevent .self .once .enter .delete .tab keyup.13
