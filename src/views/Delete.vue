<template>
<div class="offset-4 mt-5">
  <div class="card" style="width:400px">
    <img class="card-img-top" :src="$store.state.image" alt="" style="width:100%">
    <div class="card-body">
      <h4 class="card-title"><b> DELETE</b></h4>
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
          console.log('success deleting data')
          this.$router.push('/')
        })
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('getProduct', id)
      .then(({ data }) => {
        console.log(data)
        this.$store.commit('setImage', data.image_url)
      })
  }
}
</script>

<style>

</style>
