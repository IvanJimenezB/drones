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
    <div
        class="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform min-h-screen">
        <div class="md:w-1/2">
            <h1 class="text-3xl font-bold text-gray-800 mb-4 animate-fadeIn">DRON K911 MAX</h1>
            <p class="text-gray-600 text-lg animate-fadeIn delay-200">
                El dron K911 Max es un dron especializado diseñado principalmente para aplicaciones de seguridad y
                vigilancia. Este dron se destaca por su robustez, capacidad avanzada de vuelo autónomo, y una serie de
                características que lo hacen ideal para tareas críticas en entornos exigentes.
            </p>
        </div>
        <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img src="@/assets/images/dronk911BG.png" alt="Dron K911 Max"
                class="max-w-full h-auto rounded-lg shadow-md animate-float">
        </div>
    </div>
    <div class="p-6 w-full mx-auto bg-gray-100">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-800 my-8">PARTES DEL DRON</h2>
            <div class="mb-8">
                <img src="@/assets/images/partesDron.png" alt="" class="mx-auto">
            </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Cuerpo Principal -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2 flex "><span class="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">1</span> Cuerpo Principal </h3>
                <p class="text-gray-600">Material: Fibra de carbono o aluminio, ligero y resistente, proporcionando alta
                    durabilidad.</p>
                <p class="text-gray-600">Función: Aloja los sistemas electrónicos principales.</p>
            </div>

            <!-- Hélices -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2 flex"><span class="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">2</span>Hélices</h3>
                <p class="text-gray-600">Material: Plástico reforzado con fibra de carbono.</p>
                <p class="text-gray-600">Función: Generan la elevación necesaria para el vuelo y permiten maniobras.</p>
            </div>

            <!-- Cámara 4K Frontal -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2 flex"><span class="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">3</span>Cámara 4K Frontal</h3>
                <p class="text-gray-600">Resolución: Captura video en 4K.</p>
                <p class="text-gray-600">Función: Estabilizada con un gimbal para mayor precisión en la captura de
                    imágenes.</p>
            </div>

            <!-- Cámara Térmica -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2 flex"><span class="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">3</span>Cámara Térmica</h3>
                <p class="text-gray-600">Función: Detecta radiación infrarroja para operaciones de rescate y vigilancia
                    nocturna.</p>
                <p class="text-gray-600">Montaje: Gimbal rotatorio para estabilización.</p>
            </div>

            <!-- Sensores de Obstáculos -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2 flex"><span class="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">5</span>Sensores de Obstáculos</h3>
                <p class="text-gray-600">Tipos: Sensores ultrasónicos, lidar o cámaras de profundidad.</p>
                <p class="text-gray-600">Función: Evitar colisiones detectando objetos cercanos.</p>
            </div>

            <!-- Sistema de Propulsión -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Sistema de Propulsión</h3>
                <p class="text-gray-600">Componentes: Motores eléctricos, ESC y hélices.</p>
                <p class="text-gray-600">Función: Impulsan el dron y permiten maniobras.</p>
            </div>

            <!-- Antenas de Comunicación -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Antenas de Comunicación</h3>
                <p class="text-gray-600">Función: Transmiten datos entre el dron y la estación de control.</p>
            </div>

            <!-- Luces de Navegación -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2 flex"><span class="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">8</span>Luces de Navegación</h3>
                <p class="text-gray-600">Tipos: LEDs de colores para indicar la orientación del dron.</p>
            </div>

            <!-- GPS -->
            <div class="bg-white rounded-lg shadow-lg p-4">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Sistema de Posicionamiento Global (GPS)</h3>
                <p class="text-gray-600">Función: Navegación precisa para vuelo autónomo y georreferenciación de
                    imágenes.</p>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-300">
        <div class="bg-white text-gray-800 p-10 rounded-lg shadow-lg max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 text-center">MAS PARTES</h2>

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
<style scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}

.animate-fadeIn {
    animation: fadeIn 1s ease-in-out forwards;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
</style>