import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './style.css';

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.mount('#app');
