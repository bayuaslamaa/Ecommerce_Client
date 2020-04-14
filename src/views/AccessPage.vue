<template>
  <div class="container">
    <div class="jumbotron">
    <h1>Login Page</h1></div>
     <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
