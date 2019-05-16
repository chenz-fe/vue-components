<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      require: true
    },
    rules: {
      type: Object
    }
  },
  created() {
    this.fields = []
    this.$on('formItemAdd', item => this.fields.push(item))
  },
  methods: {
    async validate(callback) {
      const tasks = this.fields.map(item => item.validate())
      const results = await Promise.all(tasks)
      let ret = true
      results.forEach(valid => {
        if (!valid) {
          ret = false
        }
      })
      callback(ret)
    }
  }
}
</script>

<style scoped>
</style>