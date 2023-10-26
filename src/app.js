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
    "Cthulhu",
    "El payaso de los globos",
    "El dios primigenio",
    "La bruja malvada",
    "El zombi hambriento",
    "El fantasma vengativo",
    "El demonio infernal",
    "El espíritu maligno",
    "El monstruo marino"
  ];
  let action = [
    "comió",
    "destruyó",
    "quemó",
    "desintegró",
    "pulverizó",
    "escondió",
    "partió",
    "aplastó",
    "aniquiló",
    "incineró",
    "trituró"
  ];
  let what = [
    "las llaves de mi casa",
    "el tejado del vecino",
    "mi coche nuevo",
    "las gafas de mi abuela",
    "los apuntes de HTML",
    "el monopatín de mi hermano pequeño",
    "el teléfono de mi madre",
    "el lápiz de color rojo",
    "el juguete favorito de mi hijo",
    "el jersey de lana",
    "la taza de café",
    "la mochila del colegio",
    "el ordenador portátil",
    "la cartera de cuero",
    "el anillo de oro"
  ];
  let when = [
    "después del almuerzo",
    "justo a tiempo",
    "después del concierto",
    "durante el viaje de fin de curso",
    "depués de las clases",
    "durante la misa del domingo",
    "durante la proyección de la película",
    "después del partido",
    "durante las vacaciones",
    "después del trabajo",
    "durante la reunión",
    "durante la cena",
    "antes de la boda",
    "durante la tormenta",
    "después de la ducha",
    "durante la conferencia",
    "durante el partido de fútbol",
    "después del partido de tenis",
    "durante la cena de Navidad",
    "después del Año Nuevo"
  ];

  function createExcuse() {
    let whoRamdom = who[Math.floor(Math.random() * who.length)];
    let actionRamdom = action[Math.floor(Math.random() * action.length)];
    let whatRamdom = what[Math.floor(Math.random() * what.length)];
    let whenRamdom = when[Math.floor(Math.random() * when.length)];

    return `${whoRamdom} ${actionRamdom} ${whatRamdom} ${whenRamdom}`;
  }

  const excuseElement = document.getElementById("excuse");
  const generatedExcuse = createExcuse();
  excuseElement.textContent = generatedExcuse;
};

function refreshPage() {
  location.reload();
}
