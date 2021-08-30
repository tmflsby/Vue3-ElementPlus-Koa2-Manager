import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import api from './api'
import request from './utils/request'
import storage from './utils/storage'
import 'element-plus/lib/theme-chalk/index.css'

console.log(import.meta.env)

const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$api = api
app.config.globalProperties.$storage = storage
app.use(router)
app.use(ElementPlus)
app.mount('#app')
console.log(app)
