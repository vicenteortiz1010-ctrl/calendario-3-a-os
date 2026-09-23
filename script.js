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
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ==========================================
// DÍAS DESBLOQUEADOS
// ==========================================

let diasDesbloqueados = new Set();

try {

    const guardados = JSON.parse(
        localStorage.getItem("diasDesbloqueados") || "[]"
    );

    diasDesbloqueados = new Set(guardados);

} catch (error) {

    diasDesbloqueados = new Set();

}


// ==========================================
// DATOS DE LOS DÍAS
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
            <p>Hoy el protagonista es alguien muy importante… 🐱❤️</p>
            <p>Black tiene algo que decirte.</p>
        `
    },

    {
        numero: 3,
        emoji: "🎮",
        titulo: "Nuestro lado competitivo",
        contenido: `
            <p>Porque sí… también somos un poquito competitivos 😂🎮</p>
        `
    },

    {
        numero: 4,
        emoji: "📸",
        titulo: "Un recuerdo nuestro",
        contenido: `
            <p>Hay fotos que simplemente guardan un momento.</p>
            <p>Y hay fotos que guardan una historia entera. ❤️</p>
        `
    },

    {
        numero: 5,
        emoji: "😂",
        titulo: "Para reírnos un rato",
        contenido: `
            <p>Porque una relación sin momentos ridículos no sería la nuestra 😂❤️</p>
        `
    },

    {
        numero: 6,
        emoji: "❤️",
        titulo: "Una cita especial",
        contenido: `
            <p>Hoy tenemos una cita ❤️</p>
            <p>Porque al final el tiempo se lo hace uno.</p>
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
// ELEMENTOS DEL HTML
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
    document.getElementById("recompensaDesbloqueo");

const recompensaDia =
    document.getElementById("recompensaDia");

const recompensaEmoji =
    document.getElementById("recompensaEmoji");

const recompensaTitulo =
    document.getElementById("recompensaTitulo");

const adminPanel =
    document.getElementById("adminPanel");

const adminDias =
    document.getElementById("adminDias");

const cerrarAdmin =
    document.getElementById("cerrarAdmin");

const bloquearTodosAdmin =
    document.getElementById("bloquearTodosAdmin");


// ==========================================
// CARGAR DESBLOQUEOS DESDE SUPABASE
// ==========================================

async function cargarDiasDesdeSupabase() {

    try {

        const {
            data,
            error
        } = await clienteSupabase
            .from("desbloqueos")
            .select("id, dia, desbloqueado");

        if (error) {
            throw error;
        }

        if (data && data.length > 0) {

            diasDesbloqueados.clear();

            data.forEach(registro => {

                if (registro.desbloqueado) {

                    diasDesbloqueados.add(
                        Number(registro.dia)
                    );

                }

            });

            localStorage.setItem(
                "diasDesbloqueados",
                JSON.stringify(
                    [...diasDesbloqueados]
                )
            );

            generarCalendario();

        }

        console.log(
            "Desbloqueos sincronizados con Supabase ❤️"
        );

    } catch (error) {

        console.error(
            "No se pudieron cargar los desbloqueos desde Supabase:",
            error
        );

    }

}


// ==========================================
// GUARDAR DÍAS LOCALMENTE
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
// GUARDAR DÍA EN SUPABASE
// ==========================================

async function guardarDiaEnSupabase(numero, desbloqueado) {

    console.log("INTENTANDO GUARDAR EN SUPABASE:", numero, desbloqueado);

    try {

        const { data, error } = await clienteSupabase
            .from("desbloqueos")
            .upsert(
                {
                    id: numero,
                    dia: numero,
                    desbloqueado: desbloqueado
                },
                {
                    onConflict: "id"
                }
            );

        if (error) {
            console.error("ERROR AL GUARDAR EN SUPABASE:", error);
            return;
        }

        console.log("GUARDADO CORRECTAMENTE EN SUPABASE:", numero);

    } catch (error) {

        console.error("ERROR DE CONEXIÓN CON SUPABASE:", error);

    }
}


// ==========================================
// COMENZAR CALENDARIO
// ==========================================

