<template>
  <div class="home">
   <form-test></form-test>
   <notice-test></notice-test>
  </div>
</template>

<script>
import FormTest from './FormTest.vue'
import NoticeTest from './NoticeTest'

export default {
  name: 'home',
  components: {
    FormTest,
    NoticeTest
  }
}
</script>
