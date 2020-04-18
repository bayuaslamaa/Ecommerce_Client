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
      this.$alert('Please login')
    } else {
      this.$store.commit('setImage', '')
      this.$store.commit('updateName', '')
      this.$store.commit('updateImage', '')
      this.$store.commit('updatePrice', '')
      this.$store.commit('updateStock', '')
      this.$store.commit('updateLogin', true)
    }
  }
}
</script>

<style scoped>
button {
  float: left;
}
</style>
