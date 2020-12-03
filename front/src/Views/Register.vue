/* eslint-disable */
<template>
  <div>
    <Header></Header>
    <Footer></Footer>
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm'
export default {
  name: 'Register',
  components: {RegisterForm, Footer, Header}
}
</script>

<style scoped>

</style>
