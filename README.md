## Vue.js组件封装

主要针对基础UI通用组件进行简单封装。目前已经完成的组件及功能如下：

### 表单组件

- 参考elementUI
- From组件负责定义校验规则
- FormItem组件负责显示校验不通过时的错误信息
- Input组件负责数据双向绑定
- 使用provide & inject实现组件内部共享数据
