import { createApp } from 'vue'
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import CascadeSelect from 'primevue/cascadeselect';

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component('Toast', Toast);
app.component('Button', Button);
app.component('ProgressSpinner', ProgressSpinner);
app.component('InputText', InputText);
app.component('Card', Card);
app.component('Dialog', Dialog);
app.component('CascadeSelect', CascadeSelect);

app.mount('#app');