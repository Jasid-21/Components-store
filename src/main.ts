import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight);

const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(router);
app.mount('#app');
