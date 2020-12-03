<template>
  <v-card class="loginCard">
    <h1> Login </h1>
    <v-text-field
      v-model="username"
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
      v-model="password"
      type="password"
      placeholder="password"
      class="textFieldLogin"
      solo
      dense
    ></v-text-field>
    <v-btn
      @click="login"
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
import axios from "axios";

export default {
  name: 'LoginForm',
  data() {
    return {
      username:"",
      password: ""
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3000/users/login',{
        username: this.username,
        password: this.password
      })
        .then(response => {
          localStorage.setItem("JWT",response.data.token);
          console.log(response.data);
          this.$router.push({name: 'Home'});
        })
        // recup token localStorage.getItem("JWT")
        // remove token localStorafe.removeItem("JWT")
        .catch(error => {console.log(error)})
    }
  }
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
