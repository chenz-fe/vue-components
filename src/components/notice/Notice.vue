<template>
  <div class="alert" ref="alert">
    <div class="alert-container" v-for="item in alerts" :key="item.id">
      <div class="alert-content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notice",
  data() {
    return {
      alerts: []
    };
  },
  created() {
    this.id = 0;
  },
  methods: {
    add(options) {
      const dom = this.$refs.alert
      if (dom.innerHTML !== '') return
      const id = "id_" + this.id++;
      const _alert = { ...options, id: id };
      this.alerts.push(_alert);
      const duration = options.duration || 1; // 单位秒
      setTimeout(() => {
        this.del(id);
      }, duration * 1000);
    },
    del(id) {
      for (let i = 0; i < this.alerts.length; i++) {
        const element = this.alerts[i];
        if (element.id === id) {
          this.alerts.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>

<style scoped lang="css">
.alert {
  position: fixed;
  width: 100%;
  top: 50%;
  transform: translate(-50%,-50%);
  left: 50%;
  text-align: center;
  
}
.alert-content {
    display: inline-block;
    padding: 12px;
    color: #fff;
    margin-bottom: 10px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 10px;
  }
</style>