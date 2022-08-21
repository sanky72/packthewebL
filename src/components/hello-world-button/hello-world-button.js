import "./hello-world-button.scss";
class HelloWorldButton {
  buttonCssClass = "hello-world-button";
  render() {
    //testing webpack

    const array1 = [5, 12, 8, 130, 44];

    let index = 2;

    console.log(
      `Using an index of ${index} the item returned is ${array1.at(index)}`
    );

    console.log(null ?? "hello");

    // done

    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);
    const body = document.querySelector("body");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
