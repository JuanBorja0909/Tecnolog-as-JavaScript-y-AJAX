// =======================
//   EJERCICIOS JS
// =======================

// Ejercicio 1 – Palíndromo
function ej1() {
    let cad = prompt("Introduce una cadena:");
    if (!cad) return;

    let limpia = cad.toLowerCase().replace(/[\W_]/g, "");
    let esPalindromo = limpia === limpia.split("").reverse().join("");

    document.getElementById("resultado").textContent =
        esPalindromo
            ? `"${cad}" SÍ es un palíndromo`
            : `"${cad}" NO es un palíndromo`;
}

// Ejercicio 2 – Número mayor
function ej2() {
    let a = parseFloat(prompt("Introduce el primer número:"));
    let b = parseFloat(prompt("Introduce el segundo número:"));

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultado").textContent = "Debes introducir números válidos.";
        return;
    }

    let mayor = (a > b) ? a : b;
    document.getElementById("resultado").textContent = "El número mayor es: " + mayor;
}

// Ejercicio 3 – Vocales encontradas
function ej3() {
    let frase = prompt("Introduce una frase:");
    if (!frase) return;

    let vocales = frase.match(/[aeiouáéíóú]/gi);
    let resultado = vocales ? vocales.join(", ") : "No hay vocales.";

    document.getElementById("resultado").textContent = "Vocales encontradas: " + resultado;
}

// Ejercicio 4 – Conteo de vocales
function ej4() {
    let frase = prompt("Introduce una frase:");
    if (!frase) return;

    let conteo = { a:0, e:0, i:0, o:0, u:0 };

    for (let letra of frase.toLowerCase()) {
        if (conteo.hasOwnProperty(letra)) {
            conteo[letra]++;
        }
    }

    let texto = `
A: ${conteo.a}
E: ${conteo.e}
I: ${conteo.i}
O: ${conteo.o}
U: ${conteo.u}
    `;

    document.getElementById("resultado").textContent = texto.trim();
}



// =======================
//   AJAX
// =======================

// 1. Al cargar la página, poner la URL actual por defecto
window.onload = function() {
    document.getElementById("url").value = window.location.href;
};

// 2. Mostrar contenidos vía AJAX
function cargarAjax() {

    const url = document.getElementById("url").value;
    const ajax_estados = document.getElementById("ajax_estados");
    const ajax_contenidos = document.getElementById("ajax_contenidos");
    const ajax_cabeceras = document.getElementById("ajax_cabeceras");
    const ajax_codigo = document.getElementById("ajax_codigo");

    ajax_estados.textContent = "Iniciando petición...";
    ajax_contenidos.textContent = "";
    ajax_cabeceras.textContent = "";
    ajax_codigo.textContent = "";

    let xhr = new XMLHttpRequest();

    // 3. Actualizar estado de la petición en tiempo real
    xhr.onreadystatechange = function() {

        let estados = {
            0: "No iniciada",
            1: "Conexión establecida",
            2: "Petición recibida",
            3: "Procesando petición",
            4: "Completada"
        };

        ajax_estados.textContent = "Estado: " + estados[xhr.readyState];

        if (xhr.readyState === 4) {

            // 5. Código de estado del servidor
            ajax_codigo.textContent = xhr.status + " - " + xhr.statusText;

            // 2. Contenidos de respuesta
            ajax_contenidos.textContent = xhr.responseText;

            // 4. Todas las cabeceras HTTP
            ajax_cabeceras.textContent = xhr.getAllResponseHeaders();
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}
