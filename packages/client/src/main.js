import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'


const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component('Toast', Toast);
app.component('Button', Button);
app.component('ProgressSpinner', ProgressSpinner);

app.mount('#app');