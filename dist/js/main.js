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