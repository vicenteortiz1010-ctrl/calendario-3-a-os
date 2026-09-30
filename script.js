// ==========================================
// CALENDARIO DE 3 AÑOS ❤️
// ==========================================


// ==========================================
// SUPABASE
// ==========================================

const SUPABASE_URL =
    "https://wmvfddfbofslycvkldaq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_sxsewzWeWtY3j7IyD9PooQ_AadQog1f";

const clienteSupabase =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ==========================================
// DÍAS DESBLOQUEADOS
// ==========================================

let diasDesbloqueados = new Set();

try {

    const guardados =
        JSON.parse(
            localStorage.getItem(
                "diasDesbloqueados"
            ) || "[]"
        );

    diasDesbloqueados =
        new Set(guardados);

} catch (error) {

    diasDesbloqueados =
        new Set();

}


// ==========================================
// DATOS DE LOS 24 DÍAS
// ==========================================

const dias = [

    {
        numero: 1,
        emoji: "❤️",
        titulo: "Bienvenida a nuestro calendario",
        contenido: `
            <p>Cora… bienvenida a nuestro calendario ❤️</p>
            <p>Hoy comienza una pequeña aventura hecha especialmente para ti.</p>
            <p>24 días, 24 sorpresas y un montón de recuerdos nuestros.</p>
        `
    },


    {
        numero: 2,
        emoji: "🐱",
        titulo: "Black tiene algo que decir",
        contenido: `
            <div class="dia-contenido">

                <img
                    src="./recursos/fotos/dia2.jpg"
                    alt="Black, el protagonista del día"
                    style="
                        display: block;
                        width: 100%;
                        max-width: 650px;
                        height: auto;
                        margin: 0 auto 25px auto;
                        border-radius: 18px;
                    "
                >

                <p>Holaaa, Coazoooooon 🐱❤️</p>

                <p>Hoy le toca a Black ser el protagonista. Así que ponte cómoda, porque tengo algo que decirte…</p>

                <p>Aunque, siendo sincero, primero quiero que me des un poquito de cariño. 😽❤️</p>

                <p>Y bueno, ya que tengo tu atención, quiero decirte algo…</p>

                <p>Gracias por quererme tanto, por regalonearme y por tenerme tanta paciencia, incluso cuando me pongo mañoso. 🐾</p>

                <p>Aunque a veces me haga el dormido y parezca que no pesco a nadie, siempre me gusta estar cerquita de ti.</p>

                <p>Aunque tampoco puedo prometer que me quedaré quieto mucho rato, porque ya sabes cómo soy. 😂</p>

                <p>Cuando me da la hiperactividad, me pongo a subir y bajar la escalera como si estuviera compitiendo en una carrera. 🏃‍♂️💨</p>

                <p>Después me da por pelear con la silla, porque aparentemente tenemos asuntos pendientes que resolver. 😾🪑</p>

                <p>Y cuando ya me canso de tanta aventura, me escondo en mi cajita, mi lugar secreto donde nadie puede molestarme. 📦🐱</p>

                <p>Aunque mi especialidad es escaparme entre las piernas de la abuela Black, tu mamá, sin que siquiera se dé cuenta. JAJAJA. 😂🐾</p>

                <p>Pero no te preocupes, que aunque a veces parezca que quiero más a tu humano favorito, <strong>tú eres mi favorita.</strong> ❤️</p>

                <p>Así que hoy te mando muchos ronroneos, un abrazo de esos que solo yo sé darte y un recordatorio: ¡no te olvides de regalonearme mucho! 😽❤️</p>

                <p><strong>Atentamente: Black, tu gato favorito y el dueño oficial de la casa. 🐱👑</strong></p>

            </div>
        `
    },


    {
        numero: 3,
        emoji: "🐱📸",
        titulo: "Misión Black",
        contenido: `
            <div class="dia-contenido">

                <p>Holaaaa, Coazoooooon ❤️🐱</p>

                <p>Hoy tienes una misión muy importante: ¡conseguir tres fotos de tu modelo favorito! 😂📸</p>

                <p><strong>🎯 MISIÓN BLACK</strong></p>

                <p>🐱 1. Una foto de Black acostado boca arriba.</p>

                <p>😹 2. Una foto de Black estornudando o bostezando.</p>

                <p>🐾 3. Una foto de Black con una patita estirada.</p>

                <p>Cuando consigas las tres fotos, ¡misión cumplida! 🏆❤️</p>

                <p>Y como toda buena misión tiene su recompensa, te ganaste un vale. 🎟️💌</p>

                <p><strong>¡Mucha suerte, mami! Atentamente, Black. 🐱👑</strong></p>

                <hr style="border: none; border-top: 1px solid #e8b8cc; margin: 25px 0;">

                <p><strong>🎟️ Tu premio ❤️</strong></p>

                <p>Tú eliges qué comemos y yo me encargo de regalonearte. ❤️</p>

                <img
                    src="./recursos/fotos/vale-dia3.png"
                    alt="Vale por una comida a tu elección"
                    style="
                        display: block;
                        width: 100%;
                        max-width: 650px;
                        height: auto;
                        margin: 20px auto;
                        border-radius: 12px;
                    "
                >

                <p style="text-align: center;">
                    Cuando quieras canjearlo, sácale una captura y mándamela por WhatsApp. ❤️
                </p>

            </div>
        `
    },


    {
        numero: 4,
        emoji: "💋",
        titulo: "¿Te puedo dar un beso?",
        contenido: `
            <div id="pregunta-beso-dia4" style="text-align: center;">

                <h2>¿Te puedo dar un beso? 💋❤️</h2>

                <div style="
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    flex-wrap: wrap;
                    margin: 25px 0;
                ">

                    <button
                        onclick="
                            document.getElementById('pregunta-beso-dia4').style.display='none';
                            document.getElementById('recuerdo-patos-dia4').style.display='block';
                        "
                    >
                        Sí ❤️
                    </button>

                    <button
                        onclick="
                            document.getElementById('pregunta-beso-dia4').style.display='none';
                            document.getElementById('recuerdo-patos-dia4').style.display='block';
                        "
                    >
                        Por supuesto 😘
                    </button>

                </div>

            </div>

            <div
                id="recuerdo-patos-dia4"
                style="
                    display: none;
                    text-align: center;
                "
            >

                <p>¿Te acuerdas de los patos? JAJAJA. 🦆❤️</p>

                <p>
                    Quién diría que, mientras empezábamos a conocernos,
                    terminaríamos inventando una historia de patos
                    para que mi mamá no sospechara tanto. 😂
                </p>

                <p>
                    En ese momento quizás parecía una simple excusa,
                    pero ahora es uno de esos recuerdos que me hacen
                    sonreír cuando pienso en nosotros.
                </p>

                <p>
                    Me encanta recordar cómo empezó todo,
                    las pequeñas locuras que hicimos y cómo,
                    sin darnos cuenta, fuimos construyendo nuestra historia.
                </p>

                <p>
                    Porque a veces los recuerdos más especiales nacen
                    de las cosas más inesperadas. Y este es uno de los míos contigo. ❤️
                </p>

                <img
                    src="./recursos/fotos/dia4-patos.jpg"
                    alt="Nuestro recuerdo de los patos"
                    style="
                        display: block;
                        width: 100%;
                        max-width: 450px;
                        height: auto;
                        margin: 20px auto;
                        border-radius: 12px;
                    "
                />

            </div>
        `
    },


    // ==========================================
    // DÍA 5
    // ==========================================

    {
        numero: 5,
        emoji: "😂",
        titulo: "Para reírnos un rato",
        contenido: `

            <div class="grande">
                😂🐱
            </div>

            <p>
                Hoy tenemos una misión un poquito ridícula...
            </p>

            <p>
                Pero considerando que estamos hablando de Black,
                creo que es completamente apropiado. 😂
            </p>

            <div class="separador"></div>

            <h3>
                🐱 Misión: Black vs. la silla
            </h3>

            <p>
                Quiero que me mandes un video haciendo la voz de Black
                mientras pelea con la silla.
            </p>

            <p>
                Sí...
                <strong>tienes que hacer la voz de Black. 😂</strong>
            </p>

            <p>
                No importa si queda ridículo.
                De hecho, mientras más ridículo, mejor.
            </p>

            <div class="mensaje-final">

                <strong>
                    Cuando hayas cumplido la misión,
                    mándame el video y espera tu recompensa. 👀❤️
                </strong>

            </div>


            <div
                id="zonaCodigoDia5"
                style="
                    margin-top: 30px;
                    text-align: center;
                "
            >

                <div class="separador"></div>

                <h3>
                    🔐 ¿Ya cumpliste la misión?
                </h3>

                <p>
                    Si ya me mandaste el video y recibiste tu código,
                    ingrésalo aquí para desbloquear tu premio.
                </p>

                <input
                    type="password"
                    id="codigoDia5"
                    maxlength="4"
                    inputmode="numeric"
                    autocomplete="off"
                    placeholder="Código"
                    style="
                        display: block;
                        width: 180px;
                        margin: 20px auto 10px;
                        padding: 12px;
                        text-align: center;
                        font-size: 20px;
                        border-radius: 12px;
                        border: 1px solid #ccc;
                        letter-spacing: 5px;
                    "
                >

                <button
                    class="boton-accion"
                    onclick="desbloquearPremioDia5()"
                >
                    Desbloquear premio
                </button>

                <p
                    id="errorDia5"
                    style="
                        display: none;
                        margin-top: 12px;
                        color: #b23a48;
                        font-weight: bold;
                    "
                >
                    Código incorrecto.
                </p>

            </div>


            <!-- ==================================
                 PREMIO DÍA 5
                 OCULTO HASTA INGRESAR 2468
                 ================================== -->

            <div
                id="premioDia5"
                hidden
                style="
                    display: none !important;
                    text-align: center;
                    margin-top: 30px;
                "
            >

                <div class="separador"></div>

                <div class="grande">
                    💵💸💰🤑💵
                </div>

                <h3>
                    ¡MISIÓN CUMPLIDA!
                </h3>

                <p>
                    Has demostrado oficialmente que estás dispuesta
                    a hacer el ridículo por amor. 😂
                </p>

                <div class="mensaje-final">

                    <p>
                        💵 <strong>PREMIO DESBLOQUEADO</strong> 💵
                    </p>

                    <p>
                        Este vale es por una salida al mall conmigo. ❤️
                    </p>

                    <p>
                        Puedes elegir
                        <strong>lo que tú quieras</strong>
                        del mall.
                    </p>

                    <p>
                        💳 <strong>Vale por $50.000</strong>
                    </p>

                    <p>
                        La única condición es que yo voy contigo. 😌❤️
                    </p>

                    <p>
                        Así que guarda bien este premio...
                        porque después de semejante actuación de Black,
                        <strong>te lo ganaste. 😂</strong>
                    </p>

                </div>

            </div>

        `
    },


    // ==========================================
    // DÍA 6
    // ==========================================

    {
        numero: 6,
        emoji: "🚪❤️",
        titulo: "Una cita especial",
        contenido: `
            <div
                id="contenidoDia6"
                style="
                    text-align: center;
                "
            >

                <p>
                    Hoy no hay una misión.
                    Tampoco hay pistas. 👀
                </p>

                <p>
                    Solo quiero que hagas una cosa...
                </p>

                <button
                    class="boton-accion"
                    onclick="sorpresaDia6()"
                >
                    🚪 Abrir la puerta
                </button>

                <div
                    id="sorpresaDia6"
                    style="
                        display: none;
                        margin-top: 30px;
                    "
                >

                    <div class="grande">
                        ❤️
                    </div>

                    <h2>
                        ¡Sorpresa! ❤️
                    </h2>

                    <p>
                        <strong>
                            Abre la puerta.
                        </strong>
                    </p>

                    <p>
                        Estoy afuera. 👀
                    </p>

                </div>

            </div>
        `
    },


    {
        numero: 7,
        emoji: "🐱",
        titulo: "Black en modo modelo",
        contenido: `
            <p>Hoy vuelve nuestro modelo oficial 🐱📸</p>
        `
    },


    {
        numero: 8,
        emoji: "💌",
        titulo: "Un mensaje para ti",
        contenido: `
            <p>Hay cosas que quizás no digo todos los días…</p>
            <p>pero que siento muchísimo. ❤️</p>
        `
    },


    {
        numero: 9,
        emoji: "📸",
        titulo: "Una foto especial",
        contenido: `
            <p>Una pequeña cápsula de uno de nuestros recuerdos. ❤️</p>
        `
    },


    {
        numero: 10,
        emoji: "🎤",
        titulo: "Momento inesperado",
        contenido: `
            <p>Hoy toca algo un poquito diferente 👀</p>
        `
    },


    {
        numero: 11,
        emoji: "🧩",
        titulo: "Un pequeño desafío",
        contenido: `
            <p>Hoy tienes un desafío 🧩</p>
            <p>Piensa bien… porque esta vez no será tan fácil.</p>
        `
    },


    {
        numero: 12,
        emoji: "😂",
        titulo: "Porque somos nosotros",
        contenido: `
            <p>Otro recuerdo para reírnos juntos 😂❤️</p>
        `
    },


    {
        numero: 13,
        emoji: "🍣❤️",
        titulo: "Cita romántica: hacer sushi juntos",
        contenido: `
            <p>Hoy tenemos una misión 🍣❤️</p>
            <p>Hacer sushi juntos.</p>
        `
    },


    {
        numero: 14,
        emoji: "🏆",
        titulo: "Nuestra pequeña competencia",
        contenido: `
            <p>Porque juntos también sabemos competir 😂🏆</p>
        `
    },


    {
        numero: 15,
        emoji: "🌹",
        titulo: "Una rosa para ti",
        contenido: `
            <p>Una rosa para la persona que hace mis días mucho más bonitos. 🌹❤️</p>
        `
    },


    {
        numero: 16,
        emoji: "🥰",
        titulo: "Un momento para nosotros",
        contenido: `
            <p>Hoy simplemente quiero recordarte cuánto te quiero. 🥰❤️</p>
        `
    },


    {
        numero: 17,
        emoji: "🐱💌",
        titulo: "Black tiene algo que decir",
        contenido: `
            <p>Black tiene algo que decirte… 🐱</p>
            <p>Y además hoy tendrás que mandarme 3 fotos tuyas. ❤️</p>
        `
    },


    {
        numero: 18,
        emoji: "🎟️❤️",
        titulo: "Vale por algo que tú quieras",
        contenido: `
            <p>Este vale es para que tú elijas qué hacemos. ❤️</p>
        `
    },


    {
        numero: 19,
        emoji: "📸",
        titulo: "Un recuerdo más",
        contenido: `
            <p>Porque tres años están llenos de pequeños momentos que valen muchísimo. ❤️</p>
        `
    },


    {
        numero: 20,
        emoji: "🎬",
        titulo: "Nuestra historia",
        contenido: `
            <p>Hoy toca recordar una parte de nuestra historia. 🎬❤️</p>
        `
    },


    {
        numero: 21,
        emoji: "🐱❤️",
        titulo: "Un poco de locura",
        contenido: `
            <p>Un poco de locura para el amor más loco y hermoso que he tenido… ❤️</p>
            <p>Y obviamente Panchita también tenía que aparecer. 🐱</p>
        `
    },


    {
        numero: 22,
        emoji: "😂",
        titulo: "Nosotros siendo nosotros",
        contenido: `
            <p>Porque después de tres años todavía encontramos formas de hacernos reír. 😂❤️</p>
        `
    },


    {
        numero: 23,
        emoji: "🔐",
        titulo: "Mañana es el gran día",
        contenido: `
            <p>Ya casi llegamos… 👀❤️</p>
            <p>Mañana es nuestro día.</p>
        `
    },


    {
        numero: 24,
        emoji: "🎂❤️",
        titulo: "Nuestros 3 años",
        contenido: `
            <p>24 de septiembre ❤️</p>
            <p>Tres años de nosotros.</p>
            <p>Gracias por cada momento, cada risa, cada abrazo y cada recuerdo.</p>
            <p>Te amo. ❤️</p>
        `
    }

];


