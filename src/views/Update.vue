<template>
  <div class="mt-5">
  <div class="card mb-5 offset-4" style="width:400px">
    <img class="card-img-top" :src="$store.state.image" alt="" style="width:100%">
  </div>
   <UpdateForm/>
   <!-- di ganti addformnya -->
</div>
</template>

<script>
import UpdateForm from '../components/UpdateForm'
export default {
  name: 'Update',
  components: {
    UpdateForm
  },
  created () {
    this.$store.commit('updateLogin', true)
    const id = this.$route.params.id
    this.$store.dispatch('getProduct', id)
      .then(({ data }) => {
        this.$alert(`Update page for product ${data.name} with id ${id} is ready`)
        this.$store.commit('setImage', data.image_url)
        this.$store.commit('updateName', data.name)
        this.$store.commit('updateImage', data.image_url)
        this.$store.commit('updatePrice', data.price)
        this.$store.commit('updateStock', data.stock)
      })
      .catch(err => this.$alert(err))
  }
}
</script>

<style>

</style>
