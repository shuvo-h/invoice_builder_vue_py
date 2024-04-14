<template>
    <div>
        <h2>About Page</h2>
        <div>
            <h1>Welcome, {{ userName }}</h1>
            <p>Your token code is: {{ tokenCode }}</p>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  userName: String
});

// const userName = props.user_name;
const route = useRoute();
const tokenCode = ref('');

const extractTokenCode = () => {
  const tokenCodeParam = route.query.token_code;
  if (tokenCodeParam) {
    tokenCode.value = tokenCodeParam.toString();
  }
};

onMounted(() => {
  extractTokenCode();
});

</script>

<style>

</style>