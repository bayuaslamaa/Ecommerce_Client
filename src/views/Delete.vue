<template>
<div class="offset-4 mt-5">
  <div class="card" style="width:400px">
    <img class="card-img-top" :src="$store.state.image" alt="" style="width:100%">
    <div class="card-body">
      <h4 class="card-title"><b> DELETE</b></h4>
      <p class="card-text"><b> Product name:</b> {{$store.state.product.name}}</p>
      <p class="card-text"><b>Price:</b>{{updateCurrency(price)}}</p>
      <p class="card-text">Are you sure want to delete this?</p>
      <button @click="deleteProduct">Delete</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Delete',
  methods: {
    deleteProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          this.$alert(`success deleting with id ${id}`)
          this.$router.push('/')
        })
    },
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
    price: {
      get () {
        return this.$store.state.product.price
      }
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('getProduct', id)
      .then(({ data }) => {
        this.$alert('Make sure you want to delete this product')
        this.$store.commit('setImage', data.image_url)
        this.$store.commit('updateName', data.name)
        this.$store.commit('updatePrice', data.price)
      })
      .catch(err => this.$alert(err))
  }
}
</script>

<style>

</style>
