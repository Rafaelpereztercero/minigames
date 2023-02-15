import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import { RouterLink } from 'vue-router'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

