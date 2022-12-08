import { koalas } from "./koalas.js";
import { renderActiveKoala } from "./renderActiveKoala";
import { renderKoalaList } from "./renderKoalaList";

let activeKoala = null;

// Changes the active koala, then re-renders the page to display that koala
export let selectKoala = (koala) => {
  activeKoala = koala;
  render();
};
// Note: poor practice to export form index

// Called once when the page loads, and again every time a koala is selected
export let render = () => {
  let oldPage = document.querySelector(".koala-container");
  let newPage;
  if (activeKoala) {
    newPage = renderActiveKoala(activeKoala);
  } else {
    newPage = renderKoalaList(koalas);
  }
  newPage.classList.add("koala-container");
  oldPage.replaceWith(newPage);
};
// Note: poor practice to export form index

// Render the page after all functions are defined
render();
