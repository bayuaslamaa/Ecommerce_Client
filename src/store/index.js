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
    products: [],
    access_token: localStorage.access_token
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
      axios({
        url: 'http://localhost:3000/products',
        method: 'get',
        headers: {
          access_token: this.state.access_token
        }
      }).then(({ data }) => {
        commit('updateProducts', data)
      }).err(err => console.log(err))
    }
  }
})

export default store
