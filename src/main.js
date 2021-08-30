import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import httpOk from './common/httpOk'
import rsaEncrypt from './common/rsa'

const app = createApp(App)

app.use(router)

app.provide('httpOk', httpOk)
app.provide('rsaEncrypt', rsaEncrypt)

app.mount('#app')