// ==========================================
// ELEMENTOS HTML
// ==========================================

const portada =
    document.getElementById("portada");

const calendario =
    document.getElementById("calendario");

const botonComenzar =
    document.getElementById("botonComenzar");

const casillas =
    document.querySelector(".casillas");

const modal =
    document.getElementById("modal");

const cerrar =
    document.getElementById("cerrar");

const modalEmoji =
    document.getElementById("modalEmoji");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalTexto =
    document.getElementById("modalTexto");

const recompensaDesbloqueo =
    document.getElementById(
        "recompensaDesbloqueo"
    );

const recompensaDia =
    document.getElementById(
        "recompensaDia"
    );

const recompensaEmoji =
    document.getElementById(
        "recompensaEmoji"
    );

const recompensaTitulo =
    document.getElementById(
        "recompensaTitulo"
    );

const adminPanel =
    document.getElementById(
        "adminPanel"
    );

const adminDias =
    document.getElementById(
        "adminDias"
    );

const cerrarAdmin =
    document.getElementById(
        "cerrarAdmin"
    );

const bloquearTodosAdmin =
    document.getElementById(
        "bloquearTodosAdmin"
    );


// ==========================================
// CARGAR DESDE SUPABASE
// ==========================================

async function cargarDiasDesdeSupabase() {

    try {

        const {
            data,
            error
        } = await clienteSupabase
            .from("desbloqueos")
            .select(
                "id, dia, desbloqueado"
            );

        if (error) {
            throw error;
        }

        diasDesbloqueados.clear();

        if (data) {

            data.forEach(
                registro => {

                    if (
                        registro.desbloqueado === true
                    ) {

                        diasDesbloqueados.add(
                            Number(
                                registro.dia
                            )
                        );

                    }

                }
            );

        }

        guardarDias();

        generarCalendario();

        actualizarAdmin();

        console.log(
            "Desbloqueos sincronizados con Supabase ❤️"
        );

    } catch (error) {

        console.error(
            "No se pudieron cargar los desbloqueos:",
            error
        );

    }

}


