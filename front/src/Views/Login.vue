<template>
  <div>
    <Header></Header>
    <Footer></Footer>
    <p> Je suis le login </p>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: 'Login',
  components: {Footer, Header}
}
</script>

<style scoped>

</style>
