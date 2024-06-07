import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
//.component() 전역 컴포넌트 등록 (임포트후 넣어주면 전역에서 사용가능)
.mount('#app')
