import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "startbootstrap-sb-admin/dist/css/styles.css"
import "simple-datatables/dist/style.css"
createApp(App).use(store).use(router).mount('#app')
