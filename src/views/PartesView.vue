<script>
import motor from "@/assets/images/motor.webp";
import controlador from "@/assets/images/controlador.jpg";
import bateria from "@/assets/images/bateria.webp";
import camara from "@/assets/images/camara.webp";
import gimbal from "@/assets/images/gimbal.png";
import sensor from "@/assets/images/sensor.jpg";
export default {
    data() {
        return {
            parts: [
                {
                    title: 'Motores',
                    description: 'Son esenciales para el movimiento. La mayoría de los drones tienen cuatro motores (quadcopter), que proporcionan potencia para la elevación y el control.',
                    image: motor, // Cambia esto por la URL de la imagen
                },
                {
                    title: 'Controlador de vuelo',
                    description: 'Es el "cerebro" del dron, que recibe las señales del piloto y ajusta los motores para mantener la estabilidad y dirección.',
                    image: controlador, // Cambia esto por la URL de la imagen
                },
                {
                    title: 'Batería',
                    description: 'El tiempo de vuelo depende de la batería. Las más comunes son de litio-polímero (LiPo), conocidas por su alta densidad energética y tiempos de vuelo de entre 15 y 30 minutos.',
                    image: bateria, // Cambia esto por la URL de la imagen
                },
                {
                    title: 'Gimbal (estabilizador)',
                    description: 'Un dispositivo que mantiene la cámara estable mientras el dron se mueve, asegurando imágenes y videos sin vibraciones.',
                    image: gimbal, // Cambia esto por la URL de la imagen
                },
                {
                    title: 'Cámara',
                    description: 'Algunos drones tienen cámaras integradas, mientras que otros permiten acoplar cámaras profesionales, como GoPro, para fotografía y video de alta calidad.',
                    image: camara, // Cambia esto por la URL de la imagen
                },
                {
                    title: 'Sensores GPS y de distancia',
                    description: 'Los sensores GPS ayudan al dron a ubicarse y seguir rutas preprogramadas, mientras que los sensores de distancia evitan colisiones.',
                    image: sensor, // Cambia esto por la URL de la imagen
                },
            ],
        };
    },
};
</script>
<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-800">
        <div class="bg-white text-gray-800 p-10 rounded-lg shadow-lg max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 text-center">Partes de un Dron</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="(part, index) in parts" :key="index"
                    class="bg-gray-100 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                    <img :src="part.image" alt="Imagen de {{ part.title }}"
                        class="w-full h-40 object-cover rounded-md" />
                    <h3 class="text-xl font-semibold mt-4">{{ part.title }}</h3>
                    <p class="mt-2 text-gray-600">{{ part.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>