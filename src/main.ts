import { createApp } from 'vue'
import App from './App.vue'
import './assets/sass/index.sass'
import router from './router' // <---

createApp(App).use(router).mount('#app')
