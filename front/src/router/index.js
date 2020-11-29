/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Views/Home'
import Register from '../Views/Register'
import Login from '../Views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
