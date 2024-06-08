import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

const app = createApp(App);

// Set base URL for Axios requests
axios.defaults.baseURL = 'http://localhost:8000'; // Replace with your FastAPI server URL

// Make axios available globally through app.config.globalProperties
app.config.globalProperties.$http = axios;

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
