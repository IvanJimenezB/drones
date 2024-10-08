<script>
import recreo from "@/assets/images/recreo.jpg";
import profesional from "@/assets/images/profesional.png";
import fpv from "@/assets/images/fpv.jpg";
import industrial from "@/assets/images/industrial.png";
export default {
  data() {
    return {
      selectedDrone: null,
      drones: [
        {
          title: 'Drones de recreo',
          description: 'Estos drones son pequeños y ligeros, ideales para principiantes o uso recreativo. Suelen tener cámaras sencillas y autonomía limitada, pero son perfectos para aprender o divertirse.',
          image: recreo, 
        },
        {
          title: 'Drones profesionales',
          description: 'Utilizados en fotografía y video de alta calidad, estos drones tienen cámaras avanzadas y estabilizadores. Son ideales para producción audiovisual, topografía y mapeo aéreo.',
          image: profesional, // Cambia esto por la URL de la imagen
        },
        {
          title: 'Drones FPV (First Person View)',
          description: 'Diseñados para carreras y vuelos de alta velocidad, estos drones permiten al piloto ver en tiempo real lo que el dron está grabando, gracias a unas gafas especiales.',
          image: fpv, // Cambia esto por la URL de la imagen
        },
        {
          title: 'Drones industriales',
          description: 'Usados en agricultura, construcción y vigilancia, son capaces de transportar equipos pesados y realizar tareas especializadas como el monitoreo de cultivos o la inspección de infraestructuras.',
          image: industrial, // Cambia esto por la URL de la imagen
        },
      ],
    };
  },
};
</script>
<template>
     <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-800">
    <div class="bg-white text-gray-800 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">Tipos de Drones</h2>
      
      <ul class="">
        <li 
          v-for="(drone, index) in drones" 
          :key="index" 
          class="opacity-0 animate-fade-in transition duration-500 cursor-pointer" 
          @click="selectedDrone = drone"
        >
          <h3 class="text-xl font-semibold hover:text-blue-600">{{ drone.title }}</h3>
        </li>
      </ul>

      <div v-if="selectedDrone" class="mt-6 p-4 border rounded-md">
        <h4 class="text-xl font-semibold">{{ selectedDrone.title }}</h4>
        <img :src="selectedDrone.image" alt="Imagen de {{ selectedDrone.title }}" class="mt-4 w-full h-100 object-cover rounded-md" />
        <p class="mt-2">{{ selectedDrone.description }}</p>
      </div>
    </div>
  </div>
</template>
<style>
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}
</style>