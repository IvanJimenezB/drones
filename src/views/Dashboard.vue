<script setup>
import { RouterView } from 'vue-router'
import SplashScreen from "./SplashScreen.vue"
import { defineAsyncComponent} from "vue";

const WelcomeView = defineAsyncComponent(()=>{
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./WelcomeView.vue"))
      }, 6000)
  })
})
</script>
<template>
    <Suspense>
        <WelcomeView/>
        <template #fallback>
            <SplashScreen/> 
        </template>
    </Suspense>
</template>

