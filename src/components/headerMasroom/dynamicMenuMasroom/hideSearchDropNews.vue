<!-- is ka used humne menuComponentMasroom.vue me kiya he. isse hum search/dropdown/newsletter ko windows screen ke hisab se hide/show kar sakte he-->
<script setup>
import { defineModel, onMounted, onUnmounted } from "vue";

const isVisible = defineModel(); // ✅ Parent se state le rahe hain

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
