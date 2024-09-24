<script setup>
import SplashScreen from "./views/SplashScreen.vue"
import { defineAsyncComponent} from "vue";

const Dashboard = defineAsyncComponent(()=>{
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./views/Dashboard.vue"))
      }, 3000)
  })
})

</script>

<template>
  <Suspense>
    <template #default>
      <Dashboard/>
    </template>
    <template #fallback>
      <SplashScreen class="splash-hide"/>
    </template>
  </Suspense>
</template>