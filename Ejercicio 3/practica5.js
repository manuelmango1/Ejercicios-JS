const textarea = document.getElementById('miTexto');
const contador = document.getElementById('contador');

textarea.addEventListener('input', function () {
    const caracteresIngresados = textarea.value.length;
    contador.textContent = caracteresIngresados;
});