const container = document.getElementById("container");
const unsplashURL = "https://source.unsplash.com/random/";

for (let i = 0; i < 15; i++) {
  const img = document.createElement("img");
  img.alt = "random images";
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
