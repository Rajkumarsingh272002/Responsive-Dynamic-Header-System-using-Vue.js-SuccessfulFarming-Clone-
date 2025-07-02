<script setup>
  import { ref ,nextTick} from "vue";
 
//using Define-Props
//iska kahi used nahi kiya he kewal ankari ke liye 
const props=defineProps({//parent component se child component me data pass karne ke lye kiya jata
  extendDiv:{//this is used inot
    type:String,
  reqiurd:true
}})



// Search box visibility toggle
const isSearchVisible = ref(false);
  // Input reference for focus
const searchInput = ref(null);
  // Emit function define karein, iska use footerMasroom.vue me kiya he
  const emit = defineEmits(["toggleElements",'extendsDiv','borderHIde']);
//child component se parent component me event send karne ke liye kiya jata he .jab child compoent me event(click) hota he to child-component us event(click) ko parent-component tak send kar deta he
 
// Function to toggle search box and set focus
const toggleSearch = async () => {
  isSearchVisible.value = !isSearchVisible.value;
  
  if (isSearchVisible.value) {
    await nextTick(); // DOM update ke baad execute karega
    searchInput.value?.focus(); // Focus karega
  }

  emit("toggleElements", "extendsDiv", "borderHIde"); // Event emit karein
};


//yaha kewal check karne ke liye bad me hata dena isko
//serach result when input 
// Search query and results
const searchQuery = ref("");
const searchResults = ref([]);

// Sample data to search through
const items = [
  "Mushroom Soup",
  "Grilled Mushroom",
  "Mushroom Pizza",
  "Stuffed Mushroom",
  "Mushroom Pasta",
];
// Function to perform search
const performSearch = () => {
  if (searchQuery.value.trim() === "") {
    searchResults.value = []; // Clear results if search query is empty
    return;
  }

  // Filter items based on search query
  searchResults.value = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};
  </script>




<!-- this search ka used karge footerMasroom.vue-->
<template>
    <div class="search-container">
      <!-- Search Icon Button ,,,jab yaha click karege to (v-if="isSearchVisible")-true hoga <input>-tag dikhega-->
      <button v-if="!isSearchVisible" @click="toggleSearch" class="search-icon">
        🔍
      </button>
  
      <!-- Search Box with Close Button -->
      <label for="search" :style="{fontWeight:'bold'}">Search</label>
      <div v-if="isSearchVisible" class="search-box">
        <input 
        type="text" 
        placeholder="What are you looking for?" 
        :style="{width:'250px'}"
         ref="searchInput" 
         v-model="searchQuery" 
         />
        <button @click="performSearch" class="search-btn"><!-- iska use koi chij search me enter karege to match karega Array-item se-->
          🔍
        </button>
        <button @click="toggleSearch" class="close-btn"><!-- search button ko close karne ke liye-->
          ✖
        </button>
      </div>
    </div>


    <!-- Display Search Results -->
    <div v-if="searchResults.length > 0" class="search-results">
      <h3>Search Results:</h3>
      <ul>
        <li v-for="(result, index) in searchResults" :key="index">{{ result }}</li>
      </ul>
    </div>
  
  </template>
  
  
  
  <style scoped>
  .search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    
  }
  
  /* Search Button */
  .search-icon {
    font-size: 18px;
    cursor: pointer;
    background: none;
    border: none;
  }
  
  /* Search Box */
  .search-box {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    
  }
  
/* 🔹 Input Field Ko Full Width Kar Diya */
.full-width-input {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
}
  .search-box input {
    padding: 8px;
    border: none;
    flex-grow: 1;
    font-size: 16px;
    outline: none;
  }
  
  /* Search Button */
  .search-btn {
    background: #a31616;
    color: white;
    border: none;
    padding: 8px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, transform 0.2s ease-in-out; /* Smooth effect */
}

.search-btn:hover {
    background: #800f0f; /* Slightly darker red */
    transform: scale(1.05); /* Slight zoom effect */
}
  
  /* Close Button */
  .close-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 8px;
  }
  
  </style>
  