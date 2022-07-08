import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'amfe-flexible'
import 'vant/lib/index.css'
import '@/assets/iconfont/icon.css'
import '@/assets/iconfont/iconfont'

createApp(App).use(store).use(router).use(Vant).mount('#app')
