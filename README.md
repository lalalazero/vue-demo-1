# vue-demo-1
vue 上手练习

- chap1 `<script>` 标签引入 `vue`
- chap2 

    i. 过滤器 | 

    ii. 指令 v-bind v-on v-text v-html 

    iii. 事件语法糖 v-bind/: v-on/@

- chap3 计算属性
- chap4 
v-bind 绑定 style 和 class 的语法(变量、对象、数组)
- chap5 

    vue 内置指令

        > i. v-cloak
        
        > ii. v-once
        
        > iii. v-if v-else-if v-else v-show
        
        > iv. 数组方法 .push .pop .shift .unshift .splice .sort .reverse
        
        不会引起数组渲染的情况: 1. 修改数组指定项 2. 直接更改数组长度
        
        解决方法: 1. Vue.set(app.arr, 1, 'text') 2. splice 更新数组
        
        > v. 快捷绑定事件 .stop .prevent .self .once .enter .delete .tab keyup.13

- chap6 表单和 v-model
  
  1. input 和 textarea 
  
      用 v-model 绑定，（如果有初始化值会被忽略)
  
  2. 单选框 radio

      单个单选框：v-bind
      
      多个单选框：v-model 配合 value 使用
  
  3. 复选框 checkbox

- chap7 组件

    1. 7-1 组件的注册和挂载

    2. 7-2 props 传递属性
    
    3. 7-3 props 和单项数据流

    4. 7-4 数据验证

    5. 7-5 自定义事件-子组件给父组件传递数据

        a. $emit()

    6. 7-6 在组件中使用 v-model

    7. 7-7 非父子组件的通信：父链、子链

    8. 7-8 组件作用域

    9. 7-9 使用 slot 分发内容（单个 slot 和 具名 slot)

    10. 7-10 作用域 slot（从子组件获取数据）

    11. 7-11 访问 slot 

    12. 7-12 动态组件
