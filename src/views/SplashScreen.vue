<script setup lang="ts">
import Welcome from "./WelcomeView.vue"
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
    strings: ["Aéreo seguridad <span class='text-green-700'>COLPLINIO</span>."],
    loop: false,
    typeSpeed: 50,
};
</script>
<template>
    <div>
        <div class="w-full h-[100%] grid place-content-center absolute pb-[100px]" >
            <img src="@/assets/images/DronSplashScreen.gif" class="justify-self-center" width="300" alt="" id="dronFirst">
            <br>
            <br>
            <Typed :options="options" class="flex text-4xl" >
                <h1 class="typing text-5xl text-center font-sans font-bold tracking-widest h-full"></h1>
            </Typed>
        </div>
        <Welcome transition-style="in:wipe:down" class="absolute"/>
    </div>
</template>

<style scoped>
@keyframes wipe-in-down {
  from {
    clip-path: inset(0 0 100% 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:wipe:down"] {
    animation: 3s cubic-bezier(.25, 1, .30, 1) wipe-in-down both;
    animation-delay: 4s;
}

#dronFirst {
    animation: scalexd 3s forwards;
}

@keyframes scalexd {
    from{
        transform: scale(.8);
    }to{
        transform: scale(1.3);
    }
}


</style>