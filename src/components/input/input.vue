<template>
  <div>
    <input :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentVal: this.value
    }
  },
  methods: {
    handleInput(e) {
      this.currentVal = e.target.value
      this.$emit('input', this.currentVal)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style scoped>
</style>