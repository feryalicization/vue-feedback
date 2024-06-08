import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
  })
  


const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8000'; 

app.config.globalProperties.$http = axios;

app.use(router);
app.use(vuetify);

app.mount('#app');
