/* eslint-disable */
<template>
  <div id="app">
      <v-toolbar dense fixed app height="70px">
        <router-link :to="'/'" class="btnHeader">
          <v-img
            lazy-src="https://image.winudf.com/v2/image1/bmV0LmRld2VwLmludHJhbmV0ZXBpdGVjaF9pY29uXzE1NjcwMTU4MzhfMDU5/icon.png?w=340&fakeurl=1"
            max-height="50"
            max-width="50"
            src="https://image.winudf.com/v2/image1/bmV0LmRld2VwLmludHJhbmV0ZXBpdGVjaF9pY29uXzE1NjcwMTU4MzhfMDU5/icon.png?w=340&fakeurl=1"
          ></v-img>
        </router-link>
        <v-toolbar-title style="margin-left: 20px">
          <router-link :to="'/'" class="btnHeader"> Epitech Cryptocurrencies Dashboard </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>
            <router-link :to="'/'" class="btnHeader"> Home </router-link>
          </v-btn>
          <v-btn text>
            <router-link :to="'/'" class="btnHeader"> Press </router-link>
          </v-btn>
          <v-btn text>
            <router-link :to="'/register'" class="btnHeader"> Register </router-link>
          </v-btn>
          <v-btn text>
            <v-img
              lazy-src="https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg"
              max-height="50"
              max-width="50"
              src="https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg"
            ></v-img>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .btnHeader {
    text-decoration: none;
    color: black;
  }
</style>
