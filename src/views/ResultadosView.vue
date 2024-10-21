<script setup>
  import { ref } from 'vue';
  import img1 from '@/assets/images/colegio/Imagen1.jpg';
  import img2 from '@/assets/images/colegio/Imagen2.jpg';
  import img3 from '@/assets/images/colegio/Imagen3.jpg';
  import img4 from '@/assets/images/colegio/Imagen4.jpg';
  import img5 from '@/assets/images/colegio/Imagen5.jpg';
  import img6 from '@/assets/images/colegio/Imagen6.jpg';
  import img7 from '@/assets/images/colegio/Imagen7.jpg';
  import img8 from '@/assets/images/colegio/Imagen8.jpg';
  import img9 from '@/assets/images/colegio/Imagen9.jpg';
  
  const currentImage = ref(0);
  const images = ref([
    img1,   
    img2,   
    img3,   
    img4,   
    img5,   
    img6,   
    img7,   
    img8,   
    img9,   
  ]);
  
  const nextImage = () => {
    currentImage.value = (currentImage.value + 1) % images.value.length;
  };
  
  const prevImage = () => {
    currentImage.value = (currentImage.value - 1 + images.value.length) % images.value.length;
  };
  </script>
<template>
    <div class="photo-results flex flex-col items-center justify-center h-screen bg-gray-800 text-white p-4">
      <h2 class="text-3xl font-bold mb-4 text-center">Puntos Ciegos / Resultados de Fotos con el Dron</h2>
      <div class="image-gallery flex flex-col items-center">
        <img 
          :src="images[currentImage]" 
          :alt="'Imagen ' + (currentImage + 1)" 
          class="drone-image rounded-lg shadow-md w-[900px] max-w-3xl"
        >
        <div class="controls mt-4 flex space-x-4">
          <button 
            @click="prevImage" 
            class="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            Anterior
          </button>
          <button 
            @click="nextImage" 
            class="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .drone-image {
    transition: transform 0.3s ease;
  }
  .drone-image:hover {
    transform: scale(1.05);
  }
  </style>
  
  