// ==========================================
// ESCUCHAR CAMBIOS EN TIEMPO REAL
// ==========================================

function iniciarSincronizacionTiempoReal() {

    console.log(
        "Iniciando sincronización en tiempo real ❤️"
    );

    clienteSupabase
        .channel("desbloqueos-tiempo-real")
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "desbloqueos"
            },
            payload => {

                console.log(
                    "CAMBIO RECIBIDO DESDE SUPABASE:",
                    payload
                );

                const registro =
                    payload.new ||
                    payload.old;

                if (!registro) {
                    return;
                }

                const numero =
                    Number(registro.dia);

                if (!numero) {
                    return;
                }

                const estabaDesbloqueado =
                    diasDesbloqueados.has(numero);

                const ahoraDesbloqueado =
                    payload.new &&
                    payload.new.desbloqueado === true;


                if (
                    ahoraDesbloqueado &&
                    !estabaDesbloqueado
                ) {

                    console.log(
                        "🎉 CAMBIO REMOTO DETECTADO PARA EL DÍA:",
                        numero
                    );

                    diasDesbloqueados.add(
                        numero
                    );

                    guardarDias();

                    generarCalendario();

                    actualizarAdmin();

                    const dia =
                        dias.find(
                            elemento =>
                                elemento.numero === numero
                        );

                    if (dia) {

                        lanzarConfeti();

                        mostrarRecompensa(
                            dia
                        );

                    }

                    return;
                }


                if (
                    !ahoraDesbloqueado &&
                    estabaDesbloqueado
                ) {

                    diasDesbloqueados.delete(
                        numero
                    );

                    guardarDias();

                    generarCalendario();

                    actualizarAdmin();

                }

            }
        )
        .subscribe(
            estado => {

                console.log(
                    "Estado Realtime:",
                    estado
                );

            }
        );

}


