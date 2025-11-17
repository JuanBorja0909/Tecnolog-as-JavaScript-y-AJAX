window.onload = function () {
    document.getElementById("url").value = window.location.href;
};

function cargarContenido() {
    let url = document.getElementById("url").value;
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        let estados = [
            "0 - No iniciada",
            "1 - Cargando",
            "2 - Cargada",
            "3 - Procesando",
            "4 - Completada"
        ];
        document.getElementById("estados").innerHTML =
            "readyState: " + xhr.readyState + " → " + estados[xhr.readyState];

        if (xhr.readyState === 4) {
            document.getElementById("contenidos").innerText = xhr.responseText;
            document.getElementById("cabeceras").innerText =
                xhr.getAllResponseHeaders();
            document.getElementById("codigo").innerText =
                xhr.status + " " + xhr.statusText;
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}
