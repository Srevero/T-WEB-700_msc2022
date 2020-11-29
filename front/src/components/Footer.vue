/* eslint-disable */
<template>
  <v-footer absolute height="70px">
    <v-row>
      <v-btn text style="margin-left: 250px"> Contact us
        <router-link :to="home"></router-link>
      </v-btn>
    </v-row>
    <v-row>
      Epitech Cryptocurrencies Dashboard - {{ new Date().getFullYear() }}
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
