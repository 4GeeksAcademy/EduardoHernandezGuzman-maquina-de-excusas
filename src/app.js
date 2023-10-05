/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = [
    "Un oso",
    "Mi primo del pueblo",
    "Un selenita",
    "Un ser venido de otro planeta",
    "Godzilla",
    "Drácula",
    "Cthulhu"
  ];
  let accion = [
    "comió",
    "destruyó",
    "quemó",
    "desintegró",
    "pulverizó",
    "escondió",
    "partió"
  ];
  let que = [
    "las llaves de mi casa",
    "el tejado del vecino",
    "mi coche nuevo",
    "las gafas de mi abuela",
    "los apuntes de HTML",
    "el monopatín de mi hermano pequeño"
  ];
  let cuando = [
    "después del almuerzo",
    "justo a tiempo",
    "después del concierto",
    "durante el viaje de fin de curso",
    "depués de las clases",
    "durante la misa del domingo",
    "durante la proyección de la película"
  ];

  function generarExcusa() {
    let quienRam = quien[Math.floor(Math.random() * quien.length)];
    let accionRam = accion[Math.floor(Math.random() * accion.length)];
    let queRam = que[Math.floor(Math.random() * que.length)];
    let cuandoRam = cuando[Math.floor(Math.random() * cuando.length)];

    return `${quienRam} ${accionRam} ${queRam} ${cuandoRam}`;
  }

  console.log(generarExcusa());
  const elementoExcusa = document.getElementById("excusa");
  const excusaGenerada = generarExcusa();
  elementoExcusa.textContent = excusaGenerada;
};

function refreshPage() {
  location.reload();
}
