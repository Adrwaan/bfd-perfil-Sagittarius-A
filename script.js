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
