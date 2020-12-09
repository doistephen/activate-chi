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
var organizers = document.querySelectorAll("[data-organizer=\"wrapper\"]");

var getHeights = function getHeights() {
  organizers.forEach(function (item) {
    var summary = item.querySelector("[data-organizer=\"summary\"]");
    var metadata = item.querySelector("[data-organizer=\"metadata\"]");
    var height = document.defaultView.getComputedStyle(summary).height;
    item.style.setProperty("--summary-height", height);
  });
};

getHeights(); // window.addEventListener("resize", function () {
//   getHeights();
// });