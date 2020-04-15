<template>
  <div class="home">
    <button @click="logout">Logout</button>
    <ProductTable />
    <p>{{products}}</p>
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
  computed: {
    products: {
      get () {
        return this.$store.state.products
      },
      set (value) {
        this.$store.commit('updateProducts', value)
      }
    }
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
