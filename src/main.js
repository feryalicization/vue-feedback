import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8000'; 

app.config.globalProperties.$http = axios;

app.use(router);
app.use(vuetify);

app.mount('#app');
