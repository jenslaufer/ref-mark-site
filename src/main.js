import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './style.css'


createApp(App)
    .use(router)
    .use(createHead())
    .mount('#app')