<!-- is ka used humne menuComponentMasroom.vue me kiya he.iska used hum menu ko hide karne ke lye karte he-->
<script setup>
import { defineModel, onMounted, onUnmounted } from "vue";

const isVisible = defineModel({ default: false }); // ✅ Parent se state le rahe hain....isme hamne ek default false liya he
//defineModel-method ek toh aap manually isVisible ka default value false rakhein:{default:false}
const updateVisibility = () => {
  isVisible.value = window.innerWidth >=1400;
};

onMounted(() => {
  window.addEventListener("resize", updateVisibility);
  updateVisibility();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateVisibility);
});
</script>

<template>
  <div>
    <!--is se aap debug check kar sakte he
    <p>Menu Visible: {{ isVisible }}</p> <! -- ✅ Debugging ke liye -- >
-->
  </div>
</template>
