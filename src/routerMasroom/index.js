import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue"; // Home component
import headerMasroom from "@/components/headerMasroom/headerMasroom.vue";


const routes = [
  { path: "/", component: headerMasroom },
  { path: "/news", component: Home }, // Route for news
  { path: "/news/business", component: Home }, // Example sub-route
  { path: "/market", component: Home }, // Add other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
