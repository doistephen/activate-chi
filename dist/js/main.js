var textCTA = document.getElementById("text-cta");
var html = document.querySelector("html");
var hoverObject = document.getElementById("text-cta-hover");

var hoverFunction = function hoverFunction() {
  var update;
  textCTA.addEventListener("mousemove", function (event) {
    cancelAnimationFrame(update);
    update = requestAnimationFrame(function () {
      html.style.setProperty("--mouseX", "".concat(event.clientX, "px"));
      html.style.setProperty("--mouseY", "".concat(event.clientY, "px"));
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
var marquee = document.querySelector("[data-marquee]");

if (marquee) {
  var marquees = new Array(1).fill(null);
  marquees.forEach(function (el) {
    marquee.parentNode.append(marquee.cloneNode(true));
  });
}
var modalSections = document.querySelectorAll(".has-modal");
var body = document.querySelector("body");
var classToCheck = "modal-open";
modalSections.forEach(function (section) {
  var prevClassState = section.classList.contains(classToCheck);
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName == "class") {
        var currentClassState = mutation.target.classList.contains(classToCheck);

        if (prevClassState !== currentClassState) {
          prevClassState = currentClassState;

          if (currentClassState) {
            body.classList.add("h-screen", "overflow-hidden");
          } else {
            body.classList.remove("h-screen", "overflow-hidden");
          }
        }
      }
    });
  });
  observer.observe(section, {
    attributes: true
  });
});
var organizers = document.querySelectorAll("[data-organizer=\"wrapper\"]");

var getHeights = function getHeights() {
  organizers.forEach(function (item) {
    var summary = item.querySelector("[data-organizer=\"summary\"]");
    var metadata = item.querySelector("[data-organizer=\"metadata\"]");
    var height = document.defaultView.getComputedStyle(summary).height;
    item.style.setProperty("--summary-height", height);
  });
};

getHeights();
var instances = tippy("[data-tippy-content]", {});
tippy.createSingleton(instances, {
  arrow: false,
  theme: "activate",
  delay: [200, 75],
  moveTransition: "transform 0.15s ease-out"
});