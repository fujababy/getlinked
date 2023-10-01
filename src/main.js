import './assets/main.css'
// import { MotionPlugin } from '@vueuse/motion'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Antd).mount('#app')
// app.use(Antd)
// app.use(VueAxios, axios)
// app.use(MotionPlugin)
app.mount('#app')
