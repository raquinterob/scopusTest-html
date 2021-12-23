

/* Objeto con todas las preguntas */
const preguntas =[
    {
        pregunta:'Si tienes los pezones planos...',
        respuestas: [
            {
                respuesta: 'Tienes que prepararlos',
                correct: false
            },
            {
                respuesta: 'No vas a poder lactar',
                correct: false
            },
            {
                respuesta: 'Lactas normalmente',
                correct: true
            },
            {
                respuesta: 'Puedes usar pezonera',
                correct: false
            }
        ],
        explicacion: 'Los pezones no tienen leche, la leche está en la aréola. Debes prepararte psicológicamente para todo lo que te digan, siempre vas a escuchar comentarios que no necesitas.',
        urlImage: './src/assets/Test-Lili-Pregunata-uno-Si-tienes-pezones-planos.jpg'
    },
    {
        pregunta:'¿Cuantos pañales debe orinar el bebe al segundo día de nacido?',
        respuestas: [
            {
                respuesta: '7 - 8',
                correct: false
            },
            {
                respuesta: '10 - 12',
                correct: false
            },
            {
                respuesta: '6 - 9',
                correct: false
            },
            {
                respuesta: '3 - 5',
                correct: true
            },
            {
                respuesta: '1 - 2',
                correct: false
            }
        ],
        explicacion: 'Tiene que orinar entre 3 a 5 pañales, la orina nos indica si el bebé está comiendo después de nacer.',
        urlImage: './src/assets/Test-Lili-Pregunata-dos-Cuantos-panales-debe-orinar-el-bebe-al-segundo-día-de-nacido.jpg'
    },
    {
        pregunta:'El piel a piel es un momento en el que…',
        respuestas: [
            {
                respuesta: 'Debe durar en promedio 50 minutos a 2 horas.',
                correct: false
            },
            {
                respuesta: 'El bebé se adapta mejor al medio extrauterino.',
                correct: false
            },
            {
                respuesta: 'Es el mejor estímulo para iniciar la lactancia.',
                correct: false
            },
            {
                respuesta: 'Todas las anteriores.',
                correct: true
            }
        ],
        explicacion: 'El piel a piel (skin to skin) es el mejor momento para lograr que los bebés inician “solos” el proceso de lactancia materna y se encuentren con su madre: a la que conocen intrauterinamente y ahora deben reconocerla extrauterinamente. También es un momento donde la madre se siente tranquila y confiada de tener al bebe a su lado.',
        urlImage: './src/assets/Test-Lili-Pregunata-tres-El-piel-a-piel-es-un-momento-en-el-que.jpg'
    },
    {
        pregunta:'¿La cesárea influye en que no tenga buena bajada de leche?',
        respuestas: [
            {
                respuesta: 'Si.',
                correct: false
            },
            {
                respuesta: 'No.',
                correct: true
            }
        ],
        explicacion: 'Una vez nace el bebé, la placenta comienza a salir y así manda la orden al cerebro que empiece la producción de leche, por eso la cesárea no influye en la bajada de la leche. Lo que sí puede pasar es que si no tenemos nuestro bebé lo más pronto posible y demoramos mucho ese piel a piel, o si el dolor no nos deja estar tranquilas con nuestro bebé, o si no logramos ese enganche por la razón que sea lo antes posible, entonces sí es cierto que pueda demorarse el calostro y la bajada de leche.',
        urlImage: './src/assets/Test-Lili-Pregunata-cuatro-La-cesarea-influye-en-que-no-tenga-buena-bajada-de-leche.jpg'
    },
    {
        pregunta:'El padre cumple un papel fundamental en la lactancia por que...',
        respuestas: [
            {
                respuesta: 'Debe conocer el proceso para ayudar a la madre.',
                correct: false
            },
            {
                respuesta: 'Debe hacer el conteo de pañales',
                correct: false
            },
            {
                respuesta: 'Puede ayudar con los masajes y sacada manual de calostro.',
                correct: false
            },
            {
                respuesta: 'Puede ayudar a dar un tetero en la noche para que la mamá descanse.',
                correct: false
            },
            {
                respuesta: 'Todas menos la última.',
                correct: true
            },
            {
                respuesta: 'Sólo la última.',
                correct: false
            },
        ],
        explicacion: 'El papá debe estár durante todo el proceso de lactancia para ayudar a la madre. Dar un tetero no es la mejor opción en lactancia.',
        urlImage: './src/assets/Test-Lili-Pregunata-cinco-El-padre-cumple-un-papel-fundamental-en-la-lactancia-por-que.jpg'
    },
    {
        pregunta:'Si el bebé debe quedar en la unidad de recién nacidos...',
        respuestas: [
            {
                respuesta: 'La madre debe descansar.',
                correct: false
            },
            {
                respuesta: 'La madre no debe extraeerse.',
                correct: false
            },
            {
                respuesta: 'La madre debe entrenarse en tetero.',
                correct:  false
            },
            {
                respuesta: 'La madre debe visitarlo y entrenarse en extracción de día y noche y técnicas de alimentación diferente al chupo.',
                correct: true
            }
        ],
        explicacion: 'La producción de calostro y leche es un estímulo y el cuerpo debe tener de día y de noche. Si no estás con él bebé debes extraerte todo el tiempo posible y aprender cómo darle esa leche con dispositivos diferentes al tetero.',
        urlImage: './src/assets/Test-Lili-Pregunata-seis-Si-el-bebé-debe-quedar-en-la-unidad-de-recién-nacidos.jpg'
    },
    {
        pregunta:'Entre el día 3 y 5 la madre observa que el bebé...',
        respuestas: [
            {
                respuesta: 'Duerme más.',
                correct: false
            },
            {
                respuesta: 'Coma cada 20 minutos de cada seno.',
                correct: false
            },
            {
                respuesta: 'Succiona mucho para ayudarle a la bajada de leche.',
                correct: true
            },
            {
                respuesta: 'Orina 3 pañales al día.',
                correct: false
            }
        ],
        explicacion: 'El bebé mama mucho en las noches para ayudar al proceso de bajada de la leche y así aumentar de peso, esto gracias a la Prolactina que es una hormona nocturna.',
        urlImage: './src/assets/Test-Lili-Pregunata-siete-Entre-el-día-3-y-5-la-madre-observa-que-el-bebé.jpg'
    },
    {
        pregunta:'Un signo de deshidratación del bebé es...',
        respuestas: [
            {
                respuesta: 'El bebé no hace pipi.',
                correct: false
            },
            {
                respuesta: 'El bebé llora constantemente.',
                correct: false
            },
            {
                respuesta: 'El bebé duerme más de 5 horas.',
                correct: false
            },
            {
                respuesta: 'El bebé está muy ictérico.',
                correct: false
            },
            {
                respuesta: 'Todas las anteriores.',
                correct: true
            }
        ],
        explicacion: 'Los recién nacidos no solo “duermen y comen”. Por eso debemos despertarlos y estimularlos frecuentemente para que coman, ya que las gotas de calostro que toman son muy pocas y necesitamos que estén constantemente pegados y succionando: haciendo lo que mejor saben hacer.',
        urlImage: './src/assets/Test-Lili-Pregunata-ocho-Un-signo-de-deshidratación-del-bebé-es.jpg'
    },
    {
        pregunta:'Al nacer los bebés pierden...',
        respuestas: [
            {
                respuesta: 'El 2% del peso de nacido máximo',
                correct: false
            },
            {
                respuesta: 'El 15% del peso de nacido máximo',
                correct: false
            },
            {
                respuesta: 'El 7% del peso de nacido máximo',
                correct: false
            },
            {
                respuesta: 'El 10 % del peso de nacido máximo',
                correct: true
            }
        ],
        explicacion: '¡Esto debe ser súper riguroso!  ES NORMAL QUE PIERDAN PESO PERO NO DEBEN PERDER MÁS DEL 10%.',
        urlImage: './src/assets/Test-Lili-Pregunata-nueve-Al-nacer-los-bebés-pierden.jpg'
    },
    {
        pregunta:'Durante el embarazo debes prepararte para la lactancia...',
        respuestas: [
            {
                respuesta: 'Revisando los pezones',
                correct: false
            },
            {
                respuesta: 'Organizando la habitación',
                correct: false
            },
            {
                respuesta: 'Comprando el extractor',
                correct: false
            },
            {
                respuesta: 'Con la información recibida, el grupo familiar y al grupo de apoyo de lactancia',
                correct: true
            }
        ],
        explicacion: 'Cuando nos dicen que estamos embarazadas y pensamos en todo lo que necesitamos está afuera, pero en la lactancia no necesitas nada de afuera. Necesitas tu grupo familiar, tu conocimiento, aclarar tus miedos y tus desafíos propios, eso es la lactancia, prepararte y preparar a la familia para los nuevos retos.',
        urlImage: './src/assets/Test-Lili-Pregunata-diez-Durante-el-embarazo-debes-prepararte-para-la-lactancia.jpg'
    },
]

