import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'

createApp(App)
  .component('BaseInput', BaseInput)
  .component('BaseSelect', BaseSelect)  
  .mount('#app')
