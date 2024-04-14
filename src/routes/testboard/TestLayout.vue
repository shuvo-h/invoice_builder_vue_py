<template>
  <div>
    <TestSideNav />
    <div class="testboard">
        <router-view />
    </div>
  </div>
</template>

<script setup>
import TestSideNav from "./TestSideBar.vue";


</script>

<style scoped>
.testboard{
    margin-left: 150px;
}
</style>