const valoresRespuestas = [
    {
        opcion: "Aún te falta prepararte para la llegada de tu bebé! resuelve muchas dudas en mis videotutoriales, blogs y/o podcast. Tambien puedes agendar una consulta para seguir aprendiendo.",
        puntaje: [0, 1, 2, 3]
    },
    {
        opcion: "Estas informada pero aún te falta repasar algunos temas para la llegada de tu bebé. Encuentra en mis videotutoriales, blogs y/o podcast toda la información ideal para estar 100% lista!",
        puntaje: [4, 5, 6, 7]
    },
    {
        opcion: "Felicitaciones! estas lista para el primer paso con tu bebé! una excelente nutrición y crear lazos fuertes es indispensable estos primeros 5 días! Puedes complementar esta información con los podcast, blogs y/o videotutoriales en mi página, para que sepas que viene después en el camino de la lactancia materna!",
        puntaje: [8, 9, 10]
    }
]

/*********************** Bloque de código para renderizar las preguntas  ********************/

/* Llamados a los objetos del DOM, de uso global */
const divRender = document.getElementById('render')

/* Funciones */

/* Función que recorre cada una de las opciones de cada pregunta para poder renderizarlas */
const fnOpciones = (opciones) =>
    opciones
        .map((opcion, index) => {
        let infoOpciones = `
        <button class="options" data-index="${index}">${opcion.respuesta}</button>
        `
        return infoOpciones
    }).join('');


