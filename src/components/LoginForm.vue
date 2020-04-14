<template>
  <div>
      <form @submit.prevent="login"  class="col-4 offset-4">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
    <small id="emailHelp" class="form-text text-muted">We only accept admin account.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="user.password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(Loading)
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel
      })
      axios.post('https://evening-stream-54386.herokuapp.com/login', {
        email: this.user.email,
        password: this.user.password
      })
        .then(({ data }) => {
          setTimeout(() => {
            loader.hide()
          }, 5000)
          localStorage.setItem('access_token', data.access_token)
          this.user.email = ''
          this.user.password = ''
          this.$router.push('/')
        })
        .catch(err => {
          this.user.email = ''
          this.user.password = ''
          console.log(err)
        })
    },
    onCancel () {
      console.log('User cancelled the loader.')
    }
  }
}
</script>

<style>

</style>
