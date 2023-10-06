import './assets/main.css'
// import { MotionPlugin } from '@vueuse/motion'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// toast plug in
import { toast } from 'vue3-toastify'
// import { defineComponent } from 'vue';
// import 'vue3-toastify/dist/index.css'
// import ToastPlugin from 'vue-toast-notification'
// import 'vue-toast-notification/dist/theme-sugar.css'

// vee validate plugin
import VeeValidatePlugin from './utils/validation'

AOS.init()
const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Antd).mount('#app')
// app.use(Antd)
// app.use(VueAxios, axios)
// app.use(MotionPlugin)
// app.use(ToastPlugin)

app.mount('#app')
//

app.use(VeeValidatePlugin)

app.config.globalProperties.$scrollToTop = () => window.scrollTo(0, 0)
