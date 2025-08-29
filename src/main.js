import { createApp } from 'vue'
import Hero from './components/Hero.vue'
import './input.css'

// Mount all Vue components by target selector
document.querySelectorAll('[data-vue-component="Hero"]').forEach((el) => {
  createApp(Hero).mount(el)
})