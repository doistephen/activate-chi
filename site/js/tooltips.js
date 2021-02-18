const instances = tippy("[data-tippy-content]", {});
tippy.createSingleton(instances, {
  arrow: false,
  theme: "activate",
  delay: [200, 75],
  moveTransition: "transform 0.15s ease-out",
});
