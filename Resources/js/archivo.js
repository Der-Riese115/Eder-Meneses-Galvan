document.addEventListener('DOMContentLoaded', function () {
    const traducciones = {
    "es": {
        "titulo": "Ingeniero en Sistemas Computacionales",
        "botones": {
            "perfil": "Perfil",
            "trasfondo": "Trasfondo Académico",
            "conocimientos": "Conocimientos Técnicos",
            "lenguajes": "Lenguajes y Frameworks",
            "idiomas": "Idiomas",
            "aptitudes": "Aptitudes",
            "experiencia": "Experiencia Profesional",
            "contacto": "Contacto",
            "traducir": "Traducir"
        },
        "perfil": "Datos Personales",
        "perfil_texto": "Actualmente curso el 11vo cuatrimestre de la carrera de Ingeniería en Sistemas Computacionales en la (UBAM), con un promedio de 9.5, tengo conocimientos técnicos de programación y estoy familiarizado con temas como sistemas computacionales. Mi aspiración profesional es desarrollarme en una empresa en áreas como desarrollador de software. Me considero una persona con disposición para aprender e intentar nuevas técnicas y tecnologías.",
        "trasfondo": "Trasfondo Académico",
        "trasfondo_texto": "<li>UNIVERSIDAD BANCARIA DE MÉXICO - Ingeniería en Sistemas Computacionales | En curso (11vo. Cuatrimestre).</li><li>UNIVERSIDAD BANCARIA DE MÉXICO - Técnico en Programación</li>",
        "conocimientos": "Conocimientos Técnicos",
        "conocimientos_lista": [
            "Conocimientos de programación: Java, JavaScript, HTML, PHP, Python.",
            "Desarrollo de bases de datos: SQL, y GUIs para SQL.",
            "Conocimiento en sistemas operativos: Windows, Linux.",
            "Programación orientada a objetos (OOP), principios y prácticas de OOP que permiten el desarrollo de soluciones de software modulares y mantenibles.",
            "Desarrollo de estructuras de datos: capaz de diseñar e implementar estructuras de datos eficientes para la optimización de algoritmos y procesamiento de datos.",
            "Desarrollo de circuitos de baja integración.",
            "Diseño y modificación de circuitos para la creación rápida de prototipos y experimentación de hardware.",
            "Habilidades de prueba: Conocimientos en metodologías de prueba de software para garantizar la funcionalidad de los sistemas desarrollados.",
            "Álgebra booleana: Conocimientos en hacer y simplificar expresiones booleanas.",
            "Conocimientos de Microsoft Office (Word, Excel, Visio, PowerPoint).",
            "Conocimientos del software Enterprise Architect.",
            "Conocimiento de softwares de diseño Adobe (Photoshop, Illustrator, Flash/Animate, After Effects, Dreamweaver) y Affinity (Photo, Design)."
        ],
        "lenguajes": "Lenguajes y Frameworks de Programación",
        "lenguajes_texto": "Java, Kotlin, Xamarin, C#, C++, C, Bootstrap, Springboot, Node.JS, Python, Git.",
        "idiomas": "Idiomas",
        "idiomas_texto": "Dominio del Inglés (nivel B2).",
        "aptitudes": "Aptitudes",
        "aptitudes_lista": [
            "Capacidad de análisis",
            "Resolución de problemas",
            "Capacidad de concentración",
            "Pensamiento creativo",
            "Persistencia",
            "Proactivo",
            "Comunicación asertiva",
            "Escucha activa"
        ],
        "experiencia": "Experiencia Profesional",
        "experiencia_texto": "<li>Soporte de sistemas en Grupo Val - Ro</li>"+
        "<ol>Mantenimiento de equipos de cómputo.</ol>"+
        "<ol>Control de inventarios.</ol>"+
        "<ol>Atención al usuario.</ol>"+
        "<li>Soporte de sistemas en Parque de las Américas</li>"+
        "<ol>Gestión de redes y dominios.</ol>"
    },
    "en": {
        "titulo": "Computer Systems Engineer",
        "botones": {
            "perfil": "Profile",
            "trasfondo": "Academic Background",
            "conocimientos": "Technical Skills",
            "lenguajes": "Programming Languages and Frameworks",
            "idiomas": "Languages",
            "aptitudes": "Skills",
            "experiencia": "Professional Experience",
            "contacto": "Contact",
            "traducir": "Translate"
        },
        "perfil": "Personal Data",
        "perfil_texto": "I am currently in the 11th semester of the Computer Systems Engineering degree at (UBAM), with a GPA of 9.5. I have technical programming knowledge and am familiar with topics such as computer systems. My professional aspiration is to develop in a company in areas such as software developer. I consider myself a person with a willingness to learn and try new techniques and technologies.",
        "trasfondo": "Academic Background",
        "trasfondo_texto": "<li>UNIVERSIDAD BANCARIA DE MÉXICO - Computer Systems Engineering | In progress (11th Semester).</li><li>UNIVERSIDAD BANCARIA DE MÉXICO - Programming Technician</li>",
        "conocimientos": "Technical Skills",
        "conocimientos_lista": [
            "Programming knowledge: Java, JavaScript, HTML, PHP, Python.",
            "Database development: SQL, and GUIs for SQL.",
            "Knowledge of operating systems: Windows, Linux.",
            "Object-oriented programming (OOP), OOP principles and practices that enable the development of modular and maintainable software solutions.",
            "Data structures development: capable of designing and implementing efficient data structures for algorithm optimization and data processing.",
            "Low-integration circuit development.",
            "Circuit design and modification for rapid prototyping and hardware experimentation.",
            "Testing skills: Knowledge of software testing methodologies to ensure the functionality of developed systems.",
            "Boolean algebra: Knowledge of creating and simplifying Boolean expressions.",
            "Knowledge of Microsoft Office (Word, Excel, Visio, PowerPoint).",
            "Knowledge of Enterprise Architect software.",
            "Knowledge of Adobe design software (Photoshop, Illustrator, Flash/Animate, After Effects, Dreamweaver) and Affinity (Photo, Design)."
        ],
        "lenguajes": "Programming Languages and Frameworks",
        "lenguajes_texto": "Java, Kotlin, Xamarin, C#, C++, C, Bootstrap, Springboot, Node.JS, Python, Git.",
        "idiomas": "Languages",
        "idiomas_texto": "English proficiency (B2 level).",
        "aptitudes": "Skills",
        "aptitudes_lista": [
            "Analytical skills",
            "Problem solving",
            "Concentration ability",
            "Creative thinking",
            "Persistence",
            "Proactive",
            "Assertive communication",
            "Active listening"
        ],
        "experiencia": "Professional Experience",
        "experiencia_texto": "<li>Systems support at Grupo Val - Ro</li>"+
        "<ol>Computer equipment maintenance.</ol>"+
        "<ol>Inventory control.</ol>"+
        "<ol>User support.</ol>"+
        "<li>Systems support at Parque de las Américas</li>"+
        "<ol>Network and domain management.</ol>"
    }
};

    // Cargar el archivo JSON con las traducciones
    fetch('traducciones.json')
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
        document.querySelector('#perfil ul').textContent = traducciones[idiomaActual].perfil_texto;
    
        document.querySelector('#trasfondo h3').textContent = traducciones[idiomaActual].trasfondo;
        document.querySelector('#trasfondo ul').innerHTML = traducciones[idiomaActual].trasfondo_texto;
    
        document.querySelector('#conocimientos h3').textContent = traducciones[idiomaActual].conocimientos;
        const conocimientosLista = document.querySelector('#conocimientos ul');
        conocimientosLista.innerHTML = traducciones[idiomaActual].conocimientos_lista.map(item => `<li>${item}</li>`).join('');
    
        document.querySelector('#lenguajes h3').textContent = traducciones[idiomaActual].lenguajes;
        const lenguajesLista = document.querySelector('#lenguajes ul');
        lenguajesLista.innerHTML = `
            <li>
                <span>Java</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 78%;"></div>
                    <span class="progress-text">78%</span>
                </div>
            </li>
            <li>
                <span>Kotlin</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 65%;"></div>
                    <span class="progress-text">65%</span>
                </div>
            </li>
            <li>
                <span>Xamarin</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 65%;"></div>
                    <span class="progress-text">65%</span>
                </div>
            </li>
            <li>
                <span>C#, C++, C</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 70%;"></div>
                    <span class="progress-text">70%</span>
                </div>
            </li>
            <li>
                <span>Bootstrap</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 45%;"></div>
                    <span class="progress-text">45%</span>
                </div>
            </li>
            <li>
                <span>Springboot</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 65%;"></div>
                    <span class="progress-text">65%</span>
                </div>
            </li>
            <li>
                <span>Node.JS</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 65%;"></div>
                    <span class="progress-text">65%</span>
                </div>
            </li>
            <li>
                <span>Python</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 75%;"></div>
                    <span class="progress-text">75%</span>
                </div>
            </li>
            <li>
                <span>Git</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 40%;"></div>
                    <span class="progress-text">40%</span>
                </div>
            </li>
        `;
    
        document.querySelector('#idiomas h3').textContent = traducciones[idiomaActual].idiomas;
        const idiomasLista = document.querySelector('#idiomas ul');
        idiomasLista.innerHTML = `
            <li>
                <span>${traducciones[idiomaActual].idiomas_texto}</span>
                <div class="progress-bar">
                    <div class="progress" style="width: 66%;"></div>
                    <span class="progress-text">66%</span>
                </div>
            </li>
        `;
    
        document.querySelector('#aptitudes h3').textContent = traducciones[idiomaActual].aptitudes;
        const aptitudesLista = document.querySelector('#aptitudes ul');
        aptitudesLista.innerHTML = traducciones[idiomaActual].aptitudes_lista.map(item => `<li>${item}</li>`).join('');
    
        document.querySelector('#experiencia h3').textContent = traducciones[idiomaActual].experiencia;
        document.querySelector('#experiencia ul').innerHTML = traducciones[idiomaActual].experiencia_texto;
    }

    // Función para desplazarse al inicio de la página
    document.getElementById('btnInicio').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar comportamiento predeterminado del enlace
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

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

// Función para ajustar el menú lateral y el contenido principal
function adjustLayout() {
    const sideMenu = document.getElementById('sideMenu');
    const mainContent = document.querySelector('.main-content');

    if (window.innerWidth <= 768) {
        // En dispositivos móviles, ajusta el menú lateral y el contenido principal
        if (sideMenu.classList.contains('show')) {
            mainContent.classList.add('menu-visible');
        } else {
            mainContent.classList.remove('menu-visible');
        }
    } else {
        // En pantallas más grandes, asegúrate de que el menú lateral no afecte el contenido
        mainContent.classList.remove('menu-visible');
    }
}

// Ajustar el layout al cargar la página y al redimensionar la ventana
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

// Mostrar u ocultar el menú lateral
document.addEventListener('scroll', function () {
    const sideMenu = document.getElementById('sideMenu');
    const header = document.querySelector('.header');

    if (window.scrollY > header.clientHeight) {
        sideMenu.classList.add('show');
        adjustLayout(); // Ajusta el layout cuando se muestra el menú
    } else {
        sideMenu.classList.remove('show');
        adjustLayout(); // Ajusta el layout cuando se oculta el menú
    }
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
    // Función para desplazamiento suave
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave
            block: 'start'      // Alinea la sección en la parte superior de la ventana
        });
    }
}

