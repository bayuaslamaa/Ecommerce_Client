import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/AccessPage.vue'
import Delete from '../views/Delete.vue'
import AddProduct from '../views/AddProduct.vue'
import Update from '../views/Update.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/delete/:id',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
