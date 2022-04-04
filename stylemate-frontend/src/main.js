import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { IonicVue } from '@ionic/vue';
import VueDaumPostcode from 'vue-daum-postcode'
// import Vue from 'vue';

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


import VueSweetalert2 from 'vue-sweetalert2';
import VueNextSelect from 'vue-next-select';
import "vue-next-select/dist/index.css";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
/* Theme variables */
import './theme/variables.css';
import './styles/css/main.css';
import './styles/scss/style.scss';


// axios.defaults.baseURL = 'https://elsa.beta.mediance.co.kr';
axios.defaults.baseURL = 'https://elsa.beta.mediance.co.kr';
// axios.defaults.headers = {
//     // source: 'dvcon',
//     // apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
//     token: localStorage.getItem('token'),
// };

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VueAxios, axios)
  .use(VueLoading)
  .use(VueDaumPostcode)
  .use(VueSweetalert2)
  .component('vue-select', VueNextSelect);
router.isReady().then(() => {
  app.mount('#app');
});
