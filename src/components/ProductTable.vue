<template>
  <div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
        </tr>
      </thead>
      <tbody  v-for="product in products" :key="product.id">
        <tr>
          <th scope="row">{{product.id}}</th>
          <td>{{product.name}}</td>
          <td>Rp. {{product.price}}</td>
          <td>{{product.stock}}</td>
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
