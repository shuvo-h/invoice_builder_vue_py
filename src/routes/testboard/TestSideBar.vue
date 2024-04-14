<template>
    <nav>
        <div class="brand">
            PURCHYFY
        </div>
        <ul>
            <router-link 
                v-for="navEl in filteredNavRoutes" 
                :key="navEl.name" 
                :class="{'activeNav':isActiveRoute(`/test/${navEl.path}`)}"
                :to="`/test/${navEl.path}`"
            >
                <li>{{navEl.nav_title}}</li>
            </router-link>
        </ul>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute,  } from "vue-router";
import {test_routes} from "./test_routes";

const router = useRoute();

const filteredNavRoutes = computed(()=>{
    return test_routes.filter(el=>el.isNav)
})
const isActiveRoute = (routePath) =>{
    return router.path === routePath;
}
</script>

<style scoped>
.brand{
    text-align: center;
    padding: 1rem 0;
    font-weight: 700;
    font-size: 20px;
    color: yellowgreen;
}
nav{
    position: fixed;
    background-color: #3b3333;
    min-height: 100vh;
    width: 150px;
    padding: 0.5rem 0;
}

a{
    display: block;
    text-decoration: none;
    color: #e2e2e2;
    padding: 4px 8px; 
    transition: all 0.2s ease-in-out;
}
a:hover{
    color: #fff;
    background-color: rgb(28, 22, 22);
    transition: all 0.2s ease-in-out;
}
.activeNav{
    background-color: rgb(40, 99, 122);
}
</style>