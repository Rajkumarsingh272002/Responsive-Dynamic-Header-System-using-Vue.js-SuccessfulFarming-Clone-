<script setup>
import { ref } from 'vue';


//we create emit bcoz we hide/show "subscribe" of "headerMasroom.vue" when we used 
const emit=defineEmits(['toggleSubscribe']);
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  emit('toggleSubscribe',isOpen.value);// 🔹 Parent ko notify karega
};



//we import here for sidebar menow
import sidebarMenu from './sidebarMenu.vue';

</script>

<template>
  <!--<p>Click on the Menu Icon to toggle navigation:</p>-->
  <div class="hamburger" @click="toggleMenu">
    <div :class="{'bar': true, 'bar1': true, 'change': isOpen}"></div>
    <div :class="{'bar': true, 'bar2': true, 'change': isOpen}"></div>
    <div :class="{'bar': true, 'bar3': true, 'change': isOpen}"></div>
  </div>

  <div v-if="isOpen">
    <ul>
      <p><sidebarMenu/></p>
      <!--
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
  -->

    </ul>
  </div>
</template>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
}

.bar {
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change.bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

.change.bar2 {
  opacity: 0;
}

.change.bar3 {
  transform: translate(0, -11px) rotate(45deg);
}
</style>
