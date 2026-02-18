// --- EJERCICIO 1: SIMULACIÓN DE BASE DE DATOS ---

// Definí esta clase para crear personas con el formato que me pidieron
class Persona {
    constructor(nombre, apellido, edad, ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

// Aquí armé la función que busca a alguien en la base de datos imaginaria
const ejercicio1 = () => {
    console.log("creando promesa");

    return new Promise((resolve) => {
        console.log("registrando promesa");
        console.log("esperando respuesta");

        // Puse un temporizador de 3 segundos para que parezca una carga real
        setTimeout(() => {
            const personaEncontrada = new Persona("Mario", "Bros", 55, "Mushroom kingdom");
            resolve(personaEncontrada);
        }, 3000);
    });
};

// --- EJERCICIO 2: PROMESA CON SEGUNDOS ---

// Esta función revisa la hora actual y decide si cumple o no la promesa
const ejercicio2 = () => {
    return new Promise((resolve, reject) => {
        const ahora = new Date();
        const segundos = ahora.getSeconds();
        const horaFormateada = ahora.toLocaleTimeString();

        // Aquí puse la lógica que me pediste según si es mayor a 30 o no
        if (segundos > 30) {
            if (segundos % 2 === 0) {
                resolve("Son más de 30 y es PAR: " + horaFormateada);
            } else {
                reject("Error: Son más de 30 y es IMPAR");
            }
        } else {
            if (segundos % 2 !== 0) {
                resolve("Son 30 o menos y es IMPAR: " + horaFormateada);
            } else {
                reject("Error: Son 30 o menos y es PAR");
            }
        }
    });
};

// --- EJERCICIO 3: CÓDIGO PESADO QUE BLOQUEA ---

// Con esta función hice que el computador trabaje de más para ver el retraso
const ejercicio3 = () => {
    console.log("creando promesa pesada");
    
    return new Promise((resolve) => {
        console.log("registrando promesa");
        console.log("esperando respuesta");

        // Puse un ciclo que cuenta hasta mil millones para que el navegador se esfuerce
        for (let i = 0; i < 1000000000; i++) {
            // Este proceso es síncrono y bloquea el hilo principal mientras corre
        }

        resolve("Listo");
    });
};

// --- EJECUCIÓN DE LAS PRUEBAS ---

// Primero llamo al ejercicio 1
ejercicio1().then((respuesta) => {
    console.log("RESPUESTA EJERCICIO 1:");
    console.log(respuesta);
    
    // Cuando termina el 1, tiro el ejercicio 2 para que no se mezclen
    return ejercicio2();
})
.then((mensajeExito) => {
    console.log("RESPUESTA EJERCICIO 2:", mensajeExito);
})
.catch((mensajeError) => {
    console.error("RESPUESTA EJERCICIO 2:", mensajeError);
})
.finally(() => {
    // Al final de todo, ejecuto el ejercicio 3 que bloquea un poco
    ejercicio3().then((resp) => {
        console.log("RESPUESTA EJERCICIO 3:", resp);
    });
});