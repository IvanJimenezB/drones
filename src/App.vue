<script setup>
import SplashScreen from "./views/SplashScreen.vue"
import { defineAsyncComponent} from "vue";

const Dashboard = defineAsyncComponent(()=>{
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./views/Dashboard.vue"))
      }, 6000)
  })
})

</script>

<template>
  <Suspense>
      <Dashboard/>
    <template #fallback>
        <SplashScreen/>
    </template>
  </Suspense>
</template>