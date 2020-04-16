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
    products: []
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
    }
  },
  actions: {
    login ({ commit }) {
      return axios.post('http://localhost:3000/login', {
        email: this.state.user.email,
        password: this.state.user.password
      })
    },
    fetchProducts ({ commit }) {
      console.log('hi')
      return axios({
        url: 'http://localhost:3000/products',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  }
})

export default store
