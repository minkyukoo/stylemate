import { createApp } from 'vue';
import App from './App.vue';
import router from './routing/router';
import { createHead } from '@vueuse/head';
import './styles/css/tailwind.css'

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount('#app');