/* Función que devuelve la respuesta correcta para pintarla*/
const respuestaCorrecta = (opciones) => {
    let respuesta;
    opciones.forEach(opcion => {
        if(opcion.correct){
            respuesta = opcion.respuesta
        }
    })
    return respuesta
}

/* Método para volver aleatorio un array  */
Array.prototype.aleatorio = function() {
    for ( let i = this.length-1; i > 0; i-- ) {
        let random = Math.floor( Math.random() * i );
        let tmp = this[ random ];
        this[ random ] = this[ i ];
        this[ i ] = tmp;
    }
    return this;
}


/* Función que recorre cada uno de los objetos del array "preguntas" creando el template para poder renderizarlos */


const fnPreguntas = () =>
    preguntas
        .aleatorio()
        .map(
            (pregunta, index) => `
                <div class="dinamico" data-index="${index+1}">
                    <article class="quest">
                        <p class="sub" >
                            Test ¿Estás preparada para la llegada de tu bebé?
                        </p>
                        <section class="container">
                            <div class="question" data-index="${index}">
                                ${pregunta.pregunta}
                            </div>
                            <div class="buttons">
                                ${fnOpciones(pregunta.respuestas)}
                            </div>
                            <div class="answer hide">
                                <p class="right">
                                    Respuesta: <span class="right__text">
                                        ${respuestaCorrecta(pregunta.respuestas)}
                                    </span>
                                </p>
                                <p class="exp">
                                    ${pregunta.explicacion}
                                </p>
                            </div>
                        </section>
                        <div class="numberCel">
                            <span class="index">
                                ${index + 1}
                            </span>/${preguntas.length}</div>
                        <button class="next"> Siguiente <img src="./src/assets/right-arrow.svg" alt="" class="arrow"> </button>
                    </article>
                    <figure class="image">
                        <img src="${pregunta.urlImage}"
                            alt="mujer embarazada" class="pic">
                        <div class="number"><span class="index">${index + 1}</span>/${preguntas.length}</div>
                    </figure>
                </div>
            `
        )
        .reverse()
        .join("")
    /* Tuve que revertir el array debido a que cuando les doy posición absoluta a los elementos la pregunta 10 al ser la última en rederizarse pasa a ser la primera */

/* Función encargada de renderizar en pantalla todos los elementos */
const render = () => {
    divRender.innerHTML = fnPreguntas()
}

/* Ejecución de funciones */
render()


/*********** Bloque de código para validar la respuesta correcta. Debe ejecutarse todo al final ya que hay que esperar que renderice todo primero *******************/

/* Llamado de elementos al DOM */
const options = document.querySelectorAll('.options')


/* Funciones */
/* Función para buscar padre */
const buscarPadre = (respuesta) => respuesta.closest('.dinamico')

/* Función mostrar respuesta */
const mostrarRespuesta = (respuesta) => {
    const answer = buscarPadre(respuesta).querySelector('.answer')
    answer.classList.remove('hide')
    setTimeout(()=>{
        answer.classList.add('show')
    }, 300)
}

/* Función para validar que no haya más respuestas */
const noHayRespuestas = (options) => {
    let hayRespuesta = false
    options.forEach(option => {
        if(option.classList.contains('error') || option.classList.contains('correct')){
            hayRespuesta = true
        }
    })
    /* Descomentar las siguientes líneas si quieren desabilitar los botones en vez de que aparezca el alert */
    // options.forEach(option => {
    //     option.setAttribute('disabled', 'disabled')
    // })
    return hayRespuesta
}

/* Función para validar si la respuesta es correcta o no */
let contadorRespuestasCorrectas = 0
const calculoPorcentaje = () => contadorRespuestasCorrectas*preguntas.length

const validarRespuesta = (e) => {
    const respuesta = e.target
    const question = buscarPadre(respuesta).querySelector('.question')
    const respuestaCorrecta = preguntas[question.dataset.index].respuestas[respuesta.dataset.index].correct
    const options = buscarPadre(respuesta).querySelectorAll('.options')
    const hayRespuesta = noHayRespuestas(options)
    if(!respuestaCorrecta && !hayRespuesta){
        respuesta.classList.add('error')
        mostrarRespuesta(respuesta)
    }else if(respuestaCorrecta && !hayRespuesta){
        respuesta.classList.add('correct')
        mostrarRespuesta(respuesta)
        contadorRespuestasCorrectas += 1

    }else{
        respuesta.setAttribute('disabled', 'disabled')
        /*
        Modificar el mensaje del alert acá
            "Mensaje en negritas", "Mensaje largo", "Icono*"
            *se pueden usar los siguientes mensajes:
                -error (sale una x)
                -success (sale un chulito)
                -info (sale signo admiración apertura)
                -warning (sale signo admiración cierre)
            más info, documentación sweet alert:
                https://sweetalert.js.org/guides/#installation
        */
        swal("Hey!","Solo una respuesta por pregunta", "error");
    }
}

/* Ejecución de la función */
options.forEach(option => {
    option.addEventListener('click', validarRespuesta)

})


/************* Bloque de código para medir la barra de progreso ***************/

const numero = document.getElementById('numero')
const barraProgreso = ( ) => {
    const progressValue = document.getElementById('progressValue')
    progressValue.style.transition = "all 2s ease-out"
    progressValue.style.width = `${calculoPorcentaje()}%`
}

const numeroProgreso= (current, target) => {
    numero.innerText = `${current}%`;

    if (current === target) return;

    setTimeout(() => {
        numeroProgreso(current + 1, target);
    }, 30);
};





/********************  Bloque de código para pasar a la siguiente pregunta ****************/

/* Obtener objetos de uso global del DOM */
const btnsSiguiente = document.querySelectorAll('.next')
const resultado = document.getElementById('resultado')


/* Función para pasar a la siguiente pregunta */
const siguientePregunta = (e) => {
    const btnSiguiente = e.target
    const padre = buscarPadre(btnSiguiente)
    const options = buscarPadre(padre).querySelectorAll('.options')
    const dinamico = document.querySelectorAll('.dinamico')
    if(noHayRespuestas(options)){
        padre.classList.add('hideQuestion')
        setTimeout(()=>{
            padre.classList.add('hide')
        }, 500)
        /* Para obtener la siguiente pregunta tomé la posición actual del elemento alojado en el data-index, para traer todo el array con las preguntas y decirle que me devuelva el último elemento basado en la posición del elemento actual, esto se hace así, dado que tuve que revertir el orden del array en la función de render */
        const posicion = parseInt(padre.dataset.index)+1
        let siguiente = dinamico[dinamico.length-posicion]
        if(siguiente == undefined){
            resultado.classList.remove('hide')
            setTimeout(()=>{
                resultado.classList.add('showResultado')
            }, 500)
            setTimeout(()=>{
                barraProgreso()
                numeroProgreso(0, calculoPorcentaje())
            }, 500)
            setTimeout(()=>{
                cargarResultadoTexto()
            }, 1000)
        }else{
            siguiente.classList.add('show')
        }
    }else{
        swal('¡Espera!', 'Debes responder la pregunta', 'warning')
    }
}

/* Ejecución de la función */
btnsSiguiente.forEach(btn => {
    btn.addEventListener('click', siguientePregunta)
})



/***************** Este bloque de texto inicia el test, es el intro ****************/

/* Elementos globales del DOM */
const btnInicio = document.getElementById('btnInicio')

/* Función y ejecución */
btnInicio.addEventListener('click', () => {
    const padre = btnInicio.closest('.render')
    padre.classList.add('hideQuestion')
    setTimeout(() => {
        padre.classList.add('hide')
    }, 500)

    const dinamico = document.querySelectorAll('.dinamico')
    dinamico[dinamico.length-1].classList.add('show')
})


/* Bloque de código para mostrar las respuestas */
const resultadoTexto = document.getElementById('resultadoTexto')

const cargarResultadoTexto = function () {

    valoresRespuestas.forEach(respuesta => {
        respuesta.puntaje.forEach(puntaje => {
            if(puntaje == contadorRespuestasCorrectas){
                resultadoTexto.innerText = respuesta.opcion
            }
        })
    })
}







/* Bloque de codigo que vuelve al inicio */
const volver = document.getElementById('volver')
volver.addEventListener('click', ()=>{
    location.reload()
})















