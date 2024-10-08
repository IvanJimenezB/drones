<script setup>
</script>
<template>
    <div class="relative overflow-hidden max-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-800">
        <div class="absolute bg-white bg-opacity-5 rounded-full h-40 w-40 top-10 left-10 animate-float overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/images/dronPilot.gif" alt="dron animado">
        </div>
        <div class="w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h2
                class="text-3xl font-bold mb-6 text-center text-blue-600 transition duration-500 ease-in-out hover:scale-105">
                Pilotear un Dron
            </h2>
            <p class="text-lg leading-relaxed mb-4">
                Pilotear un dron puede ser una experiencia emocionante, pero también requiere práctica y
                conocimiento. Los controles básicos incluyen:
            </p>

            <ul class="list-disc list-inside pl-4 space-y-2 mb-6">
                <li><strong>Acelerador</strong>: Para subir o bajar el dron.</li>
                <li><strong>Timón</strong>: Controla la rotación del dron.</li>
                <li><strong>Alerones</strong>: Manejan el movimiento lateral.</li>
                <li><strong>Elevador</strong>: Controla el movimiento hacia adelante o hacia atrás.</li>
            </ul>

            <h3
                class="text-2xl font-semibold mb-4 text-blue-600 transition duration-500 ease-in-out transform hover:translate-x-1">
                Modos de vuelo
            </h3>
            <ul class="list-disc list-inside pl-4 space-y-2 mb-6">
                <li><strong>Modo principiante</strong>: Ofrece un control limitado y ayuda con la estabilidad.</li>
                <li><strong>Modo GPS</strong>: Ideal para mantener el dron en una posición fija, incluso con viento.
                </li>
                <li><strong>Modo manual o FPV</strong> (First Person View): Requiere habilidades avanzadas para un
                    control completo y sin ayuda.</li>
            </ul>

            <h3
                class="text-2xl font-semibold mb-4 text-blue-600 transition duration-500 ease-in-out transform hover:translate-x-1">
                Regulaciones y requisitos legales
            </h3>
            <p class="text-lg leading-relaxed mb-4">
                Es importante conocer las normativas locales antes de volar un dron. En muchos países, como Estados
                Unidos, debes registrar el dron si pesa más de 250 gramos. Además, existen restricciones sobre dónde
                puedes volar:
            </p>

            <ul class="list-disc list-inside pl-4 space-y-2 mb-6">
                <li>No volar cerca de aeropuertos.</li>
                <li>Mantener el dron a la vista en todo momento.</li>
                <li>Obtener licencias si lo usas con fines comerciales.</li>
            </ul>

            <h3
                class="text-2xl font-semibold mb-4 text-blue-600 transition duration-500 ease-in-out transform hover:translate-x-1">
                Consejos de seguridad
            </h3>
            <ul class="list-disc list-inside pl-4 space-y-2 mb-6">
                <li><strong>Condiciones climáticas</strong>: Evita volar con vientos fuertes o lluvias.</li>
                <li><strong>Mantén el dron a la vista</strong>: No lo pierdas de vista para evitar accidentes.</li>
                <li><strong>Vuela en espacios abiertos</strong>: Practica en áreas despejadas, lejos de edificios o
                    personas.</li>
            </ul>
        </div>
        <img src="@/assets/images/dronPilotControl.gif" class="absolute right-0 bottom-0" width="400" alt="">
    </div>
</template>
<style>
@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0px);
    }
}

@keyframes float-slow {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(30px);
    }

    100% {
        transform: translateY(0px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
}
</style>