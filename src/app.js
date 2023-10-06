/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = [
    "Pennywise",
    "El Jinete sin Cabeza",
    "Un selenita",
    "Un ser venido de otro planeta",
    "Godzilla",
    "Drácula",
    "Cthulhu"
  ];
  let action = [
    "comió",
    "destruyó",
    "quemó",
    "desintegró",
    "pulverizó",
    "escondió",
    "partió"
  ];
  let what = [
    "las llaves de mi casa",
    "el tejado del vecino",
    "mi coche nuevo",
    "las gafas de mi abuela",
    "los apuntes de HTML",
    "el monopatín de mi hermano pequeño"
  ];
  let when = [
    "después del almuerzo",
    "justo a tiempo",
    "después del concierto",
    "durante el viaje de fin de curso",
    "depués de las clases",
    "durante la misa del domingo",
    "durante la proyección de la película"
  ];

  function createExcuse() {
    let whoRam = who[Math.floor(Math.random() * who.length)];
    let actionRam = action[Math.floor(Math.random() * action.length)];
    let whatRam = what[Math.floor(Math.random() * what.length)];
    let whenRam = when[Math.floor(Math.random() * when.length)];

    return `${whoRam} ${actionRam} ${whatRam} ${whenRam}`;
  }

  console.log(createExcuse());
  const excuseElement = document.getElementById("excuse");
  const generatedExcuse = createExcuse();
  excuseElement.textContent = generatedExcuse;
};

function refreshPage() {
  location.reload();
}
