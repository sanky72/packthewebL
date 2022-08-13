import Happy from "./Happy.jpg";

export default () => {
  const img = document.createElement("img");
  img.alt = "Happy";
  img.width = 500;
  img.src = Happy;
  const body = document.querySelector("body");
  body.appendChild(img);
};
