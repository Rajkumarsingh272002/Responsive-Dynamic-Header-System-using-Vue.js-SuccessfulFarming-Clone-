<script setup>
import {watch, defineProps,ref, defineAsyncComponent, computed } from "vue";
const menuComponentMasroom =defineAsyncComponent(()=>import('@/components/headerMasroom/dynamicMenuMasroom/menuComponentMasroom.vue'));
const searchMasroom = defineAsyncComponent(() => import('@/components/headerMasroom/searchMasroom.vue'));// Search component lazy load kar rahe hain
import { RouterLink } from "vue-router";






const dropdown = ref(true);
const NewsLetters = ref(true);

const toggleElements = () => {
  dropdown.value = !dropdown.value;
  NewsLetters.value = !NewsLetters.value;
};


//this used for width-exten using emit
//yaha emit-event ka used kiya gaya he from-child(searchMasroom.vue),child me humne create kiya he
// ✅ Search Active State ,(width: isSearchActive ? '' : '3500px',})
//<searchMasroom @toggleElements="toggleElements" @extendsDiv="divextend" @borderHIde="toggleBorder"/>
const isSearchActive = ref(false);
// ✅ Function to toggle search box
const divextend = () => {
  isSearchActive.value = !isSearchActive.value;
};



//border hide(isme emit-event) ka used kiya gaya he, jab search-button par clik kare to jo border bana he element ke andar ho hide ho jaye.
//<searchMasroom @toggleElements="toggleElements" @extendsDiv="divextend" @borderHIde="toggleBorder"/>
function toggleBorder() {
    const element = document.querySelector('.marginSet');
    element.classList.toggle('hide-border');
  }
  
  

//search,drop,newsleter hide karna jab screen chhota ho ...mobile friendly banana
import HideSearchDropNews from "./dynamicMenuMasroom/hideSearchDropNews.vue";
// ✅ Define reactive state (ye hideMenu se update hoga)
const isVisible2 = ref(true);//hideMenu.vue me definemodel() ke through () const isVisible) me jayega



//show mobile menu,<!--show mobile menu when screen size <=1024-->
import mobilemenu from "./mobileMenu/mobilemenu.vue";


//we hide/show 'susbscriber' when we clik on humberger menu
const issubscribleVisuable=ref(true);//🔹 Subscribe by default visible hoga//<li v-if="issubscribleVisuable" :class='{"subscribe1": !isVisible2,}' class="subscribe" ><RouterLink >SUBSCRIBE</RouterLink></li>
// 🔹 Hamburger click hone par subscribe hide karne ka function
const handleMenutoggle=(isopen)=>{
issubscribleVisuable.value=!isopen;
}

