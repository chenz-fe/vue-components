import Notice from "./Notice.vue";
import Vue from "vue";

// 给Notice添加一个创建组件实例的方法，可以动态编译自身模板并挂载
Notice.getInstance = props => {
  const instance = new Vue({
    render(h) {
      return h(Notice, { props });
    }
  }).$mount(); 

  document.body.appendChild(instance.$el);

  const notice = instance.$children[0];
  return notice;
};

// 设计单例模式，全局范围唯一创建一个Notice实例
let msgInstance = null;
function getInstance() {
  msgInstance = msgInstance || Notice.getInstance();
  return msgInstance;
}

export default {
  info({ duration = 2, content = "" }) {
    getInstance().add({
      content,
      duration
    });
  }
};