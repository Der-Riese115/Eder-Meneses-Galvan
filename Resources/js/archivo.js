document.addEventListener('DOMContentLoaded', function () {
    const traducciones = {
        "es": {
            "titulo": "Ingeniero en Sistemas Computacionales",
            "botones": {
                "perfil": "Perfil",
                "aptitudes": "Aptitudes",
                "experiencia": "Experiencia",
                "contacto": "Contacto",
                "traducir": "Traducir"
            },
            "perfil": "Datos Personales",
            "aptitudes": "Aptitudes",
            "experiencia": "Experiencia Profesional",
            "idiomas": "Idiomas",
            "lenguajes": "Lenguajes y frameworks de Programación",
            "perfil_texto": "Actualmente curso el 11vo cuatrimestre de la carrera de Ingeniería en Sistemas Computacionales en la (UBAM), poseo conocimientos técnicos de programación y estoy familiarizado con temas como sistemas computacionales. Mi aspiración profesional es desarrollarme en una empresa en áreas como desarrollador de software. Me considero una persona con disposición para aprender e intentar nuevas técnicas y tecnologías.",
            "aptitudes_lista": [
                "Capacidad de análisis",
                "Resolución de problemas",
                "Análisis lógico-matemático flexible",
                "Pensamiento creativo",
                "Conocimientos adaptativos",
                "Proactivo",
                "Comunicación asertiva",
                "Escucha activa"
            ],
            "experiencia_texto": "Soporte de sistemas en Grupo Val - Ro<br>Soporte de sistemas en Parque de las Américas",
            "idiomas_texto": "Dominio del Inglés (nivel B1)",
            "lenguajes_texto": "Java, JavaScript, HTML, PHP, Python, Kotlin, Xamarin, C#, C++, C, Prolog, Bootstrap, Springboot, Node.JS, AJAX, Git"
        },
        "en": {
            "titulo": "Computer Systems Engineer",
            "botones": {
                "perfil": "Profile",
                "aptitudes": "Skills",
                "experiencia": "Experience",
                "contacto": "Contact",
                "traducir": "Translate"
            },
            "perfil": "Personal Data",
            "aptitudes": "Skills",
            "experiencia": "Professional Experience",
            "idiomas": "Languages",
            "lenguajes": "Programming Languages and Frameworks",
            "perfil_texto": "I am currently in the 11th semester of the Computer Systems Engineering degree at (UBAM), I have technical programming knowledge and I am familiar with topics such as computer systems. My professional aspiration is to develop in a company in areas such as software developer. I consider myself a person with a willingness to learn and try new techniques and technologies.",
            "aptitudes_lista": [
                "Analytical skills",
                "Problem solving",
                "Flexible logical-mathematical analysis",
                "Creative thinking",
                "Adaptive knowledge",
                "Proactive",
                "Assertive communication",
                "Active listening"
            ],
            "experiencia_texto": "Systems support at Grupo Val - Ro<br>Systems support at Parque de las Américas",
            "idiomas_texto": "English proficiency (B1 level)",
            "lenguajes_texto": "Java, JavaScript, HTML, PHP, Python, Kotlin, Xamarin, C#, C++, C, Prolog, Bootstrap, Springboot, Node.JS, AJAX, Git"
        }
    };

    // Cargar el archivo JSON con las traducciones
    fetch('Resources/js/traducciones.json')
        .then(response => response.json())
        .then(data => {
            traducciones.es = data.es;
            traducciones.en = data.en;
        })
        .catch(error => console.error('Error al cargar las traducciones:', error));

    let idiomaActual = 'es';

    // Función para cambiar el idioma
    function cambiarIdioma(idioma) {
        idiomaActual = idioma;
        actualizarTextos();
    }

    // Función para actualizar los textos en la página
    function actualizarTextos() {
        // Actualizar el título del encabezado
        document.querySelector('.major').textContent = traducciones[idiomaActual].titulo;

        // Actualizar los textos de los botones en la barra de navegación
        const botonesNav = document.querySelectorAll('.navbar .icon-button');
        botonesNav.forEach(boton => {
            const titulo = boton.getAttribute('title').toLowerCase();
            if (titulo in traducciones[idiomaActual].botones) {
                boton.querySelector('span').textContent = traducciones[idiomaActual].botones[titulo];
            }
        });

        // Actualizar las secciones
        document.querySelector('#perfil h3').textContent = traducciones[idiomaActual].perfil;
        document.querySelector('#perfil p').textContent = traducciones[idiomaActual].perfil_texto;

        document.querySelector('#aptitudes h3').textContent = traducciones[idiomaActual].aptitudes;
        const aptitudesLista = document.querySelector('#aptitudes ul');
        aptitudesLista.innerHTML = traducciones[idiomaActual].aptitudes_lista.map(item => `<li>${item}</li>`).join('');

        document.querySelector('#experiencia h3').textContent = traducciones[idiomaActual].experiencia;
        document.querySelector('#experiencia p').innerHTML = traducciones[idiomaActual].experiencia_texto;

        document.querySelectorAll('.section')[3].querySelector('h3').textContent = traducciones[idiomaActual].idiomas;
        document.querySelectorAll('.section')[3].querySelector('p').textContent = traducciones[idiomaActual].idiomas_texto;

        document.querySelectorAll('.section')[4].querySelector('h3').textContent = traducciones[idiomaActual].lenguajes;
        document.querySelectorAll('.section')[4].querySelector('p').textContent = traducciones[idiomaActual].lenguajes_texto;
    }

    // Asignar la función de cambio de idioma al botón de traducción en la barra de navegación
    document.querySelector('.navbar .icon-button[title="Traducir"]').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar recarga de la página
        const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
        cambiarIdioma(nuevoIdioma);
    });

    // Asignar la función de cambio de idioma al botón de traducción en la barra lateral
    document.querySelector('.side-menu a[title="Traducir"]').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar recarga de la página
        const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
        cambiarIdioma(nuevoIdioma);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    alert("Bienvenido a la página de Eder Meneses Galvan");
});

document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById('stars-container');

    // Generar estrellas aleatorias
    function createStars() {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.animationDuration = (Math.random() * 5 + 5) + 's';
            star.style.opacity = Math.random();

            starsContainer.appendChild(star);
        }
    }

    createStars();
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