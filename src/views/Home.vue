<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/login')
    }
  }

}
</script>
