particlesJS.load("particles", "assets/particles.json", () => {
  console.log("callback - particles.js config loaded");
});

window.addEventListener("resize", () => {
  const particles = window.pJSDom[0].pJS;
  particles.canvas.w = window.innerWidth;
  particles.canvas.h = window.innerHeight;
  particles.canvas.el.width = window.innerWidth;
  particles.canvas.el.height = window.innerHeight;
  particles.fn.particlesDraw();
});

const curiositiesDetails = document.getElementById("curiosities-details");
const allDetailsInCuriosities = document.querySelectorAll(
  "#curiosities-details details"
);

curiositiesDetails.addEventListener("toggle", () => {
  if (!curiositiesDetails.open) {
    allDetailsInCuriosities.forEach((node) => {
      if (node.open) node.removeAttribute("open");
    });
  }
});
