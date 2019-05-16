<template>
  <div>
    <hr>
    <p>表单组件封装测试</p>
    <x-form :model="ruleForm" :rules="rules" ref="loginForm">
      <x-form-item label="用户名" prop="name">
        <x-input v-model="ruleForm.name"></x-input>
      </x-form-item>
      <x-form-item label="密码" prop="pwd">
        <x-input v-model="ruleForm.pwd"></x-input>
      </x-form-item>
      <x-form-item>
        <button @click.prevent="submitForm">提交</button>
      </x-form-item>
    </x-form>
    <p>{{ruleForm}}</p>
    <hr>
  </div>
</template>

<script>
import XForm from '../components/form/form.vue'
import XFormItem from '../components/form/form-item.vue'
import XInput from '../components/input/input.vue'
export default {
  components: {
    XForm,
    XFormItem,
    XInput
  },
  data() {
    return {
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 6, max: 10, message: '请输入6~10位用户名' }
        ],
        pwd: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid=>{
        if(valid){
          alert('登录成功')
        }else{
          alert('登录失败')
        }
      })
    }
  }
}
</script>

<style scoped>
</style>