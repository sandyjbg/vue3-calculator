import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import hellobitch from './components/hellobitch.vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('hellobitch', hellobitch)

app.mount('#app')
