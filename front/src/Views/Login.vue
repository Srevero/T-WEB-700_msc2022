<template>
  <div>
    <Header></Header>
    <Footer></Footer>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
export default {
  name: 'Login',
  components: {LoginForm, Footer, Header}
}
</script>

<style scoped>

</style>
