const organizers = document.querySelectorAll(`[data-organizer="wrapper"]`);

const getHeights = function () {
  organizers.forEach((item) => {
    const summary = item.querySelector(`[data-organizer="summary"]`);
    const metadata = item.querySelector(`[data-organizer="metadata"]`);
    const height = document.defaultView.getComputedStyle(summary).height;
    item.style.setProperty("--summary-height", height);
  });
};

getHeights();
