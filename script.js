// =====================================================
// SUPABASE
// =====================================================

const SUPABASE_URL =
    "https://wmvfddfbofslycvkldaq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_sxsewzWeWtY3j7IyD9PooQ_AadQog1f";

const clienteSupabase =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// =====================================================
// ELEMENTOS
// =====================================================

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


// =====================================================
// DÍAS
// =====================================================

const dias = [

    // -------------------------------------------------
    // DÍA 1
    // -------------------------------------------------

    {
        numero: 1,
        emoji: "❤️",
        titulo: "Bienvenida",
        contenido: `
            <p>
                Bienvenida a nuestro pequeño calendario. ❤️
            </p>

            <p>
                Durante estos días vas a encontrar
                pequeños recuerdos, desafíos,
                sorpresas y algunas cosas hechas
                especialmente para ti.
            </p>

            <p>
                Espero que disfrutes cada uno
                tanto como yo disfruté preparándolo.
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 2
    // -------------------------------------------------

    {
        numero: 2,
        emoji: "🐈‍⬛",
        titulo: "Black",
        contenido: `
            <p>
                Hoy el protagonista es alguien
                que claramente también forma parte
                de nuestra historia. 😂
            </p>

            <p>
                Black. 🐈‍⬛
            </p>

            <img
                src="./recursos/fotos/dia2.jpg"
                alt="Black"
                class="imagen-dia"
            >
        `
    },


    // -------------------------------------------------
    // DÍA 3
    // -------------------------------------------------

    {
        numero: 3,
        emoji: "🐈‍⬛",
        titulo: "Misión Black",
        contenido: `
            <p>
                Hoy tienes una misión.
            </p>

            <p>
                Quiero tres fotos de Black:
                una tierna, una seria y una
                completamente ridícula. 😂
            </p>

            <p>
                Cuando cumplas la misión,
                recibirás tu recompensa.
            </p>

            <img
                src="./recursos/fotos/dia3-1.jpg"
                alt="Black"
                class="imagen-dia"
            >

            <img
                src="./recursos/fotos/dia3-2.jpg"
                alt="Black"
                class="imagen-dia"
            >

            <img
                src="./recursos/fotos/dia3-3.jpg"
                alt="Black"
                class="imagen-dia"
            >

            <img
                src="./recursos/fotos/vale-dia3.png"
                alt="Vale Día 3"
                class="imagen-dia"
            >
        `
    },


    // -------------------------------------------------
    // DÍA 4
    // -------------------------------------------------

    {
        numero: 4,
        emoji: "😘",
        titulo: "Una pregunta importante",
        contenido: `
            <p>
                ¿Te puedo dar un beso? ❤️
            </p>

            <p>
                Pero cuidado con tu respuesta...
            </p>

            <p>
                Porque si dices que sí,
                oficialmente quedas atrapada. 😂
            </p>

            <img
                src="./recursos/fotos/dia4-patos.jpg"
                alt="Nuestros patos"
                class="imagen-dia"
            >

            <p>
                Y si llegaste hasta aquí,
                probablemente ya sabes
                por qué los patos son parte
                de nuestra historia. 🦆❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 5
    // -------------------------------------------------

    {
        numero: 5,
        emoji: "😂",
        titulo: "Misión Black 2.0",
        contenido: `
            <p>
                Has demostrado oficialmente que estás
                dispuesta a hacer el ridículo por amor. 😂
            </p>

            <p>
                Hoy quiero que me mandes un video
                haciendo la voz de Black mientras
                Black "pelea" con una silla.
            </p>

            <p>
                Cuando me mandes el video,
                yo te voy a entregar el código
                para desbloquear tu premio.
            </p>

            <div
                id="zonaCodigoDia5"
                style="
                    text-align: center;
                    margin-top: 25px;
                "
            >

                <p>
                    <strong>
                        Cuando tengas tu código,
                        escríbelo aquí:
                    </strong>
                </p>

                <input
                    id="codigoDia5"
                    type="text"
                    inputmode="numeric"
                    maxlength="4"
                    placeholder="Código"
                    style="
                        display: block;
                        width: 160px;
                        margin: 15px auto;
                        padding: 12px;
                        text-align: center;
                        font-size: 1.2rem;
                        border-radius: 10px;
                        border: 1px solid #ccc;
                    "
                >

                <button
                    class="boton-accion"
                    onclick="desbloquearPremioDia5()"
                >
                    Desbloquear premio ❤️
                </button>

                <p
                    id="errorDia5"
                    style="
                        display: none;
                        color: #b00020;
                        margin-top: 10px;
                    "
                >
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

                <p
                    style="
                        font-size: 1.5rem;
                        font-weight: bold;
                    "
                >
                    🎁 ¡Premio desbloqueado! 🎁
                </p>

                <p>
                    Nos vamos juntos al mall. ❤️
                </p>

                <p>
                    Tienes un vale de
                    <strong>$50.000</strong>
                    para elegir lo que quieras.
                </p>

                <p>
                    La única condición:
                    <strong>yo voy contigo.</strong> 😌
                </p>

                <p
                    style="
                        font-size: 1.4rem;
                        margin-top: 20px;
                    "
                >
                    💵 💸 💰 🤑
                </p>

            </div>
        `
    },


    // -------------------------------------------------
    // DÍA 6
    // -------------------------------------------------

    {
        numero: 6,
        emoji: "🚪",
        titulo: "Una sorpresa",
        contenido: `
            <p>
                Hoy no hay una misión.
            </p>

            <p>
                Tampoco hay pistas. 👀
            </p>

            <p>
                Solo quiero que hagas una cosa...
            </p>

            <button
                class="boton-accion"
                onclick="sorpresaDia6()"
                style="
                    display: block;
                    margin: 25px auto 0;
                "
            >
                🚪 Abrir la puerta
            </button>

            <div
                id="sorpresaDia6"
                style="
                    display: none;
                    margin-top: 25px;
                    text-align: center;
                "
            >

                <p
                    style="
                        font-size: 1.4rem;
                    "
                >
                    ❤️ ¡Sorpresa! ❤️
                </p>

                <p>
                    <strong>
                        Abre la puerta.
                    </strong>
                </p>

                <p>
                    Estoy afuera. 👀
                </p>

            </div>
        `
    },


    // -------------------------------------------------
    // DÍA 7
    // -------------------------------------------------

    {
        numero: 7,
        emoji: "❤️",
        titulo: "Día 7",
        contenido: `
            <p>
                Aquí viene nuestra próxima sorpresa. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 8
    // -------------------------------------------------

    {
        numero: 8,
        emoji: "❤️",
        titulo: "Día 8",
        contenido: `
            <p>
                Algo especial te espera aquí. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 9
    // -------------------------------------------------

    {
        numero: 9,
        emoji: "❤️",
        titulo: "Día 9",
        contenido: `
            <p>
                Un pequeño pedacito de nuestra historia. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 10
    // -------------------------------------------------

    {
        numero: 10,
        emoji: "❤️",
        titulo: "Día 10",
        contenido: `
            <p>
                Ya llegamos al día 10. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 11
    // -------------------------------------------------

    {
        numero: 11,
        emoji: "❤️",
        titulo: "Día 11",
        contenido: `
            <p>
                Todavía quedan muchas sorpresas. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 12
    // -------------------------------------------------

    {
        numero: 12,
        emoji: "❤️",
        titulo: "Día 12",
        contenido: `
            <p>
                Otro recuerdo para nosotros. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 13
    // -------------------------------------------------

    {
        numero: 13,
        emoji: "🍣",
        titulo: "Día 13",
        contenido: `
            <p>
                Hoy toca una cita con sushi. 🍣❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 14
    // -------------------------------------------------

    {
        numero: 14,
        emoji: "❤️",
        titulo: "Día 14",
        contenido: `
            <p>
                Una sorpresa más para ti. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 15
    // -------------------------------------------------

    {
        numero: 15,
        emoji: "🌹",
        titulo: "Día 15",
        contenido: `
            <p>
                Hoy hay una flor para ti. 🌹
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 16
    // -------------------------------------------------

    {
        numero: 16,
        emoji: "❤️",
        titulo: "Día 16",
        contenido: `
            <p>
                Seguimos escribiendo nuestra historia. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 17
    // -------------------------------------------------

    {
        numero: 17,
        emoji: "❤️",
        titulo: "Día 17",
        contenido: `
            <p>
                Una pequeña sorpresa. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 18
    // -------------------------------------------------

    {
        numero: 18,
        emoji: "🎁",
        titulo: "Día 18",
        contenido: `
            <p>
                Vale por hacer algo que tú quieras. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 19
    // -------------------------------------------------

    {
        numero: 19,
        emoji: "❤️",
        titulo: "Día 19",
        contenido: `
            <p>
                Otro día, otro recuerdo. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 20
    // -------------------------------------------------

    {
        numero: 20,
        emoji: "❤️",
        titulo: "Día 20",
        contenido: `
            <p>
                Otro panorama juntos. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 21
    // -------------------------------------------------

    {
        numero: 21,
        emoji: "😂",
        titulo: "Día 21",
        contenido: `
            <p>
                Un poco de locura para el amor más loco
                y hermoso que he tenido en la vida. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 22
    // -------------------------------------------------

    {
        numero: 22,
        emoji: "❤️",
        titulo: "Día 22",
        contenido: `
            <p>
                Ya falta poquito. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 23
    // -------------------------------------------------

    {
        numero: 23,
        emoji: "❤️",
        titulo: "Día 23",
        contenido: `
            <p>
                Mañana es el gran día. ❤️
            </p>
        `
    },


    // -------------------------------------------------
    // DÍA 24
    // -------------------------------------------------

    {
        numero: 24,
        emoji: "❤️",
        titulo: "Nuestros 3 años",
        contenido: `
            <p>
                Tres años contigo. ❤️
            </p>

            <p>
                Y espero que este sea solamente
                uno de muchos capítulos más.
            </p>

            <p>
                Te amo.
            </p>
        `
    }

];


// =====================================================
// MOSTRAR CALENDARIO
// =====================================================

botonComenzar.addEventListener(
    "click",
    () => {

        portada.style.display = "none";

        calendario.style.display = "block";

        crearCasillas();

    }
);


// =====================================================
// CREAR CASILLAS
// =====================================================

function crearCasillas() {

    casillas.innerHTML = "";

    dias.forEach(
        (dia) => {

            const casilla =
                document.createElement("button");

            casilla.classList.add("casilla");

            casilla.innerHTML = `
                <span class="numero-dia">
                    ${dia.numero}
                </span>
            `;

            casilla.addEventListener(
                "click",
                () => abrirDia(dia)
            );

            casillas.appendChild(casilla);

        }
    );

    prepararPremioDia5();

}


// =====================================================
// ABRIR DÍA
// =====================================================

function abrirDia(dia) {

    modalEmoji.textContent =
        dia.emoji;

    modalTitulo.textContent =
        dia.titulo;

    modalTexto.innerHTML =
        dia.contenido;

    modal.classList.add("activo");

    if (dia.numero === 5) {

        setTimeout(
            () => prepararPremioDia5(),
            50
        );

    }

}


// =====================================================
// CERRAR MODAL
// =====================================================

cerrar.addEventListener(
    "click",
    () => {

        modal.classList.remove("activo");

    }
);


modal.addEventListener(
    "click",
    (e) => {

        if (e.target === modal) {

            modal.classList.remove("activo");

        }

    }
);


// =====================================================
// PREMIO DÍA 5
// =====================================================

function prepararPremioDia5() {

    const premio =
        document.getElementById("premioDia5");

    const zonaCodigo =
        document.getElementById("zonaCodigoDia5");

    if (!premio) return;

    const codigoGuardado =
        localStorage.getItem(
            "premioDia5Desbloqueado"
        );

    if (codigoGuardado === "true") {

        premio.hidden = false;

        premio.classList.remove("oculto");

        premio.style.setProperty(
            "display",
            "block",
            "important"
        );

        if (zonaCodigo) {

            zonaCodigo.style.setProperty(
                "display",
                "none",
                "important"
            );

        }

        return;

    }

    premio.hidden = true;

    premio.classList.remove("oculto");

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


// =====================================================
// DESBLOQUEAR PREMIO DÍA 5
// =====================================================

function desbloquearPremioDia5() {

    const input =
        document.getElementById("codigoDia5");

    const error =
        document.getElementById("errorDia5");

    const premio =
        document.getElementById("premioDia5");

    const zonaCodigo =
        document.getElementById("zonaCodigoDia5");

    if (!input || !premio) return;

    const codigo =
        input.value.trim();

    if (codigo === "2468") {

        localStorage.setItem(
            "premioDia5Desbloqueado",
            "true"
        );

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

        premio.hidden = false;

        premio.classList.remove("oculto");

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


// =====================================================
// CONFETI DE DINERO
// =====================================================

function lanzarConfetiDinero() {

    const emojisDinero = [
        "💵",
        "💸",
        "💰",
        "🤑",
        "💵",
        "💸",
        "💰"
    ];

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const emoji =
            document.createElement("div");

        emoji.textContent =
            emojisDinero[
                Math.floor(
                    Math.random() *
                    emojisDinero.length
                )
            ];

        emoji.style.position =
            "fixed";

        emoji.style.left =
            Math.random() * 100 + "vw";

        emoji.style.top =
            "-40px";

        emoji.style.fontSize =
            (20 + Math.random() * 20) + "px";

        emoji.style.zIndex =
            "99999";

        emoji.style.pointerEvents =
            "none";

        emoji.style.transition =
            "transform 2.5s linear, opacity 2.5s linear";

        document.body.appendChild(
            emoji
        );

        setTimeout(
            () => {

                emoji.style.transform =
                    `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720 - 360}deg)`;

                emoji.style.opacity =
                    "0";

            },
            50
        );

        setTimeout(
            () => {

                emoji.remove();

            },
            2800
        );

    }

}


// =====================================================
// SORPRESA DÍA 6
// =====================================================

function sorpresaDia6() {

    const sorpresa =
        document.getElementById(
            "sorpresaDia6"
        );

    if (!sorpresa) return;

    sorpresa.style.display =
        "block";

}