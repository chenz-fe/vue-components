<template>
  <div>
    <p>消息通知组件封装测试</p>
    <button @click.prevent="clickBtn">click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickBtn() {
      this.$notice.info({
        duration: 3,
        content: '这是一些通知内容'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>