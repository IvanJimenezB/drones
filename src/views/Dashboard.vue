<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
    strings: ["Descubre cómo la tecnología aérea puede expandir los límites de la seguridad.", "Tu camino hacia un futuro más seguro comienza con un vuelo.","La protección del mañana está en tus manos, aprende hoy."],
    loop: true,
    typeSpeed: 40,
};
</script>
<template>
    <div class="w-full h-[100vh]" id="bg-img">
        <div class="flex items-center gap-4 pt-10 justify-center text-lg font-medium uppercase tracking-[0.16em]">
            <span class="text-gray-300">Inicio</span>
            <div class="mx-6 hidden h-[0.4rem] w-[0.4rem] rounded-full bg-white lg:block xl:mx-16"></div>
            <span class="text-gray-300">Nosotros</span>
        </div>
        <div class="w-10/12 m-auto pt-[200px] flex relative">
            <div class="w-7/12">
                <h1 class="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left">Conviértete en un experto en drones que protegen y vigilan donde otros no pueden.
                </h1>
                <br>
                <Typed :options="options" class="flex text-4xl" >
                    <p class="typing text-gray-300 text-3xl text-[#94A3B8]" ></p>
                </Typed>
                
            </div>
            <img id="imgDronDashboard" class="absolute w-[650px] -right-20 top-40 opacity-80" src="https://i.pinimg.com/originals/bc/f3/a3/bcf3a371b9303c27752e1109e96a2fe6.gif" alt="">
        </div>
    </div>
</template>

<style scoped>
#bg-img {
    background: radial-gradient(145.05% 100% at 50% 0, #1d2b41 0, #020509 57.38%, #0f1a29 88.16%);
}
#imgDronDashboard {
    filter: drop-shadow(2px 2px 150px white);
}
</style>