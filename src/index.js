import "./reset.css";
import "./style.css";
import { imageContainer } from "./homepage.js";
import { menuContainer } from "./menu.js";
import { aboutContainer } from "./about.js";

const content = document.querySelector("#content");
content.appendChild(imageContainer);

const buttons = document.querySelectorAll("button");
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    content.innerHTML = "";
    if (i === 0) {
        content.appendChild(imageContainer);
    } else if (i === 1) {
        content.appendChild(menuContainer);
    } else {
        content.appendChild(aboutContainer);
    }
  });
});
