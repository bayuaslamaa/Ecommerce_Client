<template>
  <div>
    {{email}}
      <form @submit.prevent="login"  class="col-4 offset-4">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We only accept admin account.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(Loading)
export default {
  name: 'LoginForm',
  methods: {
    login () {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel
      })
      this.$store.dispatch('login')
        .then(({ data }) => {
          this.$alert('WELCOME ADMIN')
          setTimeout(() => {
            loader.hide()
          }, 1500)
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('updateEmail', '')
          this.$store.commit('updatePassword', '')
          this.$store.commit('updateLogin', true)
          this.$router.push('/')
        })
        .catch(err => {
          this.$store.commit('updateEmail', '')
          this.$store.commit('updatePassword', '')
          this.$alert(err)
        })
    },
    onCancel () {
      this.$alert('Admin Cancelled the loader')
    }
  },
  computed: {
    email: {
      get () {
        return this.$store.state.user.email
      },
      set (value) {
        this.$store.commit('updateEmail', value)
      }
    },
    password: {
      get () {
        return this.$store.state.user.password
      },
      set (value) {
        this.$store.commit('updatePassword', value)
      }
    }
  }
}
</script>

<style>

</style>
