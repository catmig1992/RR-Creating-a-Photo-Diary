import { selectKoala } from "./index";

// Renders a card to display a single koala
export let renderKoalaCard = (koala) => {
  let koalaCard = document.createElement("div");
  koalaCard.setAttribute("class", "item");
  koalaCard.style.cursor = "pointer";
  koalaCard.addEventListener("click", () => {
    selectKoala(koala);
  });

  let koalaImage = renderKoalaCardImage(koala);
  let koalaContent = renderKoalaCardContent(koala);

  koalaCard.append(koalaImage, koalaContent);

  return koalaCard;
};

// Renders the image of a koala card
let renderKoalaCardImage = (koala) => {
  let imageContainer = document.createElement("div");
  let koalaImage = document.createElement("img");

  imageContainer.setAttribute("class", "image");

  koalaImage.setAttribute("src", koala.imageURL);

  imageContainer.append(koalaImage);

  return imageContainer;
};

// Renders the content of a koala card (their name and description)
let renderKoalaCardContent = (koala) => {
  let koalaContent = document.createElement("div");
  koalaContent.setAttribute("class", "content");

  let header = document.createElement("div");
  header.setAttribute("class", "header");
  header.append(koala.name);

  let descriptionParagraph = document.createElement("p");
  descriptionParagraph.append(koala.description);

  let descriptionContainer = document.createElement("div");
  descriptionContainer.setAttribute("class", "description");
  descriptionContainer.append(descriptionParagraph);

  koalaContent.append(header, descriptionContainer);

  return koalaContent;
};
