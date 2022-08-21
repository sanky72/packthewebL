import Happy from "./Happy.jpg";
import altText from "./altText.txt";
export default () => {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 500;
  img.src = Happy;
  const body = document.querySelector("body");
  body.appendChild(img);
};
