'use-strict';
const botonPower = document.getElementById('botonEncendido');
const luzPiloto = document.getElementById('pilotoDeEstado');
let fondoPantalla = document.querySelector('.videoJuego');

console.log(fondoPantalla);

const numeroAleatorio = function () {
  const numero = Math.trunc(Math.random() * 4) + 1;
  fondoPantalla.src = `./img/pantalla-${numero}.gif`;
};

botonPower.addEventListener('click', function () {
  botonPower.classList.toggle('accionado');
  luzPiloto.classList.toggle('luzEncendida');
  if (botonPower.classList.contains('accionado')) {
    numeroAleatorio();
  } else {
    fondoPantalla.src = `./img/static.gif`;
  }
});
