<template>
  <v-card class="registerCard">
    <h1> Register </h1>
    <v-text-field
      type="username"
      placeholder="username"
      class="textFieldRegister"
      solo
      dense
    ></v-text-field>
    <v-text-field
      type="email"
      placeholder="email"
      class="textFieldRegister"
      solo
      dense
    ></v-text-field>
    <v-text-field
      type="password"
      placeholder="password"
      class="textFieldRegister"
      solo
      dense
    ></v-text-field>
    <v-text-field
      type="password"
      placeholder="confirm password"
      class="textFieldRegister"
      solo
      dense
    ></v-text-field>
    <v-btn
      elevation="2"
      class="btnRegister"
    > Register </v-btn>
    <v-btn
      text
    ><router-link :to="'/login'" class="btnToLogin">
      Login ?
    </router-link></v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style scoped>
  .registerCard {
    background-color: #F9C81D;
    height: 70%;
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    margin-top: 30px;
    text-align: center;
  }

  .textFieldRegister {
    margin: 20px;
    background-color: #F9C81D;
  }

  .btnRegister {
    position: absolute;
    margin-bottom: 40px;
    left: 40%;
  }

  .btnToLogin {
    text-decoration: none;
    color: white;
    margin: 30px;
  }
</style>
