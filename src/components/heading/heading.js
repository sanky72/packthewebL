import "./heading.scss";
class Heading {
  render() {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = "this is a heading";
    h1.classList.add("h1-class");
    body.appendChild(h1);
  }
}

export default Heading;
