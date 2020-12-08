const marquee = document.querySelector("[data-marquee]");
if (marquee) {
  const marquees = new Array(1).fill(null);
  marquees.forEach((el) => {
    marquee.parentNode.append(marquee.cloneNode(true));
  });
}
