<template>
  <div id="app">
    <div id="nav" v-if="isLogin">
      <router-link to="/">Home Page</router-link> |
      <router-link to="/login"><button @click="logout">Logout</button></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('updateLogin', false)
      this.$alert('See ya next time!')
    }
  },
  computed: {
    isLogin: {
      get () {
        return this.$store.state.isLogin
      }
    }
  }
}
</script>>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