</script>
<template>
    <div>
        <!-- using here class of bootstrap , we used grid system for making footer -->
        <!--<div class="container text-center">-->
            <div  class="container --bs-danger" :style="{}"><!--here bootstrap class-->
                <div class="row flexContainer" ><!--here bootstrap class-->
                    <div class="col-6 " :style="{display:'flex',alignItems: 'baseline',}">

                      <!--show mobile menu when screen size <=1024--><!--is ke alwa emit(mobilemenu.vue) me use kiya he  yaha par 'subscribe' ko hide/show karne ke liye-->
                      <div v-if="!isVisible2"  :style="{transform:'translatex(-54px) translatey(11px)',position: 'fixed'}"><mobilemenu @toggleSubscribe="handleMenutoggle"/></div>

                         <img  class src="@/SF.png" :style="{width:'23px',height:'23px'}"/>
                         <div>
                             <span class="id" :style="{ marginLeft: '6px',fontSize:'35px', fontFamily: 'cursive', fontWeight: '100',}">Successful</span>
                            <span :style="{ marginLeft: '2px',fontSize:'35px',fontFamily: 'cursive',fontWeight:'bold'}">Farming</span>
                        </div>
                     </div>
                     
                     <!--<div class="col-6 text-end">.....(text-end) joki class he isse text ko end me kar sakte he-->
                      
                        <div class="col-6" :style="{}">
                          <!-- yaha v-model ka use kiya taki search,drop,newsletter hide ho jaye ,hideSearchDropNews.vue me code likha he hide ka -->
                          <HideSearchDropNews v-model="isVisible2"/><HideSearchDropNews if="isVisible2"/>
                            <div v-if="isVisible2" class="row " :style="{display:'flex',alignItems:'baseline',marginTop:'10px',}">
                                <div  class="col-md-4"  :style="{paddingLeft:'240px',transform: 'translateY(4px)',width: isSearchActive ? '' : '3500px',}">
                                    <searchMasroom @toggleElements="toggleElements" @extendsDiv="divextend" @borderHIde="toggleBorder"/>
                                </div>
                            
                                <div :class="{ 'hide-border': !dropdown }" class='col-4 text-end marginSet' :style="{transform: 'translateY(1px)',marginLeft:'-50px',width:'200px',marginLeft:'-290px',}">
                                    <div class="dropdown" v-if="dropdown"><!-- yaha hum emit event ka used kiya hu, taki hide ho jaye-->
                                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown button
                                            </button>
                                            <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                    </div>    
                                </div>

                                <div v-if='NewsLetters' class='col-4 text-end marginSet1' :style="{transform: 'translateY(4px)',fontWeight:'bold',width:'10px',marginLeft:'-15px'}">
                                    <h6><a href="https://google.com" target="_blank" class="custom-link ">NewsLetters</a></h6>
                                </div>
                            </div>
                        </div>
                     </div>
                    
                     <!-- create menu here-->
                      <div class="row" :style="{}">
                       <div class='col-9' :style="{transform: 'translatex(-24px)',marginTop:'20px',}">
                         <menuComponentMasroom/>
                      </div>                      
                      <div  class='col-3 text-end ' :style="{transform: 'translatey(30px)',}">
                        <!-- yaha humne humber button par click hone par subscribe hide/show hoga ..
                         v-if="issubscribleVisuable"....hum emit ke liye method(const handleMenutoggle) pass kiya he by(<mobilemenu @toggleSubscribe="handleMenutoggle"/>) 
                         <mobilemenu @toggleSubscribe="handleMenutoggle"/>===>jaha image upar he waha aap dekh sakte he.
                         -->
                        <li v-if="issubscribleVisuable" :class='{"subscribe1": !isVisible2,}' class="subscribe" ><RouterLink >SUBSCRIBE</RouterLink></li>
                        <!--<li :class='{"subscribe1": !isVisible2,}' class="subscribe" :style='{!isVisible?transform:translatex(-200px) !important:none}'>-->
                      </div>
                    </div>


                    </div><!--yah container ke closing div he-->
    </div><!-- yah start ka div he-->        
</template>
<style scoped>
.debug-border {
  border: 2px solid red !important;
}
.flexContainer{
    display: flex;
   margin-left: 30px;
   margin-top: 10px;
}
.custom-link{
    color:black;
    text-decoration: none;/* Underline hatane ke liye */
    font-weight: 400; /* Default weight */
    transition: font-weight 0.2s ease-in-out; /* Smooth effect */
    
}
.custom-link:hover{
    color: black;/* Hover par bhi black hi rahega */
    text-decoration: underline; /* Sirf hover par underline aayega */
    font-weight: 400; /* Default weight */
    transition: font-weight 0.2s ease-in-out; /* Smooth effect */
}

.marginSet {
  position: relative;
}
.marginSet.hide-border::before {
  opacity: 0; /* Hide the border ,,,,,<div :class="{ 'hide-border': !dropdown }" uppar aap dekhe sakte he*/
}
.marginSet1 {
  position: relative;
}
/*border create karne ke liye*/ 
.marginSet::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 15px; /* Border ko niche shift karega */
  height: 15px;  /* 🔹 Height Badhai Taaki Border Thoda Lamba Ho */
  width: 1px;  /* 🔹 Width 2px Kar Di Taaki Border Bold Dikhe */
  background-color: black;  /* 🔹 Dark Black Color Use Kiya */
}
/*border create karne ke liye*/ 
.marginSet1::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px; /* Border ko niche shift karega */
  height: 15px; /* Total height kam karega */
  width: 1px;
  background-color: black;
}
.container {
  border-bottom: 2px solid #ddd; /* Light grey border */
  box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.2); /* Shadow effect */
  padding-bottom: 25px;
  
}
/* subscribe*/ 
.subscribe{
list-style: none;
}
.subscribe a{
text-decoration: none;
color:black;
font-size: 14px;
font-weight: bold;
list-style: none;
}
.subscribe:hover{
    text-decoration: underline; /* Sirf hover par underline aayega */
}
.subscribe1{/*important he samajhna ki "subscribe" kam karega matlab 'subscribe' move hoga but text par koi effect nahi padega*/
  
  transform:translatex(-200px) !important;
}
.subscribe1 a{/*important he samajhna ki "subscribe" kam nahi karega but "subscribe* me text par effect padega*/
text-decoration: none;
color:black;
font-size: 12px;
font-weight: bold;
list-style: none;
}

</style>