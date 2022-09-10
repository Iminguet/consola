'use-strict';
const botonPower = document.getElementById('botonEncendido');
const luzPiloto = document.getElementById('pilotoDeEstado');

console.log(botonPower, luzPiloto);

botonPower.addEventListener('click', function () {
  botonPower.classList.toggle('accionado');
  luzPiloto.classList.toggle('luzEncendida');
});
