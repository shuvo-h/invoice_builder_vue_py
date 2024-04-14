import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import root_routes from "./routes/root_router"



const app = createApp(App)
app.use(root_routes)
app.mount('#app')
