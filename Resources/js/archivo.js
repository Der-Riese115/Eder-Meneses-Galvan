document.addEventListener("DOMContentLoaded", function () {
    alert("Bienvenido a la página de Eder Meneses Galvan");
});

function showContact() {
    document.getElementById('contactDiv').classList.add('show');
}

function hideContact() {
    document.getElementById('contactDiv').classList.remove('show');
}

function copiarTexto(idBoton) {
    const botonToTexto = {
        'btn_eml': 'eder_isc_mg101203@outlook.com',
        'btn_tel': '5544468317',
        'btn_dir': 'Teoloyucan, Estado de México',
        'btn_cop': '54786'
    };

    const texto = botonToTexto[idBoton];
    if (!texto) {
        console.error('No se encontró un texto asociado al botón con ID:', idBoton);
        return;
    }

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Dato copiado al portapapeles: ' + texto);
        })
        .catch(err => {
            console.error('Error al copiar el dato: ', err);
        });
}