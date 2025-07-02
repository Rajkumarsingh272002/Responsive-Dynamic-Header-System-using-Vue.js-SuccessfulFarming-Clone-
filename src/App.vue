<script setup>
import { RouterView ,RouterLink} from 'vue-router'; // Import RouterView
</script>

<template>
  <!-- for making navigation using <nav>-with-:to-->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <RouterLink to="/posts">Posts</routerLink>
    </nav>
  <RouterView />  <!-- This will render the correct component based on the route -->
</template>

<style scoped>
/* Your styles here */
nav{
  width: 100%;
  font-size: 24;
  border-bottom: 1px solid red;
}
nav a{
  border-radius:5px ;
  margin: 10px;
  display:inline-block ;
  padding: 5px 10px;
  text-decoration: none;
}
nav a.router-link-active{
  background-color:coral;
  color:white;

}
</style>