// ==========================================
// GUARDAR LOCALMENTE
// ==========================================

function guardarDias() {

    localStorage.setItem(
        "diasDesbloqueados",
        JSON.stringify(
            [...diasDesbloqueados]
        )
    );

}


// ==========================================
// GUARDAR EN SUPABASE
// ==========================================

async function guardarDiaEnSupabase(
    numero,
    desbloqueado
) {

    console.log(
        "INTENTANDO GUARDAR EN SUPABASE:",
        numero,
        desbloqueado
    );

    try {

        const {
            error
        } = await clienteSupabase
            .from("desbloqueos")
            .upsert(
                {
                    id: numero,
                    dia: numero,
                    desbloqueado:
                        desbloqueado
                },
                {
                    onConflict: "id"
                }
            );

        if (error) {

            console.error(
                "ERROR AL GUARDAR:",
                error
            );

            return false;

        }

        console.log(
            "GUARDADO CORRECTAMENTE:",
            numero
        );

        return true;

    } catch (error) {

        console.error(
            "ERROR DE CONEXIÓN:",
            error
        );

        return false;

    }

}


// ==========================================
// COMENZAR
// ==========================================

function comenzarCalendario() {

    portada.style.display =
        "none";

    calendario.style.display =
        "block";

    if (!diasDesbloqueados.has(1)) {

        desbloquearDia(
            1,
            true
        );

    } else {

        generarCalendario();

    }

}


