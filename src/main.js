import { createApp } from 'vue';
import App from './App1.vue';
//import router from './router'; // Import the router
import routerMasroom from './routerMasroom/index.js'

const app = createApp(App);

// Use the router in the app
app.use(routerMasroom);

// Mount the app to the DOM
app.mount('#app');
