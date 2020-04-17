<template>
  <div class="mt-5">
      <h1>Add Product Form</h1>
      <AddForm/>
<div class="input-group col-4 offset-4">
        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
          </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile01"
        aria-describedby="inputGroupFileAddon01">
         <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
       </div>
       </div>
  </div>
</template>

<script>
import AddForm from '../components/AddForm.vue'
export default {
  name: 'AddProduct',
  components: {
    AddForm
  },
  created () {
    this.$store.commit('updateLogin', true)
  }
}
</script>

<style>

</style>