// ==========================================
// GENERAR CALENDARIO
// ==========================================

function generarCalendario() {

    if (!casillas) {
        return;
    }

    casillas.innerHTML = "";

    dias.forEach(
        dia => {

            const caja =
                document.createElement(
                    "button"
                );

            caja.className =
                "caja";

            if (
                diasDesbloqueados.has(
                    dia.numero
                )
            ) {

                caja.classList.add(
                    "desbloqueada"
                );

                caja.innerHTML = `
                    <span class="emoji-dia">
                        ${dia.emoji}
                    </span>

                    <span class="numero-dia">
                        Día ${dia.numero}
                    </span>

                    <span class="titulo-dia">
                        ${dia.titulo}
                    </span>
                `;

                caja.addEventListener(
                    "click",
                    () => abrirDia(dia)
                );

            } else {

                caja.classList.add(
                    "bloqueada"
                );

                caja.innerHTML = `
                    <span class="candado">
                        🔒
                    </span>

                    <span class="numero-dia">
                        Día ${dia.numero}
                    </span>
                `;

                caja.addEventListener(
                    "click",
                    mostrarBloqueado
                );

            }

            casillas.appendChild(
                caja
            );

        }
    );

}


// ==========================================
// ABRIR DÍA
// ==========================================

function abrirDia(dia) {

    modalEmoji.textContent =
        dia.emoji;

    modalTitulo.textContent =
        dia.titulo;

    modalTexto.innerHTML =
        dia.contenido;

    modal.classList.add(
        "activo"
    );

    if (
        dia.numero === 5
    ) {

        setTimeout(
            prepararPremioDia5,
            50
        );

    }

}


// ==========================================
// PREPARAR PREMIO DÍA 5
// ==========================================

