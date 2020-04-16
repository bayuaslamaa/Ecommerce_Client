<template>
  <div class="home">
    <button @click="logout">Logout</button>
    <ProductTable />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductTable from '../components/ProductTable.vue'
export default {
  name: 'Home',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  components: {
    ProductTable
  },
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
button {
  float: left;
}
</style>
