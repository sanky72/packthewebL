import Heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import React from "react";

const heading = new Heading();
heading.render("hello world");
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
