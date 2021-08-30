const colorsClass = [
  ".color-basic-html",
  ".color-formatting",
  ".color-forms-and-input",
  ".color-frames",
  ".color-images",
  ".color-audio-video",
  ".color-links",
  ".color-lists",
  ".color-tables",
  ".color-styles-and-semantics",
  ".color-meta-info",
  ".color-programming",
];

const colors = [
  "#ff9f02",
  "#fed650",
  "#ff7143",
  "#feb2b2",
  "#64b5f6",
  "#bbdefa",
  "#8493ca",
  "#48c569",
  "#a7e4bb",
  "#d4e388",
  "#bd91ff",
  "#e4d3ff",
];

const legendColors = document.querySelectorAll(".color-legend-item");

document
  .querySelector("div.color-all-elements")
  .parentElement.addEventListener("click", () => {
    colorsClass.map((colorClass, index) => {
      document.querySelectorAll(`button${colorClass}`).forEach((item) => {
        item.style.backgroundColor = colors[index];
      });
    });
  });

legendColors.forEach((legendColor) => {
  legendColor.addEventListener("click", () => {
    const classList = legendColor.children[0].classList[0];
    // console.log(classList);
    const filteredColors = colorsClass.filter(
      (color) => color !== `.${classList}`
    );

    document.querySelector(`button.${classList}`).style.backgroundColor =
      colors[colorsClass.indexOf(`.${classList}`)];

    filteredColors.forEach((color) => {
      document.querySelectorAll(`button${color}`).forEach((item) => {
        item.style.backgroundColor = "#fff";
      });
    });
  });
});
