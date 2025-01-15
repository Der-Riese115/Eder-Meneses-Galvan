alert("Bienvenido");
function showContact() {
    document.getElementById('contactBut').classList.add('show');
    document.getElementById('contactDiv').classList.add('show');
}

function hideContact() {
    document.getElementById('contactDiv').classList.remove('show');
    document.getElementById('contactBut').classList.remove('show');
}
