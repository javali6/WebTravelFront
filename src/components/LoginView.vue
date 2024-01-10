<template>
    <div>
      <h2>Login to Your Account</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // placeholder function
        console.log('Login Attempt:', this.username, this.password);
      }
    }
  };
  </script>
  