import { createWebHistory, createRouter } from "vue-router"
import Home from "./home/Home.vue"
import About from "./about/About.vue"
import TestLayout from "./testboard/TestLayout.vue"
import { test_routes } from "./testboard/test_routes";

const routes = [
    { 
        path: '/', 
        name:"home",
        component: Home
    },
    { 
        path: '/test', 
        name:"testboard",
        component: TestLayout,
        children: [...test_routes]
    },
    { 
        path: '/about', 
        name:"About",
        component: About,
        // props:{userName:"Arman"}
        children:[]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router;