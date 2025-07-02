<script setup>
import { ref } from 'vue';



const menuList=ref([
    {name:'news',showSubMenu:["Business News", "Crop News", "Livestock News", "Machinery News", "Profiles", "Technology News", "Weather News"]},
    {name:'market',showSubMenu:["Tractors", "Harvesters"]},
    { name: "Machinery", showSubMenu: ["Tractors", "Harvesters"] },
    { name: "Crops", showSubMenu: ["Wheat", "Rice"] },
    { name: "Farm Management", showSubMenu: ["Wheat", "Rice"] },
    { name: "Livestock", showSubMenu: ["Cattle", "Poultry"] },
    
    
])
    //Menu Data Create Karna
    const showSubMenu=ref(false);
    const activeMenu=ref(null);

// Submenu show/hide karne ke liye function
const toggleSubmenu=(item)=>{
    if(item.showSubMenu.length){
        activeMenu.value=item;
        showSubMenu.value=true;
        //for debug check console.log(activeMenu.value); // Debug activeMenu
        console.log("problem check",activeMenu.value);
    }
};


//<!-- Submenu Page -->
const goBack=()=>{
    activeMenu.value=null;
    showSubMenu.value=false;

}

//import src\components\headerMasroom\searchMasroom.vue
import searchMasroom from '../searchMasroom.vue';
</script>

<template>
    <div  class="sidebar" :style="{}">
        <div class="sidebar1">
        <!--Search Box-->
        <div class="search-label"><label for="search-input-label">Search</label></div>
        <div class="search-box">
            <input id="search-input-label" type="text" placeholder="what are you looking for?" />
            <button class=" btn">🔍</button>

        </div>

        <!-- main menu-->
         <ul v-if="!showSubMenu" class="main-menu">
            <li v-for=" item in menuList" :key="item.name">
            <div @click="toggleSubmenu(item)">
                <span class="menu-title">{{ item.name }}</span>
                <span v-if="item.showSubMenu.length>0" class='arrow'>></span>
            </div>
        </li>
    </ul>
    
    <!-- subMenu-page when showSubMenu-true ho-->
     <div v-if="showSubMenu" class="submenu">
        <div>
            <span @click="goBack">◀</span>
            <span >{{ activeMenu?.name }}</span>
        </div>
        <ul>
            <li v-for="sub in activeMenu?.showSubMenu" :key="sub">{{ sub }}</li>
            <li>All</li>
        </ul>
     </div> 
    </div>
</div>
</template>

<style scoped>
.sidebar{
border:2px sold green;
width:1270px;
background-color:white;
border-top: 1px solid green;
margin-top: 20px;
margin-left: -32px;

}

.sidebar1 {
    width: 490px; /* Sidebar ki width */
 height: 400px; /* Fixed height tak hi content show hoga */
    overflow-y: scroll; /* Scrollbar enable karega */
/*    border: 2px solid green; */
/*height: auto; /* Height automatically content ke hisaab se adjust hogi */
}

/* Custom Scrollbar Styling */
.sidebar1::-webkit-scrollbar {
    width: 8px; /* Scrollbar ki width */
}

.sidebar1::-webkit-scrollbar-thumb {
    background: gray; /* Scrollbar ka color */
    border-radius: 4px;
}

.sidebar1::-webkit-scrollbar-track {
    background: #f1f1f1; /* Scrollbar background color */
}

.sidebar1:hover {
    cursor: pointer;
}









.search-box{
  width:460px;
  height: 52px;
  margin-left: 13px;  
  margin-top:50px;
  border:1px solid black;
  
  /*button ko last me end kare */
  display: flex; /* Container ko flex container banaye */
  justify-content: flex-end;/* Button ko container ke end mein align kare */
  border-radius: 5px;        /* Rounded corners */
  border: 3px solid #ccc;    /* Border for the input */
}


.btn{
    background-color: brown;
    width: 50px;
    height:47px;
    border-radius:0px ;    
}
.btn:hover{
    background-color: #45a049; /* Darker green on hover */
    transition:transform 0.3s ease-in-out;/* Apply transition on transform property */
}
.btn:hover {
  transform: scale(1.1); /* Scale the button on hover */
  background-color: #45a049; /* Darker green on hover */
}
.search-box input{
    font-size: 16px;           /* Font size for the input */
    padding-left: 45px;
    width:100%;
    border:none;
}

.search-label{
    font-weight: bold;
    transform: translateY(40px);
    margin-left:12px;
}
.main-menu{
   /*<!-- border:2px solid;-->*/
    margin-top: 20px;
    list-style: none;
    max-width: 483px;

}
.main-menu li{
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    padding-top:15px ;
    transform: translateX(-18px);
    color:black;
    font-weight: bold;
    font-size: 15px;
}
.main-menu li div {
    display: flex;/*Kaam: Yeh div ke andar wale elements ko flex container banata hai, jisse wo ek line me aa jate hain...............Matlab: Isse span.menu-title aur span.arrow ek hi line me align ho jayenge.*/
    justify-content: space-between;/*Kaam: Yeh left aur right ke elements ke beech me jitna ho sake utna gap daalta hai......Matlab: Isse span.menu-title aur span.arrow ek hi line me align ho jayenge.*/
    align-items: center;/* Yeh elements ko vertically center karega */
    /*Matlab: Agar menu-title aur arrow ke height me difference hai, to yeh dono ko same vertical line me rakhne ki koshish karega.*/ 
    padding-right: -10px; /* Thoda gap dene ke liye */
}

.arrow{
color:red;
}
.submenu{
/* border:1px solid; */
margin-top: 40px;
}
.submenu div{
    margin-left: 5px;
    margin-bottom: 10px;;
    padding: 2px;
    font-size: 20px;
    color: red;
    font-weight: bold;
}
.submenu ul li{
    color:black;
    font-weight: bold;
    list-style: none;
    margin-top: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
    transition: background 4s ease-out;
}
.submenu ul li:hover{
background: yellow;
}
</style>