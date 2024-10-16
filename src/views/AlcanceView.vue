<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-800">
      <div class="relative w-full max-w-4xl p-10 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold mb-6 text-center">{{ applications[currentIndex].title }}</h2>
  
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
  import emergencia from "@/assets/images/emergencia.png";
  import img1 from "@/assets/images/img1.png";
  import img2 from "@/assets/images/img2.jpg";
  import img3 from "@/assets/images/img3.jpg";
  import img4 from "@/assets/images/img4.jpg";
  import img5 from "@/assets/images/img5.jpg";
  import img6 from "@/assets/images/img6.png";
  import img7 from "@/assets/images/img7.jpg";
  import img8 from "@/assets/images/img8.jpg";
  import img9 from "@/assets/images/img9.png";
  import inspeccion from "@/assets/images/inspeccion.jpeg";
  export default {
    data() {
      return {
        currentIndex: 0,
        applications: [
          {
            title: 'DISEÑO Y CONSTRUCCIÓN',
            description: 'Estructura Robusta: El K911 Max está construido con materiales de alta resistencia, como fibra de carbono, lo que le otorga durabilidad y la capacidad de operar en condiciones adversas.El diseño del K911 Max es de tipo multicóptero (normalmente con cuatro, seis u ocho hélices), lo que le proporciona estabilidad y capacidad de maniobra precisa.',
            image: img1, // Cambia esto por la URL de la imagen
          },
          {
            title: 'CAPACIDADES DE VUELO',
            description: 'Autonomía Extendida: El K911 Max está equipado con baterías de alta capacidad que permiten vuelos prolongados, ideales para operaciones de vigilancia continua.',
            image: fotAndVid, // Cambia esto por la URL de la imagen
          },
          {
            title: 'VUELO AUTÓNOMO',
            description: 'Su avanzado sistema de navegación GPS y sus sensores, puede seguir rutas predefinidas de manera autónoma, realizar patrullas automáticas, y regresar a su base de operaciones sin intervención humana.',
            image: img2, // Cambia esto por la URL de la imagen
          },
          {
            title: 'RESISTENCIA A CONDICIONES ADVERSAS',
            description: 'Diseñado para operar en condiciones climáticas difíciles, como vientos fuertes, lluvia ligera, y temperaturas extremas.',
            image: img3, // Cambia esto por la URL de la imagen
          },
          {
            title: 'CÁMARA DE ALTA RESOLUCIÓN',
            description: ' Equipado con una cámara de 4K o superior, capaz de capturar imágenes y videos de alta calidad, lo que es crucial para identificar detalles a distancia.',
            image: img4, // Cambia esto por la URL de la imagen
          },
          {
            title: 'CÁMARA TÉRMICA',
            description: ' El K911 Max también puede incluir una cámara térmica, permitiendo la detección de fuentes de calor, como personas o incendios, incluso en condiciones de baja visibilidad o de noche.',
            image: img5, // Cambia esto por la URL de la imagen
          },
          {
            title: 'SENSORES DE OBSTÁCULOS',
            description: '  Los sensores de proximidad y anticolisión permiten que el dron evite obstáculos automáticamente, garantizando un vuelo seguro y eficiente.',
            image: img6, // Cambia esto por la URL de la imagen
          },
          {
            title: 'ENLACE DE DATOS EN TIEMPO REAL',
            description: 'Proporciona transmisión de video y datos en tiempo real a una estación de control, permitiendo el monitoreo en vivo de la operación..',
            image: img7, // Cambia esto por la URL de la imagen
          },
          {
            title: 'ALCANCE EXTENDIDO',
            description: 'Capaz de operar a largas distancias desde la estación de control, manteniendo una conexión estable y fiable.',
            image: img8, // Cambia esto por la URL de la imagen
          },
          {
            title: 'VIGILANCIA Y SEGURIDAD PERIMETRAL',
            description: 'Es ideal para la supervisión de grandes áreas, como instalaciones industriales, fronteras, y eventos masivos.',
            image: img9, // Cambia esto por la URL de la imagen
          },
          {
            title: 'Inspección de Infraestructuras',
            description: 'Adecuado para la inspección de instalaciones críticas, como plantas de energía, redes de transmisión eléctrica, y puentes.',
            image: inspeccion, // Cambia esto por la URL de la imagen
          },
          {
            title: 'Rescate y Emergencias',
            description: 'Utilizado para buscar personas en situaciones de desastre, evaluar daños en infraestructuras, o apoyar en operaciones de rescate.',
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