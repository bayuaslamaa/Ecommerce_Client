<template>
  <div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody  v-for="product in products" :key="product.id">
        <tr>
          <th scope="row">{{product.id}}</th>
          <td>{{product.name}}</td>
          <td>{{updateCurrency(product.price)}}</td>
          <td>{{product.stock}}</td>
          <th><router-link :to="`/delete/${product.id}`">Delete</router-link> |
          <router-link :to="`/update/${product.id}`">Update</router-link></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProductTable',
  created () {
    if (localStorage.access_token) {
      this.$store
        .dispatch('fetchProducts')
        .then(({ data }) => {
          const { products } = data
          this.$store.commit('updateProducts', products)
        })
        .catch(err => console.log(err))
    }
  },
  methods: {
    updateCurrency (price) {
      const formatter = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2
      })
      return formatter.format(price)
    }
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
  }
}
</script>

<style>
</style>
