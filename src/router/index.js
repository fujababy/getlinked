import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Contact from '../views/Contact.vue'
// import FaqsComponent from '../components/FaqsComponent'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
    // {
    //   path: '/FaqsComponent',
    //   name: 'FaqsComponent',
    //   component: FaqsComponent
    // }
  ]
})

export default router
