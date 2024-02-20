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

const cRed = ["rgb(42, 8, 15)", "0 0 2px rgba(223, 4, 4, 1), 0 0 4px rgba(223, 4, 4, 1), 0 0 8px rgba(223, 4, 4, 1), 0 0 16px rgba(131, 7, 7, 1), 0 0 32px rgba(131, 7, 7, 1), 0 0 48px rgba(131, 7, 7, 1), 0 0 50px rgba(42, 8, 15, 1), 0 0 60px rgba(42, 8, 15, 1), 0 0 70px rgba(42, 8, 15, 1)"];
const cBlond = ["rgb(93, 32, 5)", "0 0 2px rgba(255, 217, 0, 1), 0 0 4px rgba(255, 217, 0, 1), 0 0 8px rgba(255, 217, 0, 1), 0 0 16px rgba(161, 89, 7, 1), 0 0 32px rgba(161, 89, 7, 1), 0 0 48px rgba(161, 89, 7, 1), 0 0 50px rgba(93, 32, 5, 1), 0 0 60px rgba(93, 32, 5, 1), 0 0 70px rgba(93, 32, 5, 1)"];
const cBlack = ["rgb(31, 0, 43)", "0 0 2px rgba(148, 0, 211, 1), 0 0 4px rgba(148, 0, 211, 1), 0 0 8px rgba(148, 0, 211, 1), 0 0 16px rgba(87, 38, 127, 1), 0 0 32px rgba(87, 38, 127, 1), 0 0 48px rgba(87, 38, 127, 1), 0 0 50px rgba(48, 20, 71, 1), 0 0 60px rgba(48, 20, 71, 1), 0 0 70px rgba(48, 20, 71, 1)"];


document.getElementById('pRed').addEventListener('click', colorRed);
document.getElementById('opRed').addEventListener('click', colorRed);

document.getElementById('pBlond').addEventListener('click', colorBlond);
document.getElementById('opBlond').addEventListener('click', colorBlond);

document.getElementById('pBlack').addEventListener('click', colorBlack);
document.getElementById('opBlack').addEventListener('click', colorBlack);

document.getElementById('pGreen').addEventListener('click', colorGreen);
document.getElementById('opGreen').addEventListener('click', colorGreen);

function colorRed() {
    navbar.style.background = cRed[0];
    navbar.style.boxShadow = cRed[1];
    inicio.style.background = cRed[0];
    footer.style.background = cRed[0];
    footer.style.boxShadow = cRed[1];
    producto.style.background = cRed[0];
    lema.style.textShadow = cRed[1];
    equipo.style.textShadow = cRed[1];
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.boxShadow = cRed[1];
    }
    for (let i = 0; i < ecards.length; i++) {
        ecards[i].style.boxShadow = "0 0 16px 2px rgba(131, 7, 7, 1)";
    }

    img1.src = 'public/img/ETIQUETA ROJA.png'
    img2.src = 'public/img/ETIQUETA ROJA OSCURA.png';
}

function colorBlond () {
    navbar.style.background = cBlond[0];
    navbar.style.boxShadow = cBlond[1];
    inicio.style.background = cBlond[0];
    footer.style.background = cBlond[0];
    footer.style.boxShadow = cBlond[1];
    producto.style.background = cBlond[0];
    lema.style.textShadow = cBlond[1];
    equipo.style.textShadow = cBlond[1];
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.boxShadow = cBlond[1];
    }
    for (let i = 0; i < ecards.length; i++) {
        ecards[i].style.boxShadow = " 0 0 16px 2px rgba(161, 89, 7, 1)";
    }
    
    img1.src = 'public/img/ETIQUETA DORADA NEGRA.png';
    img2.src = 'public/img/ETIQUETA DORADA.png';
}

function colorGreen() {
}

function colorBlack () {
    navbar.style.background = cBlack[0];
    navbar.style.boxShadow = cBlack[1];
    inicio.style.background = cBlack[0];
    footer.style.background = cBlack[0];
    footer.style.boxShadow = cBlack[1];
    producto.style.background = cBlack[0];
    lema.style.textShadow = cBlack[1];
    equipo.style.textShadow = cBlack[1];
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.boxShadow = cBlack[1];
    }
    for (let i = 0; i < ecards.length; i++) {
        ecards[i].style.boxShadow = "0 0 16px 2px rgba(87, 38, 127, 1)";
    }
    img1.src = 'public/img/ETIQUETA NEGRA.png';
    img2.src = 'public/img/ETIQUETA NEGRA.png';
}

const elemento = document.getElementById('opRed');
const textoOriginal = elemento.innerHTML;

elemento.addEventListener('mouseover', function() {
    elemento.innerHTML = 'Red';
    elemento.style.width = '80px';
    elemento.style.borderTopRightRadius = '50% 50px';
    elemento.style.borderBottomRightRadius = '50% 50px';

});
elemento.addEventListener('mouseout', function() {
    elemento.innerHTML = textoOriginal;
    elemento.style.width = '30px';
    elemento.style.borderTopRightRadius = '50%';
    elemento.style.borderBottomRightRadius = '50%';
});

const elemento2 = document.getElementById('opBlond');
const textoOriginal2 = elemento2.innerHTML;

elemento2.addEventListener('mouseover', function() {
    elemento2.innerHTML = 'Blond';
    elemento2.style.width = '80px';
    elemento2.style.borderTopRightRadius = '50% 50px';
    elemento2.style.borderBottomRightRadius = '50% 50px';
});
elemento2.addEventListener('mouseout', function() {
    elemento2.innerHTML = textoOriginal2;
    elemento2.style.width = '30px';
    elemento2.style.borderTopRightRadius = '50%';
    elemento2.style.borderBottomRightRadius = '50%';
});

const elemento3 = document.getElementById('opGreen');
const textoOriginal3 = elemento3.innerHTML;

elemento3.addEventListener('mouseover', function() {
    elemento3.innerHTML = 'Green';
    elemento3.style.width = '80px';
    elemento3.style.borderTopRightRadius = '50% 50px';
    elemento3.style.borderBottomRightRadius = '50% 50px';
});
elemento3.addEventListener('mouseout', function() {
    elemento3.innerHTML = textoOriginal3;
    elemento3.style.width = '30px';
    elemento3.style.borderTopRightRadius = '50%';
    elemento3.style.borderBottomRightRadius = '50%';
});

const elemento4 = document.getElementById('opBlack');
const textoOriginal4 = elemento4.innerHTML;

elemento4.addEventListener('mouseover', function() {
    elemento4.innerHTML = 'Black';
    elemento4.style.width = '80px';
    elemento4.style.borderTopRightRadius = '50% 50px';
    elemento4.style.borderBottomRightRadius = '50% 50px';
});
elemento4.addEventListener('mouseout', function() {
    elemento4.innerHTML = textoOriginal4;
    elemento4.style.width = '30px';
    elemento4.style.borderTopRightRadius = '50%';
    elemento4.style.borderBottomRightRadius = '50%';
});

document.addEventListener('DOMContentLoaded', function() {
    const recuadro = document.createElement('div');
    recuadro.id = 'recuadro';
    recuadro.innerHTML = 'Interactua con los planetas';
    document.body.appendChild(recuadro);

    recuadro.style.display = 'block';

    document.addEventListener('click', function() {
        recuadro.style.display = 'none';
    });
});
