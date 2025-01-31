import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import './assets/variables.css'; 
import router from './router'
import i18n from './i18.js'

createApp(App).use(router).use(i18n).mount('#app')
