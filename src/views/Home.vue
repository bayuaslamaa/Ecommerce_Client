<template>
  <div class="home">
    <button @click="addProduct">Add</button>
    <ProductTable />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductTable from '../components/ProductTable.vue'
export default {
  name: 'Home',
  methods: {
    addProduct () {
      this.$router.push('/add')
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
