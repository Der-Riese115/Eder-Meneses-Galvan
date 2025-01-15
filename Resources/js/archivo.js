alert("Bienvenido");
function showContact() {
    document.getElementById('contactBut').classList.add('show');
    document.getElementById('contactDiv').classList.add('show');
}

function hideContact() {
    document.getElementById('contactDiv').classList.remove('show');
    document.getElementById('contactBut').classList.remove('show');
}

function copiarTexto(idBoton) {
    // Define el mapeo de botones y sus respectivos campos de texto
    const botonToTexto = {
        'btn_eml': 'd_eml',
        'btn_tel': 'd_tel',
        'btn_dir': 'd_dir',
        'btn_cop': 'd_cop'
    };

    // Busca el ID asociado al botón presionado
    const idTexto = botonToTexto[idBoton];
    if (!idTexto) {
        console.error('No se encontró un campo de texto para el botón con ID:', idBoton);
        return;
    }

    // Obtiene el valor del texto del elemento con ese ID
    const elementoTexto = document.getElementById(idTexto);
    if (!elementoTexto) {
        console.error('No se encontró el elemento de texto con ID:', idTexto);
        return;
    }

    navigator.clipboard.writeText(elementoTexto.value)
        .then(() => {
            alert('Dato copiado al portapapeles: ' + elementoTexto.value);
        })
        .catch(err => {
            console.error('Error al copiar el dato: ', err);
        });
}