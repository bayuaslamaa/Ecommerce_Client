import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      email: '',
      password: ''
    },
    isLogin: false,
    products: [],
    image: '',
    price: '',
    product: {
      name: '',
      image_url: '',
      price: 2000,
      stock: 0
    }
  },
  mutations: {
    updateEmail (state, email) {
      state.user.email = email
    },
    updatePassword (state, password) {
      state.user.password = password
    },
    updateProducts (state, products) {
      state.products = products
    },
    updateLogin (state, status) {
      state.isLogin = status
    },
    setImage (state, imageUrl) {
      state.image = imageUrl
    },
    updateName (state, name) {
      state.product.name = name
    },
    updateImage (state, image) {
      state.product.image_url = image
    },
    updatePrice (state, price) {
      state.product.price = price
    },
    updateStock (state, stock) {
      state.product.stock = stock
    }
  },
  actions: {
    login () {
      return axios.post('https://protected-thicket-20896.herokuapp.com/login', {
        email: this.state.user.email,
        password: this.state.user.password
      })
    },
    fetchProducts () {
      return axios({
        url: 'https://protected-thicket-20896.herokuapp.com/products',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addProduct () {
      return axios({
        url: 'https://protected-thicket-20896.herokuapp.com/products',
        method: 'post',
        data: this.state.product,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    getProduct (context, payload) {
      const id = payload
      return axios({
        url: `https://protected-thicket-20896.herokuapp.com/products/${id}`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteProduct (context, payload) {
      const id = payload
      return axios({
        url: `https://protected-thicket-20896.herokuapp.com/products/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    updateProduct (context, payload) {
      const id = payload
      return axios({
        url: `https://protected-thicket-20896.herokuapp.com/products/${id}`,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: this.state.product
      })
    }
  }
})

export default store
