document.addEventListener("DOMContentLoaded", function () {
    alert("Bienvenido a la página de Eder Meneses Galvan");
});

document.addEventListener('scroll', function () {
    const sideMenu = document.getElementById('sideMenu');
    const header = document.querySelector('.header');

    if (window.scrollY > header.clientHeight) {
        sideMenu.classList.add('show');
    } else {
        sideMenu.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.header').offsetHeight;

    const figures = [];

    class Figure {
        constructor(x, y, radius, dx, dy, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = dx;
            this.dy = dy;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();
        }

        update() {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    function init() {
        figures.length = 0; // Limpia las figuras existentes
        for (let i = 0; i < 10; i++) {
            const radius = Math.random() * 30 + 20;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 4;
            const dy = (Math.random() - 0.5) * 4;
            const colors = ['#4facfe', '#00c6ff', '#36d1dc', '#007ef5'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            figures.push(new Figure(x, y, radius, dx, dy, color));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        figures.forEach(figure => figure.update());
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector('.header').offsetHeight;
        init();
    });

    init();
    animate();
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