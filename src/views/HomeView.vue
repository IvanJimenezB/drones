<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import WelcomeView from './WelcomeView.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const showWelcome = ref(true);



setTimeout(() => {
    showWelcome.value = false
    console.log('pasa');
}, 3000);

console.log("carga");
const classButton = "border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-gray-300 text-gray-200 hover:text-white hover:bg-gray-600 focus:ring-gray-800";
const classActive = " bg-gray-600";
</script>
<template>
    <WelcomeView v-if="showWelcome" />
    <div class="absolute top-0 w-full h-[100vh] bg-[#0f172a] flex" transition-style="in:wipe:right">
        <div class="w-2/12 bg-white bg-opacity-10 flex items-center">
            <nav
                class="w-full text-white text-lg font-extrabold tracking-widest grid grid-rows-1 gap-12 font-sans uppercase justify-center">
                <RouterLink :class="[route.name == 'pilotear' ? classButton + classActive : classButton]" to="/pilotear">
                    <span>Pilotear</span> 
                    <img class="mx-auto" src="@/assets/images/control.png" alt="" width="60">
                </RouterLink>
                <RouterLink  :class="[route.name == 'tipos' ? classButton + classActive : classButton]" to="/tipos">
                    <span>Tipos</span> 
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/entrega-dron-4985878-4148142.png?f=webp" alt="" width="90" class="mx-auto">
                </RouterLink>
                <RouterLink  :class="[route.name == 'partes' ? classButton + classActive : classButton]" to="/partes">
                    <span>Partes</span>
                    <img src="@/assets/images/partes.png" width="80" class="mx-auto " alt="">
                </RouterLink>
                <RouterLink  :class="[route.name == 'alcance' ? classButton + classActive : classButton]" to="/alcance">
                    <span>Alcance</span>
                    <img src="@/assets/images/alcance.png" width="60" class="mx-auto" alt="">
                </RouterLink>
                <RouterLink  :class="[route.name == 'evolucion' ? classButton + classActive : classButton]" to="/evolucion">
                    <span>Evolucion</span>
                    <img src="@/assets/images/evolucion.png" width="60" class="mx-auto imgEvolution" alt="">
                </RouterLink>
            </nav>
        </div>
        
        <div class="w-10/12 overflow-auto">
            <RouterView/>
        </div>
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

.imgEvolution {
  filter: invert(1);
}


[transition-style="in:wipe:right"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both;
}
</style>