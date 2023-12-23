const redLights = document.querySelectorAll(".red");
const blueLights = document.querySelectorAll(".blue");

function toggleLights(lights) {
  lights.forEach((light) => {
    if (light.classList.contains("lights-on")) {
      light.classList.remove("lights-on");
    } else {
      light.classList.add("lights-on");
    }
  });
}

setInterval(() => toggleLights(blueLights), 800);
setInterval(() => toggleLights(redLights), 1600);
