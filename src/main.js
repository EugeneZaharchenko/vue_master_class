import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import AppDate from './components/AppDate.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.component('AppDate', AppDate)
app.use(router)

app.mount('#app')
