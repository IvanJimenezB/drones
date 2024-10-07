<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import WelcomeView from './WelcomeView.vue';
import { ref } from 'vue';
 
const showWelcome = ref(true);

setTimeout(() => {
    showWelcome.value = false
}, 3000);

</script>
<template>
    <WelcomeView v-if="showWelcome"/>
    <div class="absolute top-0 w-full h-[100vh] bg-[#0f172a] flex direction column" transition-style="in:wipe:right">
        <div class="w-3/12 bg-white bg-opacity-10 blur-sm">
            <nav class="text-black">
                <RouterLink class="blur-none" to="/about">Pilotear</RouterLink>
                <RouterLink class="blur-none" to="/about">Tipos</RouterLink>
                <RouterLink class="blur-none" to="/about">Partes</RouterLink>
                <RouterLink class="blur-none" to="/about">Alcance</RouterLink>
                <RouterLink class="blur-none" to="/about">Evolucion</RouterLink>
            </nav>
        </div>
        <RouterView />
    </div>
</template>
<style scoped>
@keyframes wipe-in-right {
    from {
        clip-path: inset(0 100% 0 0);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

[transition-style="in:wipe:right"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both;
}
</style>