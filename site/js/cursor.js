const textCTA = document.getElementById("text-cta");
const html = document.querySelector("html");
const hoverObject = document.getElementById("text-cta-hover");
const hoverFunction = function () {
  let update;
  textCTA.addEventListener("mousemove", function (event) {
    cancelAnimationFrame(update);
    update = requestAnimationFrame(function () {
      html.style.setProperty("--mouseX", `${event.clientX}px`);
      html.style.setProperty("--mouseY", `${event.clientY}px`);
    });
    hoverObject.classList.remove("opacity-0", "invisible");
    hoverObject.classList.add("opacity-100", "visible");
  });
};
hoverFunction();

textCTA.addEventListener("mouseleave", function () {
  hoverObject.classList.remove("opacity-100", "visible");
  hoverObject.classList.add("opacity-0", "invisible");
});
