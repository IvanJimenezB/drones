<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-800">
      <div class="relative w-full max-w-4xl p-10 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold mb-6 text-center">{{ applications[currentIndex].title }} {{ currentIndex }}</h2>
  
        <!-- Carrusel -->
        <div class="relative">
          <!-- Botón Anterior -->
          <button 
            @click="prevSlide" 
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 focus:outline-none">
            &#10094;
          </button>
  
          <!-- Imagen del Carrusel -->
          <div class="overflow-hidden rounded-lg">
            <img 
              :src="applications[currentIndex].image" 
              alt="Imagen de {{ applications[currentIndex].title }}" 
              class="w-full h-80 object-cover rounded-lg"
            />
          </div>
  
          <!-- Descripción -->
          <div class="mt-4 text-center">
            <p class="mt-2 text-gray-600">{{ applications[currentIndex].description }}</p>
          </div>
  
          <!-- Botón Siguiente -->
          <button 
            @click="nextSlide" 
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 focus:outline-none">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import fotAndVid from "@/assets/images/fotAndVid.jpg";
  import agricultura from "@/assets/images/agricultura.jpg";
  import mapeo from "@/assets/images/mapeo.jpg";
  import emergencia from "@/assets/images/emergencia.png";
  import inspeccion from "@/assets/images/inspeccion.jpeg";
  export default {
    data() {
      return {
        currentIndex: 0,
        applications: [
          {
            title: 'Fotografía y Videografía Aérea',
            description: 'Los drones son ampliamente utilizados para capturar imágenes y videos desde perspectivas únicas, ideales para cineastas y fotógrafos.',
            image: fotAndVid, // Cambia esto por la URL de la imagen
          },
          {
            title: 'Inspección de Infraestructuras',
            description: 'Los drones permiten inspecciones rápidas de estructuras como puentes y torres de energía sin poner en riesgo a los trabajadores.',
            image: inspeccion, // Cambia esto por la URL de la imagen
          },
          {
            title: 'Agricultura de Precisión',
            description: 'Ayudan a monitorear cultivos y aplicar fertilizantes de manera eficiente, mejorando los rendimientos y optimizando los recursos.',
            image: agricultura, // Cambia esto por la URL de la imagen
          },
          {
            title: 'Mapeo y Modelado 3D',
            description: 'Equipados con tecnología avanzada, los drones crean mapas y modelos 3D detallados para la planificación urbana, la construcción y la minería.',
            image: mapeo, // Cambia esto por la URL de la imagen
          },
          {
            title: 'Rescate y Emergencias',
            description: 'En situaciones de emergencia, los drones proporcionan imágenes aéreas para ayudar a localizar personas y evaluar daños en áreas de desastre.',
            image: emergencia, // Cambia esto por la URL de la imagen
          }
        ],
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.appsLength;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.appsLength) % this.appsLength;
      },
    },
    computed: {
      appsLength() {
        return this.applications.length;
      },
    },
  };
  </script>
  
  <style>
  /* Estilos adicionales opcionales */
  </style>