import Heading from "./components/heading/heading";
import HappyImage from "./components/happy-image/happy-image";
import _ from "lodash";
const heading = new Heading();
heading.render(_.upperCase("happy"));
const happyImage = new HappyImage();
happyImage.render();
