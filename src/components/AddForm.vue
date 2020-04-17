<template>
  <div>
      <div class="card text-center col-4 offset-4">
  <div class="card-header">
    Input
  </div>
  <div class="card-body">
    <h5 class="card-title">Input the product here</h5>
<form @submit.prevent="addProduct">
  <div class="form-group">
    <label>Name</label>
    <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name">
  </div>
  <div class="form-group">
    <label>Image URL</label>
    <input type="text" v-model="image_url" class="form-control" placeholder="paste your URL here">
  </div>
  <div class="form-group">
    <label>Price</label>
    <input type="number" v-model="price" class="form-control" min="2000" step="100" max="25000000" value="2000">
  </div>
   <div class="form-group">
    <label>Stock</label>
    <input type="number" v-model="stock" class="form-control" min="0" step="1" max="250" value="0">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
  <div class="card-footer text-muted">
    Product
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct')
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.product.name
      },
      set (name) {
        return this.$store.commit('updateName', name)
      }
    },
    image_url: {
      get () {
        return this.$store.state.product.image_url
      },
      set (url) {
        return this.$store.commit('updateImage', url)
      }
    },
    price: {
      get () {
        return this.$store.state.product.price
      },
      set (price) {
        return this.$store.commit('updatePrice', Number(price))
      }
    },
    stock: {
      get () {
        return this.$store.state.product.stock
      },
      set (qty) {
        return this.$store.commit('updateStock', Number(qty))
      }
    }
  }
}
</script>

<style>

</style>
