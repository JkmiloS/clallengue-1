
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para manejar el botón de encriptar
document.getElementById("botonEncriptar").addEventListener("click", function() {
    const textoIngresado = document.getElementById("ingresoTexto").value;
    const resultado = encriptar(textoIngresado);
    mostrarResultado(resultado);
});

// Función para manejar el botón de desencriptar
document.getElementById("botonDesencriptar").addEventListener("click", function() {
    const textoIngresado = document.getElementById("ingresoTexto").value;
    const resultado = desencriptar(textoIngresado);
    mostrarResultado(resultado);
});

// Función para mostrar el resultado
function mostrarResultado(resultado) {
    const mensajeFinal = document.getElementById("mensajeFinal");
    const botonCopiar = document.getElementById("botonCopiar");
    const respuestaInfo = document.getElementById("respuestaInfo");
    const muñeco = document.querySelector(".muñeco");
    const textoInstrucciones = document.getElementById("textoInstrucciones");

    if (resultado) {
        mensajeFinal.textContent = resultado;
        botonCopiar.classList.remove("oculto");
        respuestaInfo.textContent = "Texto encriptado/desencriptado.";
        muñeco.classList.add("oculto"); // Ocultar muñeco
        textoInstrucciones.classList.add("oculto"); // Ocultar texto de instrucciones
    } else {
        mensajeFinal.textContent = "Ningún mensaje fue encontrado";
        botonCopiar.classList.add("oculto");
        respuestaInfo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        muñeco.classList.remove("oculto"); // Mostrar muñeco
        textoInstrucciones.classList.remove("oculto"); // Mostrar texto de instrucciones
    }
}

// Función para copiar el resultado al portapapeles
document.getElementById("botonCopiar").addEventListener("click", function() {
    const textoCopiar = document.getElementById("mensajeFinal").textContent;
    navigator.clipboard.writeText(textoCopiar).then(() => {
        alert("Texto copiado al portapapeles!");
    });
});
