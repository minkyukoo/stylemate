import { createApp } from 'vue';
import App from './App.vue';
import router from './routing/router';
// import VueHead from 'vue-head';
import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();

app.use(router);
// app.use(VueHead);
app.use(head);
app.mount('#app');
