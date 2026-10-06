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
// CÓDIGO TEMPORAL DÍA 17
// ==========================================
// Este código se cambiará cuando tengamos
// las 5 fotos del Día 10 y definamos
// el código definitivo.

const CODIGO_DIA17 = "73916";


// ==========================================
// DATOS DE LOS 24 DÍAS
// ==========================================

const dias = [

    // ==========================================
    // DÍA 1
    // ==========================================

    {
        numero: 1,
        emoji: "❤️",
        titulo: "Bienvenida a nuestro calendario",
        contenido: `
            <p>Coazooon, bienvenida a nuestro calendario ❤️</p>

            <p>
                Hoy comienza una pequeña aventura
                hecha especialmente para ti.
            </p>

            <p>
                24 días, 24 sorpresas y un montón
                de recuerdos nuestros.
            </p>
        `
    },


    // ==========================================
    // DÍA 2
    // ==========================================

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

                <p>
                    Hoy le toca a Black ser el protagonista.
                    Así que ponte cómoda, porque tengo algo que decirte…
                </p>

                <p>
                    Aunque, siendo sincero, primero quiero
                    que me des un poquito de cariño. 😽❤️
                </p>

                <p>
                    Y bueno, ya que tengo tu atención,
                    quiero decirte algo…
                </p>

                <p>
                    Gracias por quererme tanto, por regalonearme
                    y por tenerme tanta paciencia, incluso cuando
                    me pongo mañoso. 🐾
                </p>

                <p>
                    Aunque a veces me haga el dormido y parezca
                    que no pesco a nadie, siempre me gusta estar
                    cerquita de ti.
                </p>

                <p>
                    Aunque tampoco puedo prometer que me quedaré
                    quieto mucho rato, porque ya sabes cómo soy. 😂
                </p>

                <p>
                    Cuando me da la hiperactividad, me pongo a subir
                    y bajar la escalera como si estuviera compitiendo
                    en una carrera. 🏃‍♂️💨
                </p>

                <p>
                    Después me da por pelear con la silla,
                    porque aparentemente tenemos asuntos pendientes
                    que resolver. 😾🪑
                </p>

                <p>
                    Y cuando ya me canso de tanta aventura,
                    me escondo en mi cajita, mi lugar secreto
                    donde nadie puede molestarme. 📦🐱
                </p>

                <p>
                    Aunque mi especialidad es escaparme entre
                    las piernas de la abuela Black, tu mamá,
                    sin que siquiera se dé cuenta. JAJAJA. 😂🐾
                </p>

                <p>
                    Pero no te preocupes, que aunque a veces
                    parezca que quiero más a tu humano favorito,
                    <strong>tú eres mi favorita.</strong> ❤️
                </p>

                <p>
                    Así que hoy te mando muchos ronroneos,
                    un abrazo de esos que solo yo sé darte
                    y un recordatorio: ¡no te olvides de regalonearme mucho! 😽❤️
                </p>

                <p>
                    <strong>
                        Atentamente: Black, tu gato favorito
                        y el dueño oficial de la casa. 🐱👑
                    </strong>
                </p>

            </div>
        `
    },


    // ==========================================
    // DÍA 3
    // ==========================================

    {
        numero: 3,
        emoji: "🐱📸",
        titulo: "Misión Black",
        contenido: `
            <div class="dia-contenido">

                <p>Holaaaa, Coazoooooon ❤️🐱</p>

                <p>
                    Hoy tienes una misión muy importante:
                    ¡conseguir tres fotos de tu modelo favorito! 😂📸
                </p>

                <p><strong>🎯 MISIÓN BLACK</strong></p>

                <p>🐱 1. Una foto de Black acostado boca arriba.</p>

                <p>😹 2. Una foto de Black estornudando o bostezando.</p>

                <p>🐾 3. Una foto de Black con una patita estirada.</p>

                <p>
                    Cuando consigas las tres fotos,
                    ¡misión cumplida! 🏆❤️
                </p>

                <p>
                    Y como toda buena misión tiene su recompensa,
                    te ganaste un vale. 🎟️💌
                </p>

                <p>
                    <strong>
                        ¡Mucha suerte, mami! Atentamente, Black. 🐱👑
                    </strong>
                </p>

                <hr
                    style="
                        border: none;
                        border-top: 1px solid #e8b8cc;
                        margin: 25px 0;
                    "
                >

                <p><strong>🎟️ Tu premio ❤️</strong></p>

                <p>
                    Tú eliges qué comemos y yo me encargo
                    de regalonearte. ❤️
                </p>

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
                    Cuando quieras canjearlo,
                    sácale una captura y mándamela por WhatsApp. ❤️
                </p>

            </div>
        `
    },


    // ==========================================
    // DÍA 4
    // ==========================================

    {
        numero: 4,
        emoji: "💋",
        titulo: "¿Te puedo dar un beso?",
        contenido: `
            <div
                id="pregunta-beso-dia4"
                style="text-align: center;"
            >

                <h2>¿Te puedo dar un beso? 💋❤️</h2>

                <div
                    style="
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                        flex-wrap: wrap;
                        margin: 25px 0;
                    "
                >

                    <button
                        class="boton-accion"
                        onclick="
                            document.getElementById('pregunta-beso-dia4').style.display='none';
                            document.getElementById('recuerdo-patos-dia4').style.display='block';
                        "
                    >
                        Sí ❤️
                    </button>

                    <button
                        class="boton-accion"
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
                >

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


    // ==========================================
    // DÍA 7 — MEMORICE DE BLACK
    // ==========================================

    {
        numero: 7,
        emoji: "🐈‍⬛",
        titulo: "Memorice de Black",
        contenido: `
            <div class="dia7">

                <p>
                    ¿Qué tan buena es tu memoria? 👀
                </p>

                <p>
                    Encuentra todas las parejas para descubrir
                    tu sorpresa. ❤️
                </p>

                <div
                    id="memoriceDia7"
                    class="memorice"
                ></div>

                <div
                    id="resultadoDia7"
                    class="resultado-juego"
                    style="display:none;"
                >
                    <div class="grande">❤️</div>

                    <h3>
                        ¡Lo lograste corazón! ❤️
                    </h3>

                    <p>
                        Sabía que podías.
                    </p>

                    <p>
                        Ahora te ganaste una cartita. 💌
                    </p>

                    <div class="carta-dia7">
                        <div class="carta-decoracion">💌</div>

                        <p>
                            A veces no necesitamos hacer nada especial
                            para crear un recuerdo.
                        </p>

                        <p>
                            Basta con estar juntos, reírnos de cualquier
                            tontera y tener a Black haciendo de las suyas. 😂🐈‍⬛
                        </p>

                        <p>
                            Esta cartita es simplemente para recordarte
                            que amo todos esos pequeños momentos contigo. ❤️
                        </p>

                        <p>
                            Y sí... incluso los que involucran a Black
                            peleando con una silla. 😂
                        </p>

                    </div>
                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 8 — TRES CARTAS
    // ==========================================

    {
        numero: 8,
        emoji: "❤️",
        titulo: "Tres cosas que amo de ti",
        contenido: `
            <div class="dia8">

                <p>
                    Hoy no tienes que hacer nada. ❤️
                </p>

                <p>
                    Solo quiero recordarte algunas cosas
                    que amo de ti.
                </p>

                <div class="tres-cartas" id="tresCartasDia8">

                    <button
                        class="carta-misterio"
                        onclick="abrirCartaDia8(1)"
                    >
                        <span>🐈‍⬛</span>
                        <small>Descubrir</small>
                    </button>

                    <button
                        class="carta-misterio"
                        onclick="abrirCartaDia8(2)"
                    >
                        <span>❤️</span>
                        <small>Descubrir</small>
                    </button>

                    <button
                        class="carta-misterio"
                        onclick="abrirCartaDia8(3)"
                    >
                        <span>👀</span>
                        <small>Descubrir</small>
                    </button>

                </div>

                <div id="cartasAbiertasDia8"></div>

                <div
                    id="finalDia8"
                    class="resultado-juego"
                    style="display:none;"
                >
                    <p>
                        Y podría seguir diciéndote muchas más...
                    </p>

                    <p>
                        pero creo que necesitaríamos otro calendario. 😂❤️
                    </p>
                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 9 — UNA FOTO, UNA HISTORIA
    // ==========================================

    {
        numero: 9,
        emoji: "📸",
        titulo: "Una foto, una historia",
        contenido: `
            <div class="dia9">

                <p>
                    Hay fotos que guardamos porque son bonitas...
                </p>

                <p>
                    y hay otras que guardamos porque significan algo. ❤️
                </p>

                <div class="fotos-historia" id="fotosHistoriaDia9">

                    <button
                        class="foto-oculta"
                        onclick="revelarFotoDia9(1)"
                    >
                        <span>📸</span>
                        <strong>Foto 1</strong>
                        <small>Toca para descubrir</small>
                    </button>

                    <button
                        class="foto-oculta"
                        onclick="revelarFotoDia9(2)"
                    >
                        <span>📸</span>
                        <strong>Foto 2</strong>
                        <small>Toca para descubrir</small>
                    </button>

                    <button
                        class="foto-oculta"
                        onclick="revelarFotoDia9(3)"
                    >
                        <span>📸</span>
                        <strong>Foto 3</strong>
                        <small>Toca para descubrir</small>
                    </button>

                </div>

                <div id="historiasDia9"></div>

                <div
                    id="finalDia9"
                    class="resultado-juego"
                    style="display:none;"
                >
                    <p>
                        Y pensar que todo esto empezó con pequeños
                        momentos como estos... ❤️
                    </p>
                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 10 — LAS 5 FOTOS
    // ==========================================

    {
        numero: 10,
        emoji: "📸❤️",
        titulo: "Las 5 fotos",
        contenido: `
            <div class="dia10">

                <div class="grande">
                    👀❤️
                </div>

                <p>
                    Hoy necesito algo de ti...
                </p>

                <p>
                    Quiero que elijas
                    <strong>5 fotos que para ti resuman nuestra historia.</strong>
                </p>

                <p>
                    Pueden ser fotos de cualquier momento
                    de estos 3 años.
                </p>

                <p>
                    No te voy a decir para qué las necesito todavía. 😂❤️
                </p>

                <div class="mensaje-final">

                    <p>
                        Envíame las 5 fotos. 📸
                    </p>

                    <p>
                        Las que tú quieras.
                    </p>

                </div>

                <div class="separador"></div>

                <p>
                    Cuando las tenga, a cada una le voy a asignar un número.
                </p>

                <p>
                    Esos 5 números van a formar un código. 🔐
                </p>

                <p>
                    Y ese código lo vas a necesitar más adelante... 👀❤️
                </p>

                <div class="aviso-pequeno">
                    📸 Elige las cinco fotos que tú quieras.
                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 11 — QUIZ
    // ==========================================

    {
        numero: 11,
        emoji: "🧠❤️",
        titulo: "¿Cuánto recuerdas de nosotros?",
        contenido: `
            <div class="dia11">

                <p>
                    Después de 3 años quiero comprobar
                    cuánto recuerdas de nuestra historia. 👀
                </p>

                <p>
                    Son 5 preguntas.
                    Solo una alternativa es correcta.
                </p>

                <div
                    id="quizDia11"
                    class="quiz"
                ></div>

                <div
                    id="resultadoDia11"
                    class="resultado-juego"
                    style="display:none;"
                ></div>

            </div>
        `
    },


    // ==========================================
    // DÍA 12 — TÍA CILVIA
    // ==========================================

    {
        numero: 12,
        emoji: "😂",
        titulo: "No estaba la tía Cilvia",
        contenido: `
            <div class="dia12">

                <p>
                    Hay recuerdos que probablemente nunca vamos a olvidar...
                </p>

                <p>
                    pero algunos me dan mucha más risa que otros. 😂❤️
                </p>

                <button
                    class="boton-accion"
                    onclick="abrirHistoriaDia12()"
                >
                    💌 Abrir el recuerdo
                </button>

                <div
                    id="historiaDia12"
                    class="historia-envelope"
                    style="display:none;"
                >

                    <div class="grande">
                        💌
                    </div>

                    <h3>
                        No estaba la tía Cilvia 😂
                    </h3>

                    <p>
                        Hay historias que, aunque pasen los años,
                        siguen teniendo exactamente el mismo efecto:
                        nos hacen reír apenas las recordamos.
                    </p>

                    <p>
                        Y esta es una de esas.
                    </p>

                    <p>
                        Quizás en el momento no fue tan gracioso...
                        pero ahora, después de todo lo que hemos vivido,
                        es imposible pensar en esto sin acordarme de
                        nosotros y reírme. 😂❤️
                    </p>

                    <p>
                        Hay recuerdos que no necesitan ser perfectos
                        para convertirse en parte de nuestra historia.
                    </p>

                    <p>
                        Y este definitivamente es uno de ellos.
                    </p>

                    <p>
                        Y sí... después de 3 años todavía me acuerdo
                        de esto y me da risa. 😂❤️
                    </p>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 13 — SUSHI
    // ==========================================

    {
        numero: 13,
        emoji: "🍣❤️",
        titulo: "Tenemos una cita pendiente",
        contenido: `
            <div class="dia13">

                <p>
                    Hoy no quiero que hagas una misión...
                </p>

                <p>
                    Hoy quiero hacer algo contigo. ❤️
                </p>

                <div class="plan-cita">

                    <h3>
                        Tenemos una cita pendiente.
                    </h3>

                    <p>
                        Sushi + tú + yo.
                    </p>

                    <p>
                        El resto lo vemos juntos. ❤️
                    </p>

                </div>

                <button
                    class="boton-accion"
                    onclick="mostrarPlanDia13()"
                >
                    🍣 Ver nuestro plan
                </button>

                <div
                    id="planDia13"
                    class="detalle-plan"
                    style="display:none;"
                >

                    <p>
                        Esta parte la vamos a completar juntos. ❤️
                    </p>

                    <p>
                        📍 Lugar: por decidir
                    </p>

                    <p>
                        🕐 Hora: por decidir
                    </p>

                    <p>
                        🍣 Lo importante: sushi + tú + yo.
                    </p>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 14 — BLACK VS PANCHITA
    // ==========================================

    {
        numero: 14,
        emoji: "🐈‍⬛🐈",
        titulo: "Black vs. Panchita",
        contenido: `
            <div class="dia14">

                <p>
                    Hoy tenemos una competencia muy importante... 👀
                </p>

                <h3>
                    Black vs. Panchita
                </h3>

                <p>
                    Tú decides quién gana. ❤️
                </p>

                <div id="competenciaDia14"></div>

            </div>
        `
    },


    // ==========================================
    // DÍA 15 — ROSA
    // ==========================================

    {
        numero: 15,
        emoji: "🌹",
        titulo: "Una rosa para ti",
        contenido: `
            <div class="dia15">

                <p>
                    Hoy no tienes que resolver nada...
                </p>

                <p>
                    Solo quiero que recibas algo. 🌹❤️
                </p>

                <div
                    id="rosaCerradaDia15"
                    class="rosa-cerrada"
                >

                    <div class="grande">
                        🌹
                    </div>

                    <button
                        class="boton-accion"
                        onclick="abrirRosaDia15()"
                    >
                        🌹 Abrir
                    </button>

                </div>

                <div
                    id="rosaAbiertaDia15"
                    style="display:none;"
                >

                    <p>
                        Porque después de 3 años...
                    </p>

                    <p>
                        todavía quiero seguir teniendo detalles contigo. ❤️
                    </p>

                    <p>
                        Así que hoy hay una pequeña sorpresa para ti. 👀
                    </p>

                    <div class="sorpresa-rosa">
                        <img
                            src="./recursos/dia15_rosa/rosa.png"
                            alt="Una rosa para ti"
                        >

                        <h3>
                            Hoy te espera una rosa. 🌹
                        </h3>

                        <p>
                            Y si todo sale como quiero...
                            también un almuerzo juntos. ❤️
                        </p>
                    </div>

                    <p>
                        No necesitas una fecha especial para recibir una flor...
                    </p>

                    <p>
                        pero me gusta tener cualquier excusa
                        para recordarte cuánto te quiero. ❤️
                    </p>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 16 — ELIGE TU SORPRESA
    // ==========================================

    {
        numero: 16,
        emoji: "🎁",
        titulo: "Elige tu sorpresa",
        contenido: `
            <div class="dia16">

                <p>
                    Hoy tienes que elegir una sorpresa... 👀
                </p>

                <p>
                    Pero no vas a saber qué estás eligiendo. 😂❤️
                </p>

                <p>
                    Confía en tu suerte. 🍀
                </p>

                <div
                    id="cartasDia16"
                    class="cartas-eleccion"
                ></div>

                <div
                    id="resultadoDia16"
                    class="resultado-juego"
                    style="display:none;"
                ></div>

            </div>
        `
    },


    // ==========================================
    // DÍA 17 — CANCIÓN
    // ==========================================

    {
        numero: 17,
        emoji: "🎵❤️",
        titulo: "Una canción para ti",
        contenido: `
            <div class="dia17">

                <div id="bloqueoDia17">

                    <div class="grande">
                        🔐🎵
                    </div>

                    <p>
                        ¿Te acuerdas de las fotos que me mandaste? 👀
                    </p>

                    <p>
                        Bueno... hice algo con ellas. ❤️
                    </p>

                    <p>
                        Pero antes tienes que ingresar
                        el código que forman esas cinco fotos.
                    </p>

                    <input
                        id="codigoDia17"
                        type="password"
                        inputmode="numeric"
                        maxlength="5"
                        autocomplete="off"
                        placeholder="Código"
                        class="codigo-especial"
                    >

                    <button
                        class="boton-accion"
                        onclick="desbloquearDia17()"
                    >
                        🔐 Desbloquear
                    </button>

                    <p
                        id="errorDia17"
                        class="error-codigo"
                        style="display:none;"
                    >
                        Código incorrecto.
                    </p>

                </div>

                <div
                    id="contenidoDesbloqueadoDia17"
                    style="display:none;"
                >

                    <p>
                        ¿Te acuerdas de las fotos que me mandaste? 👀
                    </p>

                    <div
                        id="galeriaDia17"
                        class="galeria-cancion"
                    ></div>

                    <p>
                        Bueno... hice algo con ellas. ❤️
                    </p>

                    <button
                        class="boton-accion boton-musica"
                        onclick="reproducirCancionDia17()"
                    >
                        🎧 ESCUCHAR
                    </button>

                    <audio
                        id="audioDia17"
                        controls
                        preload="metadata"
                        style="
                            display:none;
                            width:100%;
                            margin-top:20px;
                        "
                    >
                        <source
                            src="./recursos/dia17_cancion/cancion.mp3"
                            type="audio/mpeg"
                        >
                    </audio>

                    <div
                        id="mensajeAudioDia17"
                        class="mensaje-audio"
                        style="display:none;"
                    >

                        <p>
                            Puede que no sea la mejor canción del mundo... 😂❤️
                        </p>

                        <p>
                            pero fue hecha pensando en ti.
                        </p>

                        <p>
                            Y eso la hace especial para mí. ❤️
                        </p>

                    </div>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 18 — VALE
    // ==========================================

    {
        numero: 18,
        emoji: "🎟️❤️",
        titulo: "Tú eliges",
        contenido: `
            <div class="dia18">

                <p>
                    Hoy no voy a decidir yo. 👀
                </p>

                <p>
                    Hoy decides tú. ❤️
                </p>

                <div class="vale-grande">

                    <div class="vale-icono">
                        🎟️
                    </div>

                    <h3>
                        VALE POR UNA COSA QUE TÚ QUIERAS
                    </h3>

                    <p>
                        Canjeable por un panorama,
                        una comida, una salida,
                        una película, un juego...
                        lo que tú quieras.
                    </p>

                    <p>
                        La única condición es que quiero hacerlo contigo. ❤️
                    </p>

                </div>

                <button
                    class="boton-accion"
                    onclick="canjearValeDia18()"
                >
                    🎟️ CANJEAR MI VALE
                </button>

                <div
                    id="valeCanjeadoDia18"
                    class="resultado-juego"
                    style="display:none;"
                >

                    <p>
                        Vale aceptado. 😂❤️
                    </p>

                    <p>
                        Ahora solo falta que me digas qué quieres hacer.
                    </p>

                    <p>
                        Y sí... voy a cumplirlo. 👀
                    </p>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 19 — FOTO ESPEJO
    // ==========================================

    {
        numero: 19,
        emoji: "🪞❤️",
        titulo: "Una foto que lo dice todo",
        contenido: `
            <div class="dia19">

                <p>
                    Hay fotos que simplemente son fotos...
                </p>

                <p>
                    y hay otras que, cuando las vuelves a mirar,
                    te hacen recordar todo lo que había detrás. ❤️
                </p>

                <div id="fotoEspejoOculta">

                    <div class="foto-borroso">
                        🪞❤️
                    </div>

                    <button
                        class="boton-accion"
                        onclick="mostrarFotoDia19()"
                    >
                        🪞 Ver la foto
                    </button>

                </div>

                <div
                    id="fotoEspejoRevelada"
                    style="display:none;"
                >

                    <img
                        src="./recursos/dia19_foto_especial/foto-espejo.jpg"
                        alt="Nuestro recuerdo frente al espejo"
                    >

                    <p>
                        Esta foto siempre me va a recordar
                        ese momento en que mi mamá te conoció
                        y nuestra relación empezó a sentirse
                        todavía más oficial. ❤️
                    </p>

                    <p>
                        Y obviamente Panchita tenía que aparecer
                        porque, como siempre, ella también quería
                        ser protagonista. 😂🐱
                    </p>

                    <p>
                        Han pasado 3 años...
                    </p>

                    <p>
                        y me encanta pensar en todos los momentos
                        que hemos ido convirtiendo en recuerdos. ❤️
                    </p>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 20 — PELÍCULA + COMIDA
    // ==========================================

    {
        numero: 20,
        emoji: "🎬🍿",
        titulo: "Nuestro plan perfecto",
        contenido: `
            <div class="dia20">

                <p>
                    Hoy no quiero que hagas una misión. 👀
                </p>

                <p>
                    Hoy quiero que nos regalemos
                    un poquito de tiempo juntos. ❤️
                </p>

                <div class="plan-pelicula">

                    <h3>
                        🎬 NUESTRO PLAN
                    </h3>

                    <p>
                        Una película.
                    </p>

                    <p>
                        Tu comida favorita.
                    </p>

                    <p>
                        Tú y yo. ❤️
                    </p>

                </div>

                <button
                    class="boton-accion"
                    onclick="mostrarPlanDia20()"
                >
                    🍿 VER EL PLAN
                </button>

                <div
                    id="detalleDia20"
                    class="detalle-plan"
                    style="display:none;"
                >

                    <p>
                        Hoy tenemos una misión muy importante...
                    </p>

                    <p>
                        Encontrar la película perfecta,
                        preparar algo rico y simplemente
                        disfrutar juntos. ❤️
                    </p>

                    <div class="lista-plan">

                        <p>🍿 Película: La elegimos juntos</p>

                        <p>🍴 Comida: Tu favorita</p>

                        <p>🏠 Lugar: Tu casa</p>

                        <p>❤️ Compañía: La mejor que podía pedir</p>

                    </div>

                    <button
                        class="boton-accion"
                        onclick="empezarPlanDia20()"
                    >
                        🎬 ¿Empezamos?
                    </button>

                    <div
                        id="mensajeFinalDia20"
                        style="display:none;"
                    >

                        <p>
                            Entonces prepara las mantitas. 😂❤️
                        </p>

                        <p>
                            La película comienza cuando estemos juntos.
                        </p>

                    </div>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 21 — PANCHITA
    // ==========================================

    {
        numero: 21,
        emoji: "🐈❤️",
        titulo: "Un poco de locura",
        contenido: `
            <div class="dia21">

                <p>
                    Hoy quería compartir contigo algo muy especial...
                </p>

                <p>
                    aunque probablemente no tenga mucho sentido
                    para nadie más. 😂❤️
                </p>

                <img
                    src="./recursos/dia21_panchita/panchita-contigo.jpg"
                    alt="Panchita contigo"
                >

                <div class="frase-especial">
                    “Un poco de locura para el amor más loco
                    y hermoso que he tenido en la vida. ❤️”
                </div>

                <p>
                    Gracias por quererme incluso en todas mis locuras.
                </p>

                <p>
                    Y gracias por dejarme ser parte de las tuyas. ❤️
                </p>

            </div>
        `
    },


    // ==========================================
    // DÍA 22 — 5 FOTOS GRACIOSAS
    // ==========================================

    {
        numero: 22,
        emoji: "😂",
        titulo: "Para reírnos un rato",
        contenido: `
            <div class="dia22">

                <p>
                    Después de todo lo romántico de estos días...
                </p>

                <p>
                    creo que ya es momento de recordar
                    que también somos bastante ridículos. 😂❤️
                </p>

                <p>
                    Así que hoy es simplemente
                    para reírnos un rato.
                </p>

                <div
                    id="fotosDia22"
                    class="galeria-graciosa"
                ></div>

                <div
                    id="finalDia22"
                    class="resultado-juego"
                    style="display:none;"
                >

                    <p>
                        Podríamos tener miles de fotos bonitas...
                    </p>

                    <p>
                        pero creo que estas son algunas
                        de mis favoritas. 😂❤️
                    </p>

                    <p>
                        Porque contigo puedo reírme de cualquier cosa.
                    </p>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 23
    // ==========================================

    {
        numero: 23,
        emoji: "⏳❤️",
        titulo: "Casi llegamos",
        contenido: `
            <div class="dia23">

                <p>
                    Mira todo lo que hemos recorrido hasta aquí... 👀❤️
                </p>

                <div class="contador-final">

                    <strong>23 días.</strong>

                    <strong>Un montón de recuerdos.</strong>

                    <strong>Muchas risas.</strong>

                    <strong>
                        Y una historia que todavía estamos escribiendo. ❤️
                    </strong>

                </div>

                <div class="separador"></div>

                <h3>
                    ⏳ Solo queda uno...
                </h3>

                <button
                    class="boton-accion"
                    onclick="mostrarUltimoMensajeDia23()"
                >
                    ❤️ Ver el último mensaje
                </button>

                <div
                    id="ultimoMensajeDia23"
                    class="resultado-juego"
                    style="display:none;"
                >

                    <p>
                        Mañana hay algo diferente. 👀
                    </p>

                    <p>
                        No es un juego.
                    </p>

                    <p>
                        No es una misión.
                    </p>

                    <p>
                        Y tampoco tienes que descubrir nada.
                    </p>

                    <p>
                        Solo quiero que abras el último día. ❤️
                    </p>

                    <p>
                        Así que disfruta este último poquito de espera...
                    </p>

                    <p>
                        Porque todavía me queda una cosa que decirte. ❤️
                    </p>

                </div>

            </div>
        `
    },


    // ==========================================
    // DÍA 24
    // ==========================================

    {
        numero: 24,
        emoji: "❤️",
        titulo: "Nuestra historia",
        contenido: `
            <div class="dia24">

                <p>
                    No hice todo esto solamente
                    para darte una sorpresa.
                </p>

                <p>
                    Lo hice porque quería guardar
                    un pedacito de nosotros.
                </p>

                <div class="recuerdos-finales">

                    <button onclick="miniRecuerdoDia24(2)">🐈‍⬛ Día 2</button>
                    <button onclick="miniRecuerdoDia24(4)">🦆 Día 4</button>
                    <button onclick="miniRecuerdoDia24(6)">🚪 Día 6</button>
                    <button onclick="miniRecuerdoDia24(7)">🐈‍⬛ Día 7</button>
                    <button onclick="miniRecuerdoDia24(8)">❤️ Día 8</button>
                    <button onclick="miniRecuerdoDia24(9)">📸 Día 9</button>
                    <button onclick="miniRecuerdoDia24(10)">🔐 Día 10</button>
                    <button onclick="miniRecuerdoDia24(11)">🧠 Día 11</button>
                    <button onclick="miniRecuerdoDia24(12)">😂 Día 12</button>
                    <button onclick="miniRecuerdoDia24(13)">🍣 Día 13</button>
                    <button onclick="miniRecuerdoDia24(14)">🐈‍⬛🐈 Día 14</button>
                    <button onclick="miniRecuerdoDia24(15)">🌹 Día 15</button>
                    <button onclick="miniRecuerdoDia24(16)">🎁 Día 16</button>
                    <button onclick="miniRecuerdoDia24(17)">🎵 Día 17</button>
                    <button onclick="miniRecuerdoDia24(18)">🎟️ Día 18</button>
                    <button onclick="miniRecuerdoDia24(19)">🪞 Día 19</button>
                    <button onclick="miniRecuerdoDia24(20)">🎬 Día 20</button>
                    <button onclick="miniRecuerdoDia24(21)">🐈 Day 21</button>
                    <button onclick="miniRecuerdoDia24(22)">😂 Día 22</button>
                    <button onclick="miniRecuerdoDia24(23)">⏳ Día 23</button>

                </div>

                <div
                    id="miniRecuerdoDia24"
                    class="mini-recuerdo"
                ></div>

                <div class="separador"></div>

                <p>
                    De cómo nos conocimos.
                </p>

                <p>
                    De las cosas que hemos vivido.
                </p>

                <p>
                    De las cosas que nos hacen reír.
                </p>

                <p>
                    De nuestras tonteras.
                </p>

                <p>
                    De nuestros gatos.
                </p>

                <p>
                    De nuestras comidas.
                </p>

                <p>
                    De nuestras citas.
                </p>

                <p>
                    De nuestras historias.
                </p>

                <p>
                    Y, sobre todo, de nosotros.
                </p>

                <div class="tres-anos">
                    3 años. ❤️
                </div>

                <div class="carta-final">

                    <p>
                        Esta parte la vamos a terminar juntos. ❤️
                    </p>

                    <p>
                        Porque todavía me queda mucho
                        que decirte.
                    </p>

                    <p>
                        Gracias por estos 3 años.
                    </p>

                    <p>
                        Y gracias por todos los que todavía nos quedan. ❤️
                    </p>

                </div>

                <img
                    src="./recursos/dia24_nuestra_historia/foto-final.jpg"
                    alt="Nuestra foto final"
                >

            </div>
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


    setTimeout(
        () => {

            if (dia.numero === 5) {
                prepararPremioDia5();
            }

            if (dia.numero === 7) {
                prepararDia7();
            }

            if (dia.numero === 11) {
                prepararDia11();
            }

            if (dia.numero === 14) {
                prepararDia14();
            }

            if (dia.numero === 16) {
                prepararDia16();
            }

            if (dia.numero === 17) {
                prepararDia17();
            }

            if (dia.numero === 22) {
                prepararDia22();
            }

        },
        50
    );

}


// ==========================================
// PREMIO DÍA 5
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

    premio.hidden =
        true;

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

        premio.hidden =
            false;

        premio.style.setProperty(
            "display",
            "block",
            "important"
        );

        lanzarConfetiDinero();


    } else {

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
// DÍA 7 — MEMORICE
// ==========================================

let cartasMemoriceDia7 = [];

let primeraCartaDia7 = null;

let segundaCartaDia7 = null;

let bloqueadoMemoriceDia7 = false;

let parejasDia7 = 0;


function prepararDia7() {

    const tablero =
        document.getElementById(
            "memoriceDia7"
        );

    const resultado =
        document.getElementById(
            "resultadoDia7"
        );

    if (!tablero) {
        return;
    }

    if (
        tablero.dataset.iniciado === "true"
    ) {
        return;
    }

    tablero.dataset.iniciado =
        "true";

    parejasDia7 = 0;

    primeraCartaDia7 = null;

    segundaCartaDia7 = null;

    bloqueadoMemoriceDia7 = false;

    cartasMemoriceDia7 = [];

    for (
        let i = 1;
        i <= 8;
        i++
    ) {

        cartasMemoriceDia7.push(i);
        cartasMemoriceDia7.push(i);

    }

    cartasMemoriceDia7.sort(
        () => Math.random() - 0.5
    );

    tablero.innerHTML = "";

    cartasMemoriceDia7.forEach(
        numeroFoto => {

            const carta =
                document.createElement(
                    "button"
                );

            carta.className =
                "carta-memorice";

            carta.dataset.foto =
                numeroFoto;

            carta.innerHTML = `
                <span class="parte-oculta">
                    🐈‍⬛
                </span>

                <img
                    src="./recursos/dia7_memorice_black/black${numeroFoto}.jpg"
                    alt="Black"
                >
            `;

            carta.addEventListener(
                "click",
                () => voltearCartaDia7(carta)
            );

            tablero.appendChild(
                carta
            );

        }
    );

    if (resultado) {
        resultado.style.display =
            "none";
    }

}


function voltearCartaDia7(carta) {

    if (
        bloqueadoMemoriceDia7 ||
        carta.classList.contains("volteada") ||
        carta.classList.contains("encontrada")
    ) {
        return;
    }

    carta.classList.add(
        "volteada"
    );

    if (!primeraCartaDia7) {

        primeraCartaDia7 =
            carta;

        return;

    }

    segundaCartaDia7 =
        carta;

    bloqueadoMemoriceDia7 =
        true;

    const foto1 =
        primeraCartaDia7.dataset.foto;

    const foto2 =
        segundaCartaDia7.dataset.foto;


    if (
        foto1 === foto2
    ) {

        primeraCartaDia7.classList.add(
            "encontrada"
        );

        segundaCartaDia7.classList.add(
            "encontrada"
        );

        parejasDia7++;

        primeraCartaDia7 =
            null;

        segundaCartaDia7 =
            null;

        bloqueadoMemoriceDia7 =
            false;

        if (
            parejasDia7 === 8
        ) {

            completarDia7();

        }

    } else {

        setTimeout(
            () => {

                primeraCartaDia7.classList.remove(
                    "volteada"
                );

                segundaCartaDia7.classList.remove(
                    "volteada"
                );

                primeraCartaDia7 =
                    null;

                segundaCartaDia7 =
                    null;

                bloqueadoMemoriceDia7 =
                    false;

            },
            900
        );

    }

}


function completarDia7() {

    const resultado =
        document.getElementById(
            "resultadoDia7"
        );

    if (!resultado) {
        return;
    }

    resultado.style.display =
        "block";

    lanzarConfeti();

}


// ==========================================
// DÍA 8 — CARTAS
// ==========================================

const cartasDia8Abiertas =
    new Set();


function abrirCartaDia8(numero) {

    if (
        cartasDia8Abiertas.has(numero)
    ) {
        return;
    }

    cartasDia8Abiertas.add(
        numero
    );

    const contenedor =
        document.getElementById(
            "cartasAbiertasDia8"
        );

    if (!contenedor) {
        return;
    }

    const datos = {

        1: {
            titulo: "Tu forma de ser",
            texto:
                "Me encanta tu forma de ser. Tu energía, tu manera de ver las cosas y esa mezcla tan tuya entre lo divertida, lo cariñosa y lo madura. ❤️"
        },

        2: {
            titulo: "La forma en que quieres",
            texto:
                "Me encanta la forma en que quieres. En los pequeños detalles, en cómo te preocupas y en la manera en que haces sentir importante a la persona que tienes al lado. ❤️"
        },

        3: {
            titulo: "La persona que eres conmigo",
            texto:
                "Contigo puedo ser yo. Puedo hacer tonteras, reírme de cualquier cosa, hablar de gatos, comida o cualquier estupidez y sentir que estoy exactamente donde quiero estar. ❤️"
        }

    };

    const carta =
        datos[numero];

    const bloque =
        document.createElement(
            "div"
        );

    bloque.className =
        "carta-abierta";

    bloque.innerHTML = `
        <h3>
            ${carta.titulo}
        </h3>

        <p>
            ${carta.texto}
        </p>
    `;

    contenedor.appendChild(
        bloque
    );

    if (
        cartasDia8Abiertas.size === 3
    ) {

        const final =
            document.getElementById(
                "finalDia8"
            );

        if (final) {
            final.style.display =
                "block";
        }

    }

}


// ==========================================
// DÍA 9 — FOTOS
// ==========================================

const fotosDia9Reveladas =
    new Set();


function revelarFotoDia9(numero) {

    if (
        fotosDia9Reveladas.has(numero)
    ) {
        return;
    }

    fotosDia9Reveladas.add(
        numero
    );

    const contenedor =
        document.getElementById(
            "historiasDia9"
        );

    if (!contenedor) {
        return;
    }

    const historias = {

        1: {
            texto:
                "Una foto que guardamos porque representa uno de esos pequeños momentos que, sin darnos cuenta, terminaron formando parte de nuestra historia."
        },

        2: {
            texto:
                "Quizás para otra persona esta foto no significa demasiado. Pero nosotros sabemos todo lo que había detrás de ese momento. ❤️"
        },

        3: {
            texto:
                "Y quizás eso es lo bonito de nuestras fotos: muchas veces no importa la foto en sí, sino todo lo que recordamos cuando la volvemos a mirar."
        }

    };

    const bloque =
        document.createElement(
            "div"
        );

    bloque.className =
        "historia-foto";

    bloque.innerHTML = `
        <img
            src="./recursos/dia9_una_foto_una_historia/foto${numero}.jpg"
            alt="Recuerdo ${numero}"
        >

        <p>
            ${historias[numero].texto}
        </p>
    `;

    contenedor.appendChild(
        bloque
    );

    const boton =
        document.querySelector(
            `.foto-oculta:nth-child(${numero})`
        );

    if (boton) {

        boton.disabled =
            true;

        boton.innerHTML = `
            ❤️ Foto ${numero} descubierta
        `;

    }

    if (
        fotosDia9Reveladas.size === 3
    ) {

        const final =
            document.getElementById(
                "finalDia9"
            );

        if (final) {
            final.style.display =
                "block";
        }

    }

}


// ==========================================
// DÍA 11 — QUIZ
// ==========================================

const preguntasDia11 = [

    {
        pregunta:
            "¿Cómo empezó realmente nuestro primer acercamiento?",

        opciones: [
            "Nos conocimos por una aplicación de citas.",
            "Una amiga tuya pidió mi Instagram porque tú eras tímida.",
            "Nos presentó mi mamá."
        ],

        correcta: 1
    },

    {
        pregunta:
            "¿Qué fue una de las primeras cosas por las que te pregunté cuando empezamos a hablar?",

        opciones: [
            "Por Black y si estaba comiendo Churu.",
            "Por tu trabajo.",
            "Por tu película favorita."
        ],

        correcta: 0
    },

    {
        pregunta:
            "¿Dónde fue nuestro primer beso?",

        opciones: [
            "En tu casa.",
            "En Tropezón.",
            "En un restaurante."
        ],

        correcta: 1
    },

    {
        pregunta:
            "¿Qué historia inventábamos para que mi mamá no sospechara tanto?",

        opciones: [
            "La historia de los patos.",
            "La historia de un viaje.",
            "La historia de una compañera de trabajo."
        ],

        correcta: 0
    },

    {
        pregunta:
            "¿Qué animal terminó siendo protagonista de una de nuestras primeras historias?",

        opciones: [
            "Un perro.",
            "Un gato.",
            "Un pato."
        ],

        correcta: 2
    }

];


function prepararDia11() {

    const contenedor =
        document.getElementById(
            "quizDia11"
        );

    if (!contenedor) {
        return;
    }

    if (
        contenedor.dataset.iniciado === "true"
    ) {
        return;
    }

    contenedor.dataset.iniciado =
        "true";

    iniciarQuizDia11();

}


function iniciarQuizDia11() {

    const contenedor =
        document.getElementById(
            "quizDia11"
        );

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    preguntasDia11.forEach(
        (pregunta, indice) => {

            const bloque =
                document.createElement(
                    "div"
                );

            bloque.className =
                "pregunta-quiz";

            bloque.innerHTML = `
                <h3>
                    ${indice + 1}. ${pregunta.pregunta}
                </h3>

                <div class="opciones-quiz"></div>

                <p
                    class="resultado-pregunta"
                    style="display:none;"
                ></p>
            `;

            const opciones =
                bloque.querySelector(
                    ".opciones-quiz"
                );

            pregunta.opciones.forEach(
                (opcion, indiceOpcion) => {

                    const boton =
                        document.createElement(
                            "button"
                        );

                    boton.textContent =
                        opcion;

                    boton.addEventListener(
                        "click",
                        () => {

                            if (
                                indiceOpcion ===
                                pregunta.correcta
                            ) {

                                boton.classList.add(
                                    "correcta"
                                );

                                resultado.textContent =
                                    "❤️ ¡Correcto!";

                                resultado.style.display =
                                    "block";

                                bloque.dataset.correcta =
                                    "true";

                                bloquearOpcionesQuiz(
                                    opciones
                                );

                                comprobarQuizCompleto();

                            } else {

                                resultado.textContent =
                                    "Casi... 😂 Intenta otra vez.";

                                resultado.style.display =
                                    "block";

                                resultado.classList.add(
                                    "incorrecta"
                                );

                                setTimeout(
                                    () => {
                                        resultado.style.display =
                                            "none";
                                    },
                                    1300
                                );

                            }

                        }
                    );

                    opciones.appendChild(
                        boton
                    );

                }
            );

            const resultado =
                bloque.querySelector(
                    ".resultado-pregunta"
                );

            contenedor.appendChild(
                bloque
            );

        }
    );

}


function bloquearOpcionesQuiz(opciones) {

    const botones =
        opciones.querySelectorAll(
            "button"
        );

    botones.forEach(
        boton => {

            boton.disabled =
                true;

        }
    );

}


function comprobarQuizCompleto() {

    const preguntas =
        document.querySelectorAll(
            ".pregunta-quiz"
        );

    let correctas = 0;

    preguntas.forEach(
        pregunta => {

            if (
                pregunta.dataset.correcta ===
                "true"
            ) {

                correctas++;

            }

        }
    );

    if (
        correctas !== 5
    ) {
        return;
    }

    const resultado =
        document.getElementById(
            "resultadoDia11"
        );

    if (!resultado) {
        return;
    }

    resultado.style.display =
        "block";

    resultado.innerHTML = `
        <h3>
            ❤️ ¡Muy bien!
        </h3>

        <p>
            Parece que después de 3 años
            ya me conoces bastante...
        </p>

        <p>
            aunque todavía me quedan algunas sorpresas. 👀
        </p>

        <strong>
            5/5 ❤️
        </strong>
    `;

    lanzarConfeti();

}


// ==========================================
// DÍA 12
// ==========================================

function abrirHistoriaDia12() {

    const historia =
        document.getElementById(
            "historiaDia12"
        );

    if (!historia) {
        return;
    }

    historia.style.display =
        "block";

}


// ==========================================
// DÍA 13
// ==========================================

function mostrarPlanDia13() {

    const plan =
        document.getElementById(
            "planDia13"
        );

    if (!plan) {
        return;
    }

    plan.style.display =
        "block";

}


// ==========================================
// DÍA 14 — BLACK VS PANCHITA
// ==========================================

const categoriasDia14 = [

    {
        nombre: "¿Quién es más travieso?",
        black: "black-travieso.jpg",
        panchita: "panchita-travieso.jpg"
    },

    {
        nombre: "¿Quién es más regalón?",
        black: "black-regalon.jpg",
        panchita: "panchita-regalon.jpg"
    },

    {
        nombre: "¿Quién es más hambriento?",
        black: "black-hambriento.jpg",
        panchita: "panchita-hambrienta.jpg"
    },

    {
        nombre: "¿Quién hace más tonteras?",
        black: "black-tonteras.jpg",
        panchita: "panchita-tonteras.jpg"
    },

    {
        nombre: "¿Quién se cree más dueño de la casa?",
        black: "black-dueno.jpg",
        panchita: "panchita-duena.jpg"
    }

];


let categoriaActualDia14 = 0;

let votosDia14 = {
    Black: 0,
    Panchita: 0
};


function prepararDia14() {

    const contenedor =
        document.getElementById(
            "competenciaDia14"
        );

    if (!contenedor) {
        return;
    }

    if (
        contenedor.dataset.iniciado === "true"
    ) {
        return;
    }

    contenedor.dataset.iniciado =
        "true";

    categoriaActualDia14 =
        0;

    votosDia14 = {
        Black: 0,
        Panchita: 0
    };

    mostrarCategoriaDia14();

}


function mostrarCategoriaDia14() {

    const contenedor =
        document.getElementById(
            "competenciaDia14"
        );

    if (!contenedor) {
        return;
    }

    if (
        categoriaActualDia14 >=
        categoriasDia14.length
    ) {

        finalizarDia14();

        return;

    }

    const categoria =
        categoriasDia14[
            categoriaActualDia14
        ];

    contenedor.innerHTML = `
        <div class="categoria-gato">

            <h3>
                ${categoria.nombre}
            </h3>

            <div class="duelo-gatos">

                <button
                    onclick="votarDia14('Black')"
                >
                    <img
                        src="./recursos/dia14_black_vs_panchita/${categoria.black}"
                        alt="Black"
                    >

                    <strong>
                        🐈‍⬛ Black
                    </strong>
                </button>

                <button
                    onclick="votarDia14('Panchita')"
                >
                    <img
                        src="./recursos/dia14_black_vs_panchita/${categoria.panchita}"
                        alt="Panchita"
                    >

                    <strong>
                        🐈 Panchita
                    </strong>
                </button>

            </div>

            <p>
                Elige tu favorito. ❤️
            </p>

            <div class="progreso-categoria">
                ${categoriaActualDia14 + 1}
                / ${categoriasDia14.length}
            </div>

        </div>
    `;

}


function votarDia14(gato) {

    votosDia14[gato]++;

    const contenedor =
        document.getElementById(
            "competenciaDia14"
        );

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = `
        <div class="voto-gato">

            <div class="grande">
                ${gato === "Black" ? "🐈‍⬛" : "🐈"}
            </div>

            <h3>
                ¡${gato} gana esta ronda! 😂❤️
            </h3>

            <p>
                ${gato === "Black"
                    ? "Panchita promete que esto no quedará así. 👀"
                    : "Black ya está preparando su revancha. 👀"
                }
            </p>

        </div>
    `;

    setTimeout(
        () => {

            categoriaActualDia14++;

            mostrarCategoriaDia14();

        },
        3000
    );

}


function finalizarDia14() {

    const contenedor =
        document.getElementById(
            "competenciaDia14"
        );

    if (!contenedor) {
        return;
    }

    const ganador =
        votosDia14.Black >= votosDia14.Panchita
            ? "Black"
            : "Panchita";

    const perdedor =
        ganador === "Black"
            ? "Panchita"
            : "Black";

    const fotoGanador =
        ganador === "Black"
            ? "black-ganador.jpg"
            : "panchita-ganadora.jpg";

    const fotoPerdedor =
        perdedor === "Black"
            ? "black-perdedor.jpg"
            : "panchita-perdedora.jpg";

    contenedor.innerHTML = `
        <div class="final-competencia">

            <h3>
                El más elegido es... 👀
            </h3>

            <div class="ganador-gato">

                <img
                    src="./recursos/dia14_black_vs_panchita/${fotoGanador}"
                    alt="${ganador}"
                >

                <h2>
                    🏆 ${ganador} 🏆
                </h2>

            </div>

            <div class="perdedor-gato">

                <img
                    src="./recursos/dia14_black_vs_panchita/${fotoPerdedor}"
                    alt="${perdedor}"
                >

                <p>
                    ${perdedor}:
                    “Pronto ganaré.” 👀
                </p>

            </div>

            <div class="mensaje-final">

                <p>
                    La verdad es que no importa quién ganó. ❤️
                </p>

                <p>
                    Porque los dos son igual de importantes,
                    cada uno con su propia forma de hacernos
                    reír, acompañarnos y llenar nuestras vidas.
                </p>

                <p>
                    Así que esta competencia queda
                    oficialmente en empate... ❤️
                </p>

            </div>

        </div>
    `;

}


// ==========================================
// DÍA 15
// ==========================================

function abrirRosaDia15() {

    const cerrada =
        document.getElementById(
            "rosaCerradaDia15"
        );

    const abierta =
        document.getElementById(
            "rosaAbiertaDia15"
        );

    if (cerrada) {
        cerrada.style.display =
            "none";
    }

    if (abierta) {
        abierta.style.display =
            "block";
    }

    lanzarConfeti();

}


// ==========================================
// DÍA 16
// ==========================================

const sorpresasDia16 = [

    {
        nombre: "Algo para reírnos",
        contenido:
            "Hoy quiero que hagamos algo que nos haga reír hasta que nos duela la guata. 😂❤️"
    },

    {
        nombre: "Algo para nosotros",
        contenido:
            "Hoy tenemos una pequeña sorpresa pensada solamente para nosotros dos. ❤️"
    },

    {
        nombre: "Algo inesperado",
        contenido:
            "No te voy a decir qué es todavía... pero prometo que valdrá la pena haber elegido esta carta. 👀❤️"
    }

];


function prepararDia16() {

    const contenedor =
        document.getElementById(
            "cartasDia16"
        );

    const resultado =
        document.getElementById(
            "resultadoDia16"
        );

    if (!contenedor) {
        return;
    }

    if (
        contenedor.dataset.iniciado === "true"
    ) {
        return;
    }

    contenedor.dataset.iniciado =
        "true";

    const barajadas =
        [...sorpresasDia16]
            .sort(
                () => Math.random() - 0.5
            );

    contenedor.innerHTML = "";

    barajadas.forEach(
        (sorpresa, indice) => {

            const carta =
                document.createElement(
                    "button"
                );

            carta.className =
                "carta-eleccion";

            carta.innerHTML = `
                <span>🂠</span>
                <small>Elegir</small>
            `;

            carta.addEventListener(
                "click",
                () => elegirSorpresaDia16(
                    carta,
                    sorpresa,
                    contenedor,
                    resultado
                )
            );

            contenedor.appendChild(
                carta
            );

        }
    );

}


function elegirSorpresaDia16(
    cartaElegida,
    sorpresa,
    contenedor,
    resultado
) {

    if (
        cartaElegida.classList.contains(
            "seleccionada"
        )
    ) {
        return;
    }

    cartaElegida.classList.add(
        "seleccionada"
    );

    const cartas =
        contenedor.querySelectorAll(
            ".carta-eleccion"
        );

    cartas.forEach(
        carta => {

            if (
                carta !== cartaElegida
            ) {

                carta.classList.add(
                    "desaparece"
                );

            }

        }
    );

    setTimeout(
        () => {

            contenedor.style.display =
                "none";

            resultado.style.display =
                "block";

            resultado.innerHTML = `
                <p>
                    Tu elección fue... 👀
                </p>

                <h3>
                    ${sorpresa.nombre}
                </h3>

                <p>
                    ${sorpresa.contenido}
                </p>
            `;

            lanzarConfeti();

        },
        800
    );

}


// ==========================================
// DÍA 17
// ==========================================

function prepararDia17() {

    const codigo =
        document.getElementById(
            "codigoDia17"
        );

    const desbloqueado =
        document.getElementById(
            "contenidoDesbloqueadoDia17"
        );

    if (!codigo || !desbloqueado) {
        return;
    }

    desbloqueado.style.display =
        "none";

}


function desbloquearDia17() {

    const input =
        document.getElementById(
            "codigoDia17"
        );

    const error =
        document.getElementById(
            "errorDia17"
        );

    const bloqueo =
        document.getElementById(
            "bloqueoDia17"
        );

    const contenido =
        document.getElementById(
            "contenidoDesbloqueadoDia17"
        );

    if (
        !input ||
        !contenido
    ) {
        return;
    }

    const codigo =
        input.value.trim();

    if (
        codigo === CODIGO_DIA17
    ) {

        if (error) {
            error.style.display =
                "none";
        }

        if (bloqueo) {
            bloqueo.style.display =
                "none";
        }

        contenido.style.display =
            "block";

        cargarGaleriaDia17();

        lanzarConfeti();

    } else {

        if (error) {
            error.textContent =
                "Código incorrecto. 👀";
            error.style.display =
                "block";
        }

        input.value =
            "";

        input.focus();

    }

}


function cargarGaleriaDia17() {

    const galeria =
        document.getElementById(
            "galeriaDia17"
        );

    if (!galeria) {
        return;
    }

    if (
        galeria.dataset.cargada === "true"
    ) {
        return;
    }

    galeria.dataset.cargada =
        "true";

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const imagen =
            document.createElement(
                "img"
            );

        imagen.src =
            `./recursos/dia17_cancion/foto${i}.jpg`;

        imagen.alt =
            `Foto ${i}`;

        galeria.appendChild(
            imagen
        );

    }

}


function reproducirCancionDia17() {

    const audio =
        document.getElementById(
            "audioDia17"
        );

    const mensaje =
        document.getElementById(
            "mensajeAudioDia17"
        );

    if (!audio) {
        return;
    }

    audio.style.display =
        "block";

    audio.play()
        .catch(
            error => {

                console.log(
                    "El navegador necesita interacción para reproducir el audio:",
                    error
                );

            }
        );

    if (mensaje) {
        mensaje.style.display =
            "block";
    }

}


// ==========================================
// DÍA 18
// ==========================================

function canjearValeDia18() {

    const resultado =
        document.getElementById(
            "valeCanjeadoDia18"
        );

    if (!resultado) {
        return;
    }

    resultado.style.display =
        "block";

    lanzarConfeti();

}


// ==========================================
// DÍA 19
// ==========================================

function mostrarFotoDia19() {

    const oculto =
        document.getElementById(
            "fotoEspejoOculta"
        );

    const revelado =
        document.getElementById(
            "fotoEspejoRevelada"
        );

    if (oculto) {
        oculto.style.display =
            "none";
    }

    if (revelado) {
        revelado.style.display =
            "block";
    }

}


// ==========================================
// DÍA 20
// ==========================================

function mostrarPlanDia20() {

    const detalle =
        document.getElementById(
            "detalleDia20"
        );

    if (!detalle) {
        return;
    }

    detalle.style.display =
        "block";

}


function empezarPlanDia20() {

    const mensaje =
        document.getElementById(
            "mensajeFinalDia20"
        );

    if (!mensaje) {
        return;
    }

    mensaje.style.display =
        "block";

    lanzarConfeti();

}


// ==========================================
// DÍA 22
// ==========================================

function prepararDia22() {

    const galeria =
        document.getElementById(
            "fotosDia22"
        );

    if (!galeria) {
        return;
    }

    if (
        galeria.dataset.iniciado === "true"
    ) {
        return;
    }

    galeria.dataset.iniciado =
        "true";

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const boton =
            document.createElement(
                "button"
            );

        boton.className =
            "foto-graciosa";

        boton.dataset.numero =
            i;

        boton.innerHTML = `
            <span>😂</span>
            <strong>
                Foto ${i}
            </strong>

            <small>
                Toca para revelar
            </small>
        `;

        boton.addEventListener(
            "click",
            () => revelarFotoDia22(
                boton,
                i
            )
        );

        galeria.appendChild(
            boton
        );

    }

}


let fotosDia22Reveladas = 0;


function revelarFotoDia22(
    boton,
    numero
) {

    if (
        boton.classList.contains(
            "revelada"
        )
    ) {
        return;
    }

    boton.classList.add(
        "revelada"
    );

    boton.innerHTML = `
        <img
            src="./recursos/dia22_fotos_graciosas/foto${numero}.jpg"
            alt="Foto graciosa ${numero}"
        >

        <strong>
            😂 Foto ${numero}
        </strong>
    `;

    fotosDia22Reveladas++;

    if (
        fotosDia22Reveladas === 5
    ) {

        const final =
            document.getElementById(
                "finalDia22"
            );

        if (final) {
            final.style.display =
                "block";
        }

    }

}


// ==========================================
// DÍA 23
// ==========================================

function mostrarUltimoMensajeDia23() {

    const mensaje =
        document.getElementById(
            "ultimoMensajeDia23"
        );

    if (!mensaje) {
        return;
    }

    mensaje.style.display =
        "block";

}


// ==========================================
// DÍA 24 — MINI RECUERDOS
// ==========================================

function miniRecuerdoDia24(dia) {

    const contenedor =
        document.getElementById(
            "miniRecuerdoDia24"
        );

    if (!contenedor) {
        return;
    }

    const mensajes = {

        2:
            "Black fue protagonista desde el principio. 🐈‍⬛❤️",

        4:
            "Los famosos patos. Una historia que probablemente nunca vamos a olvidar. 😂🦆",

        6:
            "Una puerta, una sorpresa y yo afuera. 👀❤️",

        7:
            "El día en que Black se convirtió en juego de memoria. 🐈‍⬛",

        8:
            "Tres pequeñas cosas que amo de ti. ❤️",

        9:
            "Fotos que significan mucho más que lo que se ve en ellas. 📸",

        10:
            "Las cinco fotos que tú elegiste para resumir nuestra historia. ❤️",

        11:
            "El día en que comprobamos cuánto recuerdas de nosotros. 🧠",

        12:
            "La historia de la tía Cilvia. 😂",

        13:
            "Sushi + tú + yo. 🍣❤️",

        14:
            "La gran competencia Black vs. Panchita. 🐈‍⬛🐈",

        15:
            "Una rosa porque siempre quiero tener una excusa para darte detalles. 🌹",

        16:
            "El día en que confiaste en tu suerte. 🎁",

        17:
            "Una canción hecha pensando en ti. 🎵❤️",

        18:
            "Un vale para que tú elijas qué hacemos juntos. 🎟️",

        19:
            "Una foto frente al espejo y uno de esos momentos que quedaron para siempre. 🪞",

        20:
            "Una película, comida rica y tiempo juntos. 🎬🍿",

        21:
            "Un poco de locura para el amor más loco y hermoso. 🐈❤️",

        22:
            "Nosotros siendo ridículos. 😂❤️",

        23:
            "El último poquito de espera antes de llegar aquí. ⏳❤️"

    };

    contenedor.innerHTML = `
        <p>
            ${mensajes[dia] || "Un recuerdo nuestro. ❤️"}
        </p>
    `;

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

        pieza.style.opacity =
            "1";

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

    for (
        let i = 0;
        i < 80;
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

        pieza.style.opacity =
            "1";

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

window.abrirCartaDia8 =
    abrirCartaDia8;

window.revelarFotoDia9 =
    revelarFotoDia9;

window.abrirHistoriaDia12 =
    abrirHistoriaDia12;

window.mostrarPlanDia13 =
    mostrarPlanDia13;

window.votarDia14 =
    votarDia14;

window.abrirRosaDia15 =
    abrirRosaDia15;

window.desbloquearDia17 =
    desbloquearDia17;

window.reproducirCancionDia17 =
    reproducirCancionDia17;

window.canjearValeDia18 =
    canjearValeDia18;

window.mostrarFotoDia19 =
    mostrarFotoDia19;

window.mostrarPlanDia20 =
    mostrarPlanDia20;

window.empezarPlanDia20 =
    empezarPlanDia20;

window.mostrarUltimoMensajeDia23 =
    mostrarUltimoMensajeDia23;

window.miniRecuerdoDia24 =
    miniRecuerdoDia24;