function prepararPremioDia5() {

    const premio =
        document.getElementById(
            "premioDia5"
        );

    const zonaCodigo =
        document.getElementById(
            "zonaCodigoDia5"
        );

    if (!premio) {
        return;
    }


    // ==========================================
    // EL PREMIO SIEMPRE COMIENZA BLOQUEADO
    // ==========================================

    premio.hidden =
        true;

    premio.classList.remove(
        "oculto"
    );

    premio.style.setProperty(
        "display",
        "none",
        "important"
    );


    if (zonaCodigo) {

        zonaCodigo.style.setProperty(
            "display",
            "block",
            "important"
        );

    }

}


// ==========================================
// DESBLOQUEAR PREMIO DÍA 5
// ==========================================

function desbloquearPremioDia5() {

    const input =
        document.getElementById(
            "codigoDia5"
        );

    const error =
        document.getElementById(
            "errorDia5"
        );

    const premio =
        document.getElementById(
            "premioDia5"
        );

    const zonaCodigo =
        document.getElementById(
            "zonaCodigoDia5"
        );


    if (
        !input ||
        !premio
    ) {

        return;

    }


    const codigo =
        input.value.trim();


    // ==========================================
    // CÓDIGO CORRECTO
    // ==========================================

    if (
        codigo === "2468"
    ) {


        if (error) {

            error.style.setProperty(
                "display",
                "none",
                "important"
            );

        }


        if (zonaCodigo) {

            zonaCodigo.style.setProperty(
                "display",
                "none",
                "important"
            );

        }


        // ==========================================
        // MOSTRAR PREMIO
        // ==========================================

        premio.hidden =
            false;

        premio.classList.remove(
            "oculto"
        );

        premio.style.setProperty(
            "display",
            "block",
            "important"
        );


        // ==========================================
        // CONFETI DE DINERO
        // ==========================================

        lanzarConfetiDinero();


    } else {


        // ==========================================
        // CÓDIGO INCORRECTO
        // ==========================================

        if (error) {

            error.textContent =
                "Código incorrecto.";

            error.style.setProperty(
                "display",
                "block",
                "important"
            );

        }

        input.value = "";

        input.focus();

    }

}


// ==========================================
// MOSTRAR BLOQUEADO
// ==========================================

function mostrarBloqueado() {

    modalEmoji.textContent =
        "🔒";

    modalTitulo.textContent =
        "Todavía no es tiempo jajaja ❤️";

    modalTexto.innerHTML = `
        <p>
            Vas a tener que esperar un poquito más 👀
        </p>
    `;

    modal.classList.add(
        "activo"
    );

}


// ==========================================
// CERRAR MODAL
// ==========================================

cerrar.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "activo"
        );

    }
);

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "activo"
            );

        }

    }
);


// ==========================================
// DESBLOQUEAR DÍA
// ==========================================

async function desbloquearDia(
    numero,
    celebrar = true
) {

    const dia =
        dias.find(
            elemento =>
                elemento.numero === numero
        );

    if (!dia) {
        return;
    }

    diasDesbloqueados.add(
        numero
    );

    guardarDias();

    generarCalendario();

    actualizarAdmin();

    const guardado =
        await guardarDiaEnSupabase(
            numero,
            true
        );

    if (!guardado) {

        console.error(
            "No se pudo sincronizar el día."
        );

    }

    if (celebrar) {

        cerrarPanelAdministrador();

        lanzarConfeti();

        mostrarRecompensa(
            dia
        );

    }

}


// ==========================================
// RECOMPENSA
// ==========================================

function mostrarRecompensa(dia) {

    if (
        !recompensaDia ||
        !recompensaEmoji ||
        !recompensaTitulo ||
        !recompensaDesbloqueo
    ) {

        return;

    }

    recompensaDia.textContent =
        `DÍA ${dia.numero}`;

    recompensaEmoji.textContent =
        dia.emoji;

    recompensaTitulo.textContent =
        dia.titulo;

    recompensaDesbloqueo.classList.add(
        "activa"
    );

    setTimeout(
        () => {

            recompensaDesbloqueo.classList.remove(
                "activa"
            );

        },
        4000
    );

}


// ==========================================
// CONFETI NORMAL
// ==========================================

