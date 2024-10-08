<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
    strings: ["Descubre cómo la tecnología aérea puede expandir los límites de la seguridad.", "Tu camino hacia un futuro más seguro comienza con un vuelo.", "La protección del mañana está en tus manos, aprende hoy."],
    loop: true,
    typeSpeed: 40,
};
</script>
<template>
    <div class="w-full min-h-[100vh] h-full" id="bg-img">
        <div
            class="flex items-center gap-1 md:gap-4 pt-7 justify-center text-xs font-medium uppercase md:tracking-[0.16em] w-full md:w-10/12 md:m-auto">
            <div class="hidden lg:block">
                <span class="text-gray-400">Garantizamos la <span class="text-white">seguridad</span> escolar</span>
                <hr class="my-1">
                <div class="pt-1 flex gap-2 justify-center">
                    <svg v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-star" width="25" height="25">
                        <polygon fill="#FFD700" stroke="#FFD700"
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </div>
            </div>
            <div class="mx-6 hidden h-[0.3rem] w-[0.3rem] rounded-full bg-white lg:block xl:mx-16"></div>
            <div class="hidden lg:block">
                <span class="text-gray-400">Protección avanzada en <span class="text-white">colegios</span></span>
                <hr class="my-1">
                <div class="pt-1 flex gap-2 justify-center">
                    <svg v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-star" width="25" height="25">
                        <polygon fill="#FFD700" stroke="#FFD700"
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </div>
            </div>
            <div class="mx-6 hidden h-[0.3em] w-[0.3rem] rounded-full bg-white lg:block xl:mx-16"></div>
            <div class="text-center">
                <span class="text-gray-400">Espacios <span class="text-white">seguros</span></span>
                <hr class="my-1">
                <div class="pt-1 flex gap-2 justify-center">
                    <svg v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-star">
                        <polygon fill="#FFD700" stroke="#FFD700"
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-10/12 m-auto pt-[80px] lg:pt-[200px] lg:flex relative">
            <div class="sm:w-full lg:w-7/12 ">
                <h1
                    class="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-[2rem] sm:text-[4rem] lg:text-7xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:leading-[4.75rem] lg:text-left font-medium">
                    Conviértete en un experto en drones que protegen y vigilan donde otros no pueden.
                </h1>
                <br>
                <Typed :options="options" class="my-2 flex text-4xl h-[80px]">
                    <p class="typing text-gray-300 text-lg lg:text-3xl text-[#94A3B8]"></p>
                </Typed>


                <RouterLink to="/home"><button
                        className="flex px-10 py-3 rounded-full tracking-widest border-2  border-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-green-600 transition-colors duration-200 boot">
                        Conoce más
                        <svg class="font-bold" width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                stroke="#CCCCCC" stroke-width="0.048"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1.8240000000000003"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                    </button></RouterLink>

            </div>
            <div class="w-full lg:w-5/12">
                <img id="imgDronDashboard"  class="md:w-[650px] -right-20 top-40 opacity-80"
                src="@/assets/images/FirstDron.gif" alt="">
            </div>
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
