<script setup lang="ts">

</script>
<template>

    <div class="flex items-center justify-center min-h-screen">
        <div class="bg-blue-500 bg-opacity-50 text-white p-10 rounded-lg w-full" transition-style="in:square:hesitate">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 transition duration-500 ease-in-out transform hover:scale-105">
                    ¿Qué es un dron?
                </h2>
                <p class="text-lg leading-relaxed mb-6 opacity-0 animate-fade-in">
                    Un <strong>dron</strong>, o vehículo aéreo no tripulado (VANT), es un aparato volador que se
                    controla de
                    forma remota o vuela de manera autónoma gracias a un software de navegación.
                </p>

                <h3
                    class="text-2xl font-semibold mb-4 transition duration-500 ease-in-out transform hover:translate-x-1">
                    Características principales:
                </h3>
                <ul class="list-disc list-inside space-y-2 opacity-0 animate-fade-in">
                    <li class="transition duration-300 hover:text-gray-300"><strong>Control Remoto</strong>: La mayoría
                        se
                        manejan con un controlador, pero muchos pueden volar automáticamente.</li>
                    <li class="transition duration-300 hover:text-gray-300"><strong>Cámaras y Sensores</strong>:
                        Equipados
                        con tecnología que permite capturar imágenes y datos desde el aire.</li>
                    <li class="transition duration-300 hover:text-gray-300"><strong>Tecnología GPS</strong>: Utilizan
                        GPS
                        para navegar y realizar tareas programadas.</li>
                </ul>

                <h3
                    class="text-2xl font-semibold mt-8 mb-4 transition duration-500 ease-in-out transform hover:translate-x-1">
                    Aplicaciones comunes:
                </h3>
                <ul class="list-disc list-inside space-y-2 opacity-0 animate-fade-in">
                    <li class="transition duration-300 hover:text-gray-300"><strong>Fotografía aérea</strong>: Captura
                        de
                        imágenes y videos desde nuevas perspectivas.</li>
                    <li class="transition duration-300 hover:text-gray-300"><strong>Agricultura</strong>: Monitoreo de
                        cultivos y análisis de datos.</li>
                    <li class="transition duration-300 hover:text-gray-300"><strong>Inspección</strong>: Evaluación de
                        infraestructuras como puentes y torres.</li>
                    <li class="transition duration-300 hover:text-gray-300"><strong>Entregas</strong>: Uso en servicios
                        de
                        entrega de paquetes.</li>
                    <li class="transition duration-300 hover:text-gray-300"><strong>Emergencias</strong>: Ayuda en
                        situaciones de búsqueda y rescate.</li>
                </ul>

                <p class="text-lg leading-relaxed mt-8 opacity-0 animate-fade-in">
                    Los drones están transformando muchas industrias, ofreciendo nuevas capacidades y perspectivas.
                </p>
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
    animation: fade-in 2s ease-out forwards;
    animation-delay: 3s;
}
@keyframes square-in-hesitate {
  0% {
    clip-path: inset(100% 100% 100% 100%);
  }
  40% {
    clip-path: inset(33% 33% 33% 33%);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:hesitate"] {
    animation: 4s cubic-bezier(.25, 1, .30, 1) square-in-hesitate both;
    animation-delay: .5s;
}
</style>