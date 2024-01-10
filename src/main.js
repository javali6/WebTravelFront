import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Make sure the path to your router file is correct
import './assets/global.css';

createApp(App)
.use(router)
.mount('#app')
