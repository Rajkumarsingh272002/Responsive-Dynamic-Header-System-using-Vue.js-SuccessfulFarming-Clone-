
<!--
import { defineProps } from "vue";
import { RouterLink } from "vue-router"; // Importing RouterLink for navigation

const props = defineProps({
  item: Object, // Accept item prop
  activeMenu: String, // Accept activeMenu prop
});
-->
<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';// Importing RouterLink for navigation

const props=defineProps(
    {
        item1:Object,//Accept item props
        activeMenu:String,//Accept activeManu prop
    }
);
</script>

<template>
<li class="menu-item">
    <router-link :to="item1.path">{{item1.name}}</router-link> <!-- Main Menu Link -->
    <!-- Dropdown Menu for Submenu -->
     <ul v-if="item1.subMenu &&  activeMenu===item1.name" class="dropdown">
         <li v-for="(sub,subIndex) in item1.subMenu" :key="subIndex" >
            <RouterLink :to="sub.path">{{ sub.name }}</RouterLink> <!-- Submenu Links -->
         </li>
     </ul>

</li>
</template>

<style scoped>
.menu-item{
position: relative;
padding: 10px;
}
.menu-item a{/* yaha hamara a-ek anchor tag he but <RouterLink>-hi anchor-tag<a> he */
text-decoration: none;
color: black;
font-weight: bold;
font-size: 14px; /* Text size 16px */
padding-left:10px ;
}
.dropdown li a {/* submenu   */
    color: black; /* Main menu जैसा ही color */
    font-weight: 500; /* हल्का बोल्ड */
}

.menu-item a:hover{
    text-decoration: underline;
}
.dropdown{
    position: absolute;
    top:30px;
    left:0;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 200px;
    border-radius:5px;
    list-style: none;
}
.dropdown li {
  padding-top: 15px;
  padding-bottom:15px ;
  margin-left: -10px;
  padding-left: 10px;
  width:200px;
  transition: background 0.3s ease-in-out;
}
.dropdown li:hover {
    background: #f5f5f5;
  }

</style>