function comenzarCalendario() {

    portada.style.display = "none";

    calendario.style.display = "block";

    if (!diasDesbloqueados.has(1)) {

        desbloquearDia(1, true);

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

    dias.forEach(dia => {

        const caja =
            document.createElement("button");

        caja.className = "caja";


        // DESBLOQUEADO

        if (diasDesbloqueados.has(dia.numero)) {

            caja.classList.add("desbloqueada");

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


        // BLOQUEADO

        } else {

            caja.classList.add("bloqueada");

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

        casillas.appendChild(caja);

    });

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

    modal.classList.add("activo");

}


// ==========================================
// MOSTRAR BLOQUEADO
// ==========================================

function mostrarBloqueado() {

    modalEmoji.textContent = "🔒";

    modalTitulo.textContent =
        "Todavía no es tiempo jajaja ❤️";

    modalTexto.innerHTML = `
        <p>
            Vas a tener que esperar un poquito más 👀
        </p>
    `;

    modal.classList.add("activo");

}


// ==========================================
// CERRAR MODAL
// ==========================================

cerrar.addEventListener(
    "click",
    () => {

        modal.classList.remove("activo");

    }
);


modal.addEventListener(
    "click",
    (event) => {

        if (event.target === modal) {

            modal.classList.remove("activo");

        }

    }
);


// ==========================================
// DESBLOQUEAR DÍA
// ==========================================

function desbloquearDia(
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

    diasDesbloqueados.add(numero);

    guardarDias();

    guardarDiaEnSupabase(
        numero,
        true
    );

    generarCalendario();

    actualizarAdmin();

    if (celebrar) {

        lanzarConfeti();

        mostrarRecompensa(dia);

    }

}


// ==========================================
// RECOMPENSA
// ==========================================

function mostrarRecompensa(dia) {

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
// CONFETI
// ==========================================

function lanzarConfeti() {

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

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const confeti =
            document.createElement("div");

        confeti.className =
            "confeti";

        confeti.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.animationDelay =
            Math.random() * 2 + "s";

        confeti.style.animationDuration =
            3 + Math.random() * 3 + "s";

        document.body.appendChild(
            confeti
        );

        setTimeout(
            () => confeti.remove(),
            7000
        );

    }

}


// ==========================================
// PANEL ADMIN
// ==========================================

function abrirPanelAdmin() {

    adminPanel.classList.add(
        "activo"
    );

    actualizarAdmin();

}


function cerrarPanelAdministrador() {

    adminPanel.classList.remove(
        "activo"
    );

}


function actualizarAdmin() {

    if (!adminDias) {
        return;
    }

    adminDias.innerHTML = "";

    dias.forEach(dia => {

        const boton =
            document.createElement("button");

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
            () => {

                if (
                    diasDesbloqueados.has(
                        dia.numero
                    )
                ) {

                    diasDesbloqueados.delete(
                        dia.numero
                    );

                    guardarDias();

                    guardarDiaEnSupabase(
                        dia.numero,
                        false
                    );

                    generarCalendario();

                    actualizarAdmin();

                } else {

                    desbloquearDia(
                        dia.numero,
                        true
                    );

                }

            }
        );

        adminDias.appendChild(
            boton
        );

    });

}


// ==========================================
// CERRAR ADMIN
// ==========================================

cerrarAdmin.addEventListener(
    "click",
    cerrarPanelAdministrador
);


adminPanel.addEventListener(
    "click",
    (event) => {

        if (
            event.target === adminPanel
        ) {

            cerrarPanelAdministrador();

        }

    }
);


// ==========================================
// BLOQUEAR TODOS
// ==========================================

bloquearTodosAdmin.addEventListener(
    "click",
    () => {

        diasDesbloqueados.clear();

        guardarDias();

        dias.forEach(dia => {

            guardarDiaEnSupabase(
                dia.numero,
                false
            );

        });

        generarCalendario();

        actualizarAdmin();

    }
);


// ==========================================
// ATAJO SECRETO
// CTRL + SHIFT + A
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

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

botonComenzar.addEventListener(
    "click",
    comenzarCalendario
);


// ==========================================
// INICIAR
// ==========================================

generarCalendario();


// ==========================================
// SINCRONIZAR CON SUPABASE
// ==========================================

cargarDiasDesdeSupabase();


// ==========================================
// HACER FUNCIONES DISPONIBLES
// ==========================================

window.comenzarCalendario =
    comenzarCalendario;

window.desbloquearDia =
    desbloquearDia;

window.abrirPanelAdmin =
    abrirPanelAdmin;