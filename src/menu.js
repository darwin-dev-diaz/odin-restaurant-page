import manguImage from "./Mangu.jpg";
import mofongoImage from "./Mofongo.png";
import sancochoImage from "./Sancocho.jpg";
import tostonesImage from "./Tostones.jpeg";

const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");

const menuObjList = [
  {
    imgSrc: sancochoImage,
    title: "Sancocho",
    description:
      "Sancocho is a traditional food in the Dominican Republic made with many kinds of meat with large pieces of plantain.",
  },
  {
    imgSrc: mofongoImage,
    title: "Mofongo",
    description:
      "Mofongo is a popular Dominican dish made with fried green plantains mashed by hand together with chicharrones (crispy pork skin) and fresh garlic.",
  },
  {
    imgSrc: manguImage,
    title: "Mangu",
    description:
      "Mangu, or Dominican mashed plantains – one of Dominicans' most beloved dishes, and base of 'Los Tres Golpes' – is our gastronomy's most complete and complex breakfast",
  },
  {
    imgSrc: tostonesImage,
    title: "Tostones",
    description:
      "A staple dish throughout the Caribbean and Latin America, tostones are crisp, flattened plantains that are often served as appetizers and side dishes.",
  },
];

for (let i = 0; i < 10; i++) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const img = document.createElement("img");
  img.src = menuObjList[i % 4].imgSrc;
  menuItem.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = menuObjList[i % 4].title;
  menuItem.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = menuObjList[i % 4].description;
  menuItem.appendChild(p);

  menuContainer.appendChild(menuItem);
}

export { menuContainer };
