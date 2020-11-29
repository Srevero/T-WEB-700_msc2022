<template>
  <v-card class="loginCard">
    <h1> Login </h1>
    <v-text-field
      type="username"
      placeholder="username"
      class="textFieldLogin"
      solo
      dense
    ></v-text-field>
    <v-text-field
      type="email"
      placeholder="email"
      class="textFieldLogin"
      solo
      dense
    ></v-text-field>
    <v-text-field
      type="password"
      placeholder="password"
      class="textFieldLogin"
      solo
      dense
    ></v-text-field>
    <v-btn
      elevation="2"
      class="btnLogin"
    > Login </v-btn>
    <v-btn
      text
    ><router-link :to="'/register'" class="btnToRegister">
      Register ?
    </router-link></v-btn>
  </v-card>

</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
  .loginCard {
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

  .textFieldLogin {
    margin: 20px;
    background-color: #F9C81D;
  }

  .btnLogin {
    position: absolute;
    margin-bottom: 60px;
    left: 40%;
  }

  .btnToRegister {
    text-decoration: none;
    color: white;
    margin: 30px;
  }
</style>
