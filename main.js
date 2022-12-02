const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorElement) {
    const elemento = document.querySelector(seletorElement);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento ou seletor não encontrado!')
    }
}

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // template string
    const idAudio = `#som_${instrumento}`;
    // console.log(idAudio);
    tecla.onclick = function () {
    tocaSom(idAudio);
   }
   tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

   }
    tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
   }

    // console.log(contador);
}


