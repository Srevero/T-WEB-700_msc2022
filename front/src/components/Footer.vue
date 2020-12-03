/* eslint-disable */
<template>
  <v-footer absolute height="70px">
    <v-row>
      <v-btn text style="margin-left: 250px"> Contact us
        <router-link :to="home"></router-link>
      </v-btn>
    </v-row>
    <v-row >
      <router-link :to="'/'" class="btnFooter">
        Epitech Cryptocurrencies Dashboard - {{ new Date().getFullYear() }}
      </router-link>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .btnFooter {
    text-decoration: none;
    color: black;
  }
</style>