// Asignar el desplazamiento suave a todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado
        const target = this.getAttribute('href'); // Obtener el destino (ej: #perfil)
        smoothScroll(target); // Aplicar desplazamiento suave
    });
});

// Función para el botón de inicio
document.getElementById('btnInicio').addEventListener('click', function (event) {
    event.preventDefault(); // Evitar comportamiento predeterminado
    smoothScroll('body'); // Desplazarse al inicio de la página
});
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

// Variable para rastrear si la sección de contacto está visible
let isContactVisible = false;

// Función para mostrar la sección de contacto
function showContact() {
    const contactDiv = document.getElementById('contactDiv');
    contactDiv.classList.add('show');
    isContactVisible = true; // Actualiza el estado
}

// Función para ocultar la sección de contacto
function hideContact() {
    const contactDiv = document.getElementById('contactDiv');
    contactDiv.classList.remove('show');
    isContactVisible = false; // Actualiza el estado
}

// Manejar el redimensionamiento de la ventana
window.addEventListener('resize', function () {
    const contactDiv = document.getElementById('contactDiv');
    if (isContactVisible) {
        // Si la sección de contacto estaba visible, asegúrate de que siga visible
        contactDiv.classList.add('show');
    } else {
        // Si la sección de contacto estaba oculta, asegúrate de que siga oculta
        contactDiv.classList.remove('show');
    }
});

// Inicialización de la sección de contacto
document.addEventListener('DOMContentLoaded', function () {
    // Asegúrate de que la sección de contacto esté oculta al cargar la página
    hideContact();
});