import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseRadio from '@/components/BaseRadio.vue'


createApp(App)
  .component('BaseInput', BaseInput)
  .component('BaseSelect', BaseSelect)  
  .component('BaseCheckbox', BaseCheckbox)
  .component('BaseRadio', BaseRadio)
  .mount('#app')
