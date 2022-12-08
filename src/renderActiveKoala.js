import { selectKoala } from "./index";

// Renders a big image of a selected koala
export let renderActiveKoala = (koala) => {
  let activeKoalaContainer = document.createElement("div");
  let backButton = document.createElement("button");
  let backIcon = document.createElement("i");
  let activeKoalaImage = document.createElement("img");

  backButton.setAttribute("class", "ui left labeled icon button");

  backIcon.setAttribute("class", "left arrow icon");

  activeKoalaImage.setAttribute("class", "ui rounded fluid image");

  activeKoalaImage.setAttribute("src", koala.imageURL);

  backButton.append(backIcon, "Back");

  backButton.addEventListener("click", () => {
    selectKoala(null);
  });

  activeKoalaContainer.append(backButton, activeKoalaImage);

  return activeKoalaContainer;
};
