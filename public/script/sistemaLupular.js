function createStar() {
    const container = document.getElementById("sistLupular")
    for (let i = 0; i < 500; i++) {
        const star = document.createElement("div");
        star.className = "star";

        let size = Math.random() * 2 + 0.1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        let tm = Math.random() * 5 + 1;
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        star.style.backgroundColor = `#${randomColor}`;
        star.style.boxShadow = `0 0 ${tm * 4}px 1px #${randomColor}`;
        star.style.borderRadius = "50%"

        star.style.top = Math.random() * 102 + "%";
        star.style.left = Math.random() * 100 + "%";

        container.appendChild(star);
    }
}

/*
    titulo del proyecto
    descripcion del pin - antecedentes
    alcance
    objetivo general
    hipotesis
    validacion con usuarios
*/
createStar();

const navbar = document.getElementById('navBar');
const inicio = document.getElementById('Inicio');
const footer = document.getElementById('footer');
const lema = document.getElementById('lema');
const equipo = document.getElementById('equipo');
const cards = document.querySelectorAll('.card');
const ecards = document.querySelectorAll('.employee-card');
const producto = document.getElementById('Productos');

const img1 = document.getElementById('pola1');
const img2 = document.getElementById('pola2');

const cRed = ["rgb(42, 8, 15)", "0 0 2px rgba(223, 4, 4, 1), 0 0 4px rgba(223, 4, 4, 1), 0 0 8px rgba(223, 4, 4, 1), 0 0 16px rgba(131, 7, 7, 1), 0 0 32px rgba(131, 7, 7, 1), 0 0 48px rgba(131, 7, 7, 1), 0 0 50px rgba(42, 8, 15, 1), 0 0 60px rgba(42, 8, 15, 1), 0 0 70px rgba(42, 8, 15, 1)", '0 0 8px 0 red', 'public/img/ETIQUETA ROJA.png', 'public/img/ETIQUETA ROJA OSCURA.png'];
const cBlond = ["rgb(93, 32, 5)", "0 0 2px rgba(255, 217, 0, 1), 0 0 4px rgba(255, 217, 0, 1), 0 0 8px rgba(255, 217, 0, 1), 0 0 16px rgba(161, 89, 7, 1), 0 0 32px rgba(161, 89, 7, 1), 0 0 48px rgba(161, 89, 7, 1), 0 0 50px rgba(93, 32, 5, 1), 0 0 60px rgba(93, 32, 5, 1), 0 0 70px rgba(93, 32, 5, 1)", '0 0 8px 0 yellow', 'public/img/ETIQUETA DORADA.png', 'public/img/ETIQUETA DORADA NEGRA.png'];
const cBlack = ["rgb(31, 0, 43)", "0 0 2px rgba(148, 0, 211, 1), 0 0 4px rgba(148, 0, 211, 1), 0 0 8px rgba(148, 0, 211, 1), 0 0 16px rgba(87, 38, 127, 1), 0 0 32px rgba(87, 38, 127, 1), 0 0 48px rgba(87, 38, 127, 1), 0 0 50px rgba(48, 20, 71, 1), 0 0 60px rgba(48, 20, 71, 1), 0 0 70px rgba(48, 20, 71, 1)", '0 0 8px 0 purple', 'public/img/ETIQUETA NEGRA.png', 'public/img/ETIQUETA NEGRA.png'];


document.getElementById('pRed').addEventListener('click', function () {
    cambioColor(cRed);
});
document.getElementById('opRed').addEventListener('click', function () {
    cambioColor(cRed);
});

document.getElementById('pBlond').addEventListener('click', function () {
    cambioColor(cBlond);
});
document.getElementById('opBlond').addEventListener('click', function () {
    cambioColor(cBlond);
});

document.getElementById('pGreen').addEventListener('click', function () {
    cambioColor(cGreen);
});
document.getElementById('opGreen').addEventListener('click', function () {
    cambioColor(cGreen);
});

document.getElementById('pBlack').addEventListener('click', function () {
    cambioColor(cBlack);
});
document.getElementById('opBlack').addEventListener('click', function () {
    cambioColor(cBlack);
});

function cambioColor(vector) {
    navbar.style.background = vector[0];
    navbar.style.boxShadow = vector[1];
    inicio.style.background = vector[0];
    footer.style.background = vector[0];
    footer.style.boxShadow = vector[1];
    producto.style.background = vector[0];
    lema.style.textShadow = vector[1];
    equipo.style.textShadow = vector[1];
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.boxShadow = vector[1];
    }
    for (let i = 0; i < ecards.length; i++) {
        ecards[i].style.boxShadow = vector[2];
    }
    img1.src = vector[3];
    img2.src = vector[4];
}

const opred = document.getElementById('opRed');
addHoverEffect(opred, 'Red');

const opblond = document.getElementById('opBlond');
addHoverEffect(opblond, 'Blond');

const opgreen = document.getElementById('opGreen');
addHoverEffect(opgreen, 'Green');

const opblack = document.getElementById('opBlack');
addHoverEffect(opblack, 'Black');

function addHoverEffect(element, newText) {
    const originalText = element.innerHTML;

    element.addEventListener('mouseover', function () {
        element.style.transition = 'all 0.5s ease';
        element.innerHTML = newText;
        element.style.width = '80px';
        element.style.borderTopRightRadius = '50% 50px';
        element.style.borderBottomRightRadius = '50% 50px';
    });

    element.addEventListener('mouseout', function () {
        element.innerHTML = originalText;
        element.style.width = '30px';
        element.style.borderTopRightRadius = '50%';
        element.style.borderBottomRightRadius = '50%';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const recuadro = document.createElement('div');
    recuadro.id = 'recuadro';
    recuadro.innerHTML = 'Interactua con los planetas';
    document.body.appendChild(recuadro);

    recuadro.style.display = 'block';

    document.addEventListener('click', function () {
        recuadro.style.display = 'none';
    });
});





