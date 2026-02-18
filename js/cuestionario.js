$(document).ready(function() {
    // Primero me aseguro de que el contenedor del quiz exista en la página
    if ($('#quizModule').length === 0) return;

    // ==========================================
    // 1. BANCO DE PREGUNTAS SOBRE ASINCRONÍA
    // ==========================================
    // Diseñé estas preguntas basándome en la guía técnica de la lección
    const quizDataAsincronia = [
        { 
            question: "¿Cuál es la principal ventaja de la programación asíncrona?", 
            options: ["Permite que la aplicación siga respondiendo al usuario", "Hace que el código sea más corto", "Detiene la ejecución hasta terminar"], 
            correctAnswer: 0, 
            hint: "Piensa en qué pasa con la interfaz cuando algo demora en cargar." 
        },
        { 
            question: "¿Qué estados puede tener una Promesa en JavaScript?", 
            options: ["Abierta, cerrada y pendiente", "Pendiente, cumplida y rechazada", "Iniciada y terminada"], 
            correctAnswer: 1, 
            hint: "Recuerda que una promesa es un compromiso que puede salir bien o mal." 
        },
        { 
            question: "¿Para qué sirve la palabra clave 'await'?", 
            options: ["Para crear una nueva promesa", "Para detener todo el programa", "Para pausar la función hasta que la promesa se resuelva"], 
            correctAnswer: 2, 
            hint: "Es el azúcar sintáctico que reemplaza al bloque .then()." 
        }
    ];

    // ==========================================
    // 2. DETECCIÓN DE PÁGINA Y CARGA DE DATOS
    // ==========================================
    let activeQuizData = [];
    const nombreArchivo = window.location.pathname;

    // Aquí agregué la lógica para que reconozca tu archivo de promesas
    if (nombreArchivo.includes('M05L04-EP02-PROMESAS.html')) {
        activeQuizData = quizDataAsincronia;
    } else {
        // Por si acaso, dejo un respaldo si no encuentra el nombre exacto
        activeQuizData = quizDataAsincronia;
    }

    // ==========================================
    // 3. LÓGICA DEL FUNCIONAMIENTO
    // ==========================================
    let indicePreguntaActual = 0;
    let puntaje = 0;

    function cargarPregunta() {
        // Si ya no quedan más preguntas, muestro el resumen final
        if (indicePreguntaActual >= activeQuizData.length) {
            $('#quizModule').html(`
                <div class="text-center py-4">
                    <h4 class="fw-bold mb-3">¡Excelente trabajo terminando la guía!</h4>
                    <p class="fs-3 mb-4">Lograste ${puntaje} de ${activeQuizData.length} respuestas correctas.</p>
                    <button onClick="window.location.reload()" class="btn btn-nav rounded-pill px-5 py-2">
                        ¿Quieres intentar el desafío de nuevo?
                    </button>
                </div>
            `);
            return;
        }

        const dataActual = activeQuizData[indicePreguntaActual];

        // Actualizo la barra de progreso de forma visual
        let porcentaje = ((indicePreguntaActual + 1) / activeQuizData.length) * 100;
        $('#progressBar').css('width', porcentaje + '%');
        
        // Inyecto el texto de la pregunta y la pista
        $('#quizQuestion').text(dataActual.question);
        $('#hintText').text(dataActual.hint);
        
        // Limpio las opciones anteriores y pongo las nuevas
        $('#quizOptions').empty(); 
        dataActual.options.forEach((opcion, i) => {
            $('#quizOptions').append(
                `<button class="quiz-option" data-index="${i}">${String.fromCharCode(65 + i)}. ${opcion}</button>`
            );
        });

        // Bloqueo el botón "Siguiente" hasta que elijan algo
        $('#btnNextQuestion').prop('disabled', true);
    }

    // Manejo el click cuando selecciono una opción
    $('#quizOptions').on('click', '.quiz-option', function() {
        $('.quiz-option').removeClass('selected');
        $(this).addClass('selected');
        $('#btnNextQuestion').prop('disabled', false);
    });

    // Valido la respuesta y paso a la siguiente
    $('#btnNextQuestion').on('click', function() {
        const opcionSeleccionada = $('.quiz-option.selected');
        if (opcionSeleccionada.length === 0) return;

        const indiceRespuesta = parseInt(opcionSeleccionada.data('index'));
        const indiceCorrecto = activeQuizData[indicePreguntaActual].correctAnswer;

        // Desactivo las opciones para que no sigan marcando
        $('.quiz-option').prop('disabled', true);

        if (indiceRespuesta === indiceCorrecto) {
            puntaje++;
            opcionSeleccionada.addClass('correct');
        } else {
            opcionSeleccionada.addClass('incorrect');
            $(`.quiz-option[data-index="${indiceCorrecto}"]`).addClass('correct');
        }
        
        // Espero un segundo y medio para que alcancen a ver si le achuntaron
        setTimeout(() => {
            indicePreguntaActual++;
            cargarPregunta();
        }, 1500);
    });

    // Inicio el cuestionario por primera vez
    cargarPregunta();
});