function lanzarConfeti() {

    console.log(
        "LANZANDO CONFETI ❤️"
    );

    const anterior =
        document.getElementById(
            "contenedorConfeti"
        );

    if (anterior) {
        anterior.remove();
    }

    const contenedor =
        document.createElement(
            "div"
        );

    contenedor.id =
        "contenedorConfeti";

    contenedor.style.position =
        "fixed";

    contenedor.style.left =
        "0px";

    contenedor.style.top =
        "0px";

    contenedor.style.width =
        "100%";

    contenedor.style.height =
        "100%";

    contenedor.style.zIndex =
        "2147483647";

    contenedor.style.pointerEvents =
        "none";

    contenedor.style.overflow =
        "hidden";

    contenedor.style.display =
        "block";

    document.body.appendChild(
        contenedor
    );


    const emojis = [
        "❤️",
        "💕",
        "💖",
        "✨",
        "🎉",
        "🎊",
        "🌹",
        "🥰"
    ];


    const piezas = [];

    const cantidad = 70;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const pieza =
            document.createElement(
                "div"
            );

        pieza.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        pieza.style.position =
            "absolute";

        pieza.style.left =
            (
                Math.random() *
                100
            ) + "%";

        pieza.style.top =
            "-50px";

        pieza.style.fontSize =
            (
                22 +
                Math.random() * 18
            ) + "px";

        pieza.style.lineHeight =
            "1";

        pieza.style.pointerEvents =
            "none";

        pieza.style.display =
            "block";

        pieza.style.visibility =
            "visible";

        pieza.style.opacity =
            "1";

        pieza.style.willChange =
            "transform";

        contenedor.appendChild(
            pieza
        );


        piezas.push({

            elemento: pieza,

            y:
                -50 -
                Math.random() * 400,

            x: 0,

            velocidad:
                1.5 +
                Math.random() * 3,

            balance:
                Math.random() *
                Math.PI *
                2,

            giro:
                -6 +
                Math.random() * 12,

            rotacion:
                Math.random() * 360,

            tiempo: 0

        });

    }


    let activo = true;


    const intervalo =
        setInterval(
            () => {

                if (!activo) {
                    return;
                }


                piezas.forEach(
                    pieza => {

                        pieza.tiempo += 1;

                        pieza.y +=
                            pieza.velocidad;

                        pieza.x =
                            Math.sin(
                                pieza.tiempo *
                                0.04 +
                                pieza.balance
                            ) *
                            35;

                        pieza.rotacion +=
                            pieza.giro;


                        pieza.elemento.style.transform =
                            "translate3d(" +
                            pieza.x +
                            "px, " +
                            pieza.y +
                            "px, 0) rotate(" +
                            pieza.rotacion +
                            "deg)";


                        if (
                            pieza.y >
                            window.innerHeight +
                            100
                        ) {

                            pieza.y =
                                -100;

                        }

                    }
                );

            },
            20
        );


    setTimeout(
        () => {

            activo = false;

            clearInterval(
                intervalo
            );

            if (
                contenedor.parentNode
            ) {

                contenedor.remove();

            }

        },
        7000
    );

}


// ==========================================
// CONFETI DE DINERO — DÍA 5
// ==========================================

function lanzarConfetiDinero() {

    console.log(
        "LANZANDO CONFETI DE DINERO 💵💸💰"
    );

    const anterior =
        document.getElementById(
            "contenedorConfetiDinero"
        );

    if (anterior) {
        anterior.remove();
    }

    const contenedor =
        document.createElement(
            "div"
        );

    contenedor.id =
        "contenedorConfetiDinero";

    contenedor.style.position =
        "fixed";

    contenedor.style.left =
        "0px";

    contenedor.style.top =
        "0px";

    contenedor.style.width =
        "100%";

    contenedor.style.height =
        "100%";

    contenedor.style.zIndex =
        "2147483647";

    contenedor.style.pointerEvents =
        "none";

    contenedor.style.overflow =
        "hidden";

    document.body.appendChild(
        contenedor
    );


    const emojisDinero = [
        "💵",
        "💸",
        "💰",
        "🤑",
        "💵",
        "💸",
        "💰"
    ];


    const piezas = [];

    const cantidad = 80;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const pieza =
            document.createElement(
                "div"
            );

        pieza.textContent =
            emojisDinero[
                Math.floor(
                    Math.random() *
                    emojisDinero.length
                )
            ];

        pieza.style.position =
            "absolute";

        pieza.style.left =
            (
                Math.random() *
                100
            ) + "%";

        pieza.style.top =
            (
                -80 -
                Math.random() * 500
            ) + "px";

        pieza.style.fontSize =
            (
                24 +
                Math.random() * 22
            ) + "px";

        pieza.style.lineHeight =
            "1";

        pieza.style.pointerEvents =
            "none";

        pieza.style.visibility =
            "visible";

        pieza.style.opacity =
            "1";

        pieza.style.willChange =
            "transform";

        contenedor.appendChild(
            pieza
        );


        piezas.push({

            elemento: pieza,

            y:
                -80 -
                Math.random() * 500,

            x: 0,

            velocidad:
                2 +
                Math.random() * 4,

            balance:
                Math.random() *
                Math.PI *
                2,

            giro:
                -8 +
                Math.random() * 16,

            rotacion:
                Math.random() * 360,

            tiempo: 0

        });

    }


    let activo = true;


    const intervalo =
        setInterval(
            () => {

                if (!activo) {
                    return;
                }


                piezas.forEach(
                    pieza => {

                        pieza.tiempo += 1;

                        pieza.y +=
                            pieza.velocidad;

                        pieza.x =
                            Math.sin(
                                pieza.tiempo *
                                0.05 +
                                pieza.balance
                            ) *
                            45;

                        pieza.rotacion +=
                            pieza.giro;


                        pieza.elemento.style.transform =
                            "translate3d(" +
                            pieza.x +
                            "px, " +
                            pieza.y +
                            "px, 0) rotate(" +
                            pieza.rotacion +
                            "deg)";


                        if (
                            pieza.y >
                            window.innerHeight +
                            100
                        ) {

                            pieza.y =
                                -120;

                        }

                    }
                );

            },
            20
        );


    setTimeout(
        () => {

            activo = false;

            clearInterval(
                intervalo
            );

            if (
                contenedor.parentNode
            ) {

                contenedor.remove();

            }

        },
        7000
    );

}


