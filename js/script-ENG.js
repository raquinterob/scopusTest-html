/* Objeto con todas las preguntas */
const preguntas =[
    {
        pregunta:'<p>Latin America is a hotspot for corruption and nepotism.</p><ul><li>How sure are you in your company that you will not suffer losses through corruption and nepotism?</li></ul>',
        respuestas: [
            {
                respuesta: 'Sure',
                correct: true
            },
            {
                respuesta: 'Not so sure',
                correct: false
            }
        ],
        explicacion: 'Our legal, auditing, and financial experts ensure that you not only avoid corruption, but also local and international regulations (taxes, finance, occupational safety, competition law, the environment and much more.)',
        urlImage: 'http://scopus-partners.com/wp-content/uploads/test-scopus/assets/IntroTest.jpg'
    },
    {
        pregunta: "<p>Inefficiencies, unnecessary, and labor-intensive processes are common.</p><ul><li>Have you already received irrational and difficult to understand reasons for processes and facts from your local managers?</li><li>Do you know the local requirements and how they affect your organization?</li><li>Are you sure that your processes in Latin America pose no risks?</li><li>Are your processes and procedures efficient and effective?</li><li>Do you have any doubts about the integrity of employees in your company in Latin America?</li>",
        respuestas: [
            {
                respuesta: 'Sure',
                correct: true
            },
            {
                respuesta: 'Not so sure',
                correct: false
            }
        ],
        explicacion: 'Our auditors (auditors and internal auditors) analyze your organization and processes and ensure that these are efficient, effective and in accordance with national and international legislation. Our anti-fraud specialists identify weaknesses and personal risks.',
        urlImage: 'http://scopus-partners.com/wp-content/uploads/test-scopus/assets/IntroTest.jpg'
    },
    {
        pregunta:'<p>In the growth market Latin America offers a wide range of investments and takeovers of companies.</p><ul><li>Do you want to consolidate and safely expand your business activities?</li><li>Do you know the value of your own company and any investment objects including hidden, latent risks?</li>',
        respuestas: [
            {
                respuesta: 'Yes',
                correct: true
            },
            {
                respuesta: 'No',
                correct: false
            }
        ],
        explicacion: 'Work with local, inexpensive corporate finance and M&A specialists. We also know the cultural soft facts and risks that have to be taken into account as well as the mathematically calculated value of an investment.',
        urlImage: 'http://scopus-partners.com/wp-content/uploads/test-scopus/assets/IntroTest.jpg'
    },
    {
        pregunta:'<p>Personnel changes, fluctuations and absences are particularly pronounced here. Recruiting suitable leaders is difficult and time-consuming.</p><ul><li>Are you certain about the competence and trustworthiness of your executives?</li><li>Is your organization prepared for staff failures and fluctuations?</li></ul>',
        respuestas: [
            {
                respuesta: 'Yes',
                correct: true
            },
            {
                respuesta: 'No',
                correct: false
            }
        ],
        explicacion: 'As experienced management staff in leading multinational companies and as lead auditors, we can immediately take on financial and operational responsibility and ensure the smooth progress of business.',
        urlImage: 'http://scopus-partners.com/wp-content/uploads/test-scopus/assets/IntroTest.jpg'
    },
    {
        pregunta:'<p>International accounting standards and corporate guidelines diverge greatly from local guidelines. Incorrect and delayed reporting to the parent company can often be found.</p><ul><li>Have there already been errors in reporting to the parent company?</li><li>Have you already noticed cost overruns on the part of external auditors?</li><li>Did you have delays in reporting or implausible information and thus additional work?</li><li>Have trustworthy financial metrics that give you an overview of the local situation?</li></ul>',
        respuestas: [
            {
                respuesta: 'Yes',
                correct: false
            },
            {
                respuesta: 'No',
                correct: true
            }
        ],
        explicacion: 'Our experts in international accounting and financial reporting reduce costly and time-consuming clarifications and audit costs.',
        urlImage: 'http://scopus-partners.com/wp-content/uploads/test-scopus/assets/IntroTest.jpg'
    },
]

const valoresRespuestas = [
    {
        opcion: "Your company is exposed to a very high risk. Contact us and get advice.",
        puntaje: [0, 1, 2,]
    },
    {
        opcion: "Your company is exposed to a medium risk. Contact us and get advice.",
        puntaje: [3, 4]
    },
    {
        opcion: "Good job! Your company is exposed to low risk. You can optimize your processes and projects with our support",
        puntaje: [5]
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
                            TEST: Is your company ready to work in Latin America?
                        </p>
                        <section class="container">
                            <div class="question" data-index="${index}">
                                ${pregunta.pregunta}
                            </div>
                            <div class="buttons">
                                ${fnOpciones(pregunta.respuestas)}
                            </div>
                            <div class="answer hide">
                                <!--<p class="right">
                                    Respuesta: <span class="right__text">
                                        /*${respuestaCorrecta(pregunta.respuestas)}*/
                                    </span>
                                </p>-->
                                <p class="exp">
                                    ${pregunta.explicacion}
                                </p>
                            </div>
                        </section>
                        <div class="numberCel">
                            <span class="index">
                                ${index + 1}
                            </span>/${preguntas.length}</div>
                        <button class="next"> Next <img src="http://scopus-partners.com/wp-content/uploads/test-scopus/assets/right-arrow.svg" alt="" class="arrow"> </button>
                    </article>
                    <figure class="image">
                        <img src="${pregunta.urlImage}"
                            alt="Scopus Test" class="pic">
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
const calculoPorcentaje = () => (contadorRespuestasCorrectas*100)/preguntas.length

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
        swal("Oops!","Only one answer per question", "error");
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


console.log("Cantidad Preguntas: "+preguntas.length)


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
        swal('Wait!', 'You must first answer the question', 'warning')
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
