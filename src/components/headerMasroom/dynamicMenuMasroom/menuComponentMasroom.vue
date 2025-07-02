<script setup>
import {ref} from 'vue';
import { defineAsyncComponent } from 'vue';
import hideMenu from './hideMenu.vue'; // ✅ Import hideMenu component
// ✅ Define reactive state (ye hideMenu se update hoga)
const isVisible = ref(true);//hideMenu.vue me definemodel() ke through () const isVisible) me jayega


// Lazy loaded component
//const LazyComponent = defineAsyncComponent(() => import('@/components/MyComponent.vue'));
const menuItemMasroom=defineAsyncComponent(()=>
    import( './menuItemMasroom.vue'))
// Menu with submenus
const menuList = ref([
  {
    name: "NEWS",
    path: "/news",
    subMenu: [
      { name: "Business News", path: "/news/business" },
      { name: "Crop News", path: "/news/crop" },
      { name: "Livestock News", path: "/news/livestock" },
      { name: "Machinery News", path: "/news/machinery" },
      { name: "Profiles", path: "/news/profiles" },
      { name: "Technology News", path: "/news/technology" },
      { name: "Weather News", path: "/news/weather" },
    ],
  },
  { name: "MARKET", path: "/market" },
  { name: "MACHIENRY", path: "/machinery" },
  { name: "CROPS", path: "/crops" },
  { name: "FARM MANAGEMENT", path: "/farm-management" },
  { name: "LIVESTOCK", path: "/livestock" },
  { name: "FAMILY", path: "/family" },
  { name: "ABOUT US", path: "/about-us" },
]);




const activeMenu=ref(null);
</script>

<template>
    <div class="menu-container"><!-- yaha 'class="menu-container" ek flexbox-container banayege-->
        <!-- Loop through the menu list and render MenuItem component for each  -->
          <!-- ✅ Pass model to child(hideMenu.vue) -->
    <hideMenu v-model="isVisible" /><!-- ✅ Pass model to child(hideMenu.vue) -->
         <hideMenu v-if="isVisible"/><!--Agar isVisible = true, toh <hideMenu> component render hoga (dikhai dega).....Agar isVisible = false, toh <hideMenu> component destroy ho jayega (hat jayega).-->
          <nav v-if="isVisible">
            <!-- ✅ isVisible ke basis par menu show/hide hoga -->
            <!--<ul v-if="isVisible"  :class="{'menunav':isVisible}">-->
              <ul v-if="isVisible">
                <menuItemMasroom 
                    v-for="(item,index) in menuList" 
                    :key="index"
                    :item1="item"
                    :activeMenu="activeMenu"
                    @mouseover="activeMenu=item.name"
                    @mouseleave="activeMenu=null"
                />
            </ul>
         </nav>
        
    </div>
</template>
<style scoped>
.menu-container{
display: flex;/* Agar ek div ke andar bahut div hote to kam karta, filhal justify-content: center;*/ 
justify-content: center;/* ye tabhi kam karega jab aap display:flex */
}
nav ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap:10px;
    background:white;
    
}
/*
<!--<ul v-if="isVisible"  :class="{'menunav':isVisible}">....yaha upar v-if=visisble me check kare-->
.menunav {
  background-color: red ;
  color: white ;
}
  */

</style>