// ==========================================
// SORPRESA DÍA 6
// ==========================================

function sorpresaDia6() {

    const sorpresa =
        document.getElementById(
            "sorpresaDia6"
        );

    if (!sorpresa) {
        return;
    }

    sorpresa.style.display =
        "block";

}


// ==========================================
// PANEL ADMIN
// ==========================================

function abrirPanelAdmin() {

    if (!adminPanel) {
        return;
    }

    adminPanel.classList.add(
        "activo"
    );

    actualizarAdmin();

}


function cerrarPanelAdministrador() {

    if (!adminPanel) {
        return;
    }

    adminPanel.classList.remove(
        "activo"
    );

}


function actualizarAdmin() {

    if (!adminDias) {
        return;
    }

    adminDias.innerHTML = "";

    dias.forEach(
        dia => {

            const boton =
                document.createElement(
                    "button"
                );

            boton.className =
                "admin-dia";

            if (
                diasDesbloqueados.has(
                    dia.numero
                )
            ) {

                boton.classList.add(
                    "desbloqueado"
                );

                boton.textContent =
                    `🔓 Día ${dia.numero}`;

            } else {

                boton.textContent =
                    `🔒 Día ${dia.numero}`;

            }


            boton.addEventListener(
                "click",
                async () => {

                    if (
                        diasDesbloqueados.has(
                            dia.numero
                        )
                    ) {

                        diasDesbloqueados.delete(
                            dia.numero
                        );

                        guardarDias();

                        generarCalendario();

                        actualizarAdmin();

                        await guardarDiaEnSupabase(
                            dia.numero,
                            false
                        );

                    } else {

                        await desbloquearDia(
                            dia.numero,
                            true
                        );

                    }

                }
            );

            adminDias.appendChild(
                boton
            );

        }
    );

}


// ==========================================
// CERRAR ADMIN
// ==========================================

if (cerrarAdmin) {

    cerrarAdmin.addEventListener(
        "click",
        cerrarPanelAdministrador
    );

}


if (adminPanel) {

    adminPanel.addEventListener(
        "click",
        event => {

            if (
                event.target === adminPanel
            ) {

                cerrarPanelAdministrador();

            }

        }
    );

}


// ==========================================
// BLOQUEAR TODOS
// ==========================================

if (bloquearTodosAdmin) {

    bloquearTodosAdmin.addEventListener(
        "click",
        async () => {

            diasDesbloqueados.clear();

            guardarDias();

            generarCalendario();

            actualizarAdmin();


            for (
                const dia of dias
            ) {

                await guardarDiaEnSupabase(
                    dia.numero,
                    false
                );

            }

        }
    );

}


// ==========================================
// ATAJO SECRETO
// CTRL + SHIFT + A
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey &&
            event.shiftKey &&
            event.key.toLowerCase() === "a"
        ) {

            event.preventDefault();

            abrirPanelAdmin();

        }

    }
);


// ==========================================
// BOTÓN COMENZAR
// ==========================================

if (botonComenzar) {

    botonComenzar.addEventListener(
        "click",
        comenzarCalendario
    );

}


// ==========================================
// INICIAR
// ==========================================

generarCalendario();


// ==========================================
// SINCRONIZAR CON SUPABASE
// ==========================================

cargarDiasDesdeSupabase()
    .then(
        () => {

            iniciarSincronizacionTiempoReal();

        }
    );


// ==========================================
// HACER FUNCIONES DISPONIBLES
// ==========================================

window.comenzarCalendario =
    comenzarCalendario;

window.desbloquearDia =
    desbloquearDia;

window.abrirPanelAdmin =
    abrirPanelAdmin;

window.desbloquearPremioDia5 =
    desbloquearPremioDia5;

window.sorpresaDia6 =
    sorpresaDia6;