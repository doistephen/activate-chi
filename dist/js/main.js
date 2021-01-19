// write js code here
var body = document.querySelector("body");
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
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