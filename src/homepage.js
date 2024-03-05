import HomePageImagePng from "./imageTwo.png"

const imageContainer = document.createElement('div');
imageContainer.classList.add("image-container");

const image =  document.createElement("img");
image.src = HomePageImagePng;

imageContainer.appendChild(image);

export {imageContainer};

// export the innerHTML of the div