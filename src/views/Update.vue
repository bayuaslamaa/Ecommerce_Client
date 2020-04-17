<template>
  <div class="mt-5">
  <div class="card mb-5 offset-4" style="width:400px">
    <img class="card-img-top" :src="$store.state.image" alt="" style="width:100%">
  </div>
   <AddForm @click="updateProduct"/>
   <!-- di ganti addformnya -->
</div>
</template>

<script>
import AddForm from '../components/AddForm.vue'
export default {
  name: 'Update',
  methods: {
    updateProduct () {
      console.log('ho')
    }
  },
  components: {
    AddForm
  },
  computed: {
    name: {
      get () {
        return this.$store.state.product.name
      }
    }
  },
  created () {
    this.$store.commit('updateLogin', true)
    const id = this.$route.params.id
    this.$store.dispatch('getProduct', id)
      .then(({ data }) => {
        console.log(data)
        this.$store.commit('setImage', data.image_url)
        this.$store.commit('updateName', data.name)
        this.$store.commit('updateImage', data.image_url)
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>
