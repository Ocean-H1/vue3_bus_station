import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import moment from 'moment'
import router from './router'
import store from './store'
//引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css'
const app = createApp(App)

app.use(router)
app.use(store)
// 全局挂载
app.config.globalProperties.$moment = moment
app.mount('#app')
