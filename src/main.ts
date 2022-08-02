import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 暂时完整引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import moment from 'moment'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
// 全局挂载
app.config.globalProperties.$moment = moment
app.mount('#app')
