import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import httpOk from './common/httpOk'

const app = createApp(App)

app.use(router)

app.provide('httpOk', httpOk)

app.mount('#app')