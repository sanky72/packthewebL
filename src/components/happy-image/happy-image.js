import Happy from "./Happy.jpg";
import "./happy-image.scss";
class HappyImage {
  render() {
    const img = document.createElement("img");
    img.src = Happy;
    img.alt = "Happy";
    img.classList.add("happy-image");

    const bodyDomElement = document.querySelector("body");
    bodyDomElement.appendChild(img);
  }
}

export default HappyImage;
