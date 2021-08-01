import "./style.css";

import "intersection-observer";
import scrollama from "scrollama";

const scroll = document.querySelector("#scroll");
const figure = document.querySelector("#figure");
const step = scroll.querySelectorAll(".step");

const scroller = scrollama();

function handleResize() {
  step.forEach(function (step) {
    const stepH = Math.floor(window.innerHeight * 0.5);
    step.style.paddingTop = stepH + "px";
    step.style.paddingBottom = stepH + "px";
  });

  const figureHeight = window.innerHeight / 2;
  const figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure.style.height = figureHeight + "px";
  figure.style.top = figureMarginTop + "px";

  scroller.resize();
}

const handleStepEnter = (response) => {
  // response = { element, direction, index }
  console.log(response);
  // add to color to current step
  response.element.classList.add("bg-blue-200");
};

const handleStepExit = (response) => {
  // response = { element, direction, index }
  console.log(response);
  // remove color from current step
  response.element.classList.remove("bg-blue-200");
};

const init = () => {
  // set random padding for different step heights (not required)
  handleResize();

  scroller
    .setup({
      step: "#scroll .step",
      // debug: true,
      // offset: 0.5,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  window.addEventListener("resize", scroller.resize);
};

// kick things off
init();
