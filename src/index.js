// == Imports
import store from "src/store";
import {
  randomizeLastColor,
  randomizeFirstColor,
  changeDirectionToLeft,
  changeDirectionToRight,
  changeDirectionTo45,
  changeDirectionTo135,
  changeDirectionTo225,
  changeDirectionTo315
} from "src/actions";
import { randomHexColor, generateSpanColor } from "./utils";

// == Rendu dans le DOM
function renderNbColors() {
  const state = store.getState();
  // on lit le state
  const { nbColors } = state;

  // on le transpose vers une représentation le DOM
  document.getElementById("nbColors").innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById("gradient").style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { direction, firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result =
    direction === "90deg"
      ? `${firstSpan} → ${lastSpan}`
      : `${lastSpan} ← ${firstSpan}`;

  document.getElementById("colors").innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// == Abonnement = à chaque évolution du state on réagit
// store.subscribe(() => {
//   console.log('le state change je réagis');
// });
// on réagit en faisant le rendu = chaque évolution = rendu = lecture du state = transposition vers le dom
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById("randAll").addEventListener("click", () => {
  const color = randomHexColor();
  store.dispatch(randomizeFirstColor(color));
  const secondColor = randomHexColor();
  store.dispatch(randomizeLastColor(secondColor));
});

document.getElementById("randFirst").addEventListener("click", () => {
  const color = randomHexColor();
  store.dispatch(randomizeFirstColor(color));
});

document.getElementById("randLast").addEventListener("click", () => {
  // une action peut transporter / véhiculer d'autres infos que sont types
  // ces infos pourront être utilisées dans le reducer pour traduire l'évolution du state
  const colorToPass = randomHexColor();
  store.dispatch(randomizeLastColor(colorToPass));
});

document.getElementById("toLeft").addEventListener("click", () => {
  store.dispatch(changeDirectionToLeft());
});

// lors d'une intéraction
document.getElementById("toRight").addEventListener("click", () => {
  // on émet un intention = on dispatche une action = l'action attérit dans le reducer = le state évolue en fonction de l'action
  store.dispatch(changeDirectionToRight());
});

document.getElementById("to45").addEventListener("click", () => {
  // on émet un intention = on dispatche une action = l'action attérit dans le reducer = le state évolue en fonction de l'action
  store.dispatch(changeDirectionTo45());
});

document.getElementById("to135").addEventListener("click", () => {
  // on émet un intention = on dispatche une action = l'action attérit dans le reducer = le state évolue en fonction de l'action
  store.dispatch(changeDirectionTo135());
});

document.getElementById("to225").addEventListener("click", () => {
  // on émet un intention = on dispatche une action = l'action attérit dans le reducer = le state évolue en fonction de l'action
  store.dispatch(changeDirectionTo225());
});

document.getElementById("to315").addEventListener("click", () => {
  // on émet un intention = on dispatche une action = l'action attérit dans le reducer = le state évolue en fonction de l'action
  store.dispatch(changeDirectionTo315());
});
