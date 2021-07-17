import "intersection-observer";
import scrollama from "scrollama";

const scroll = document.querySelector("#scroll");
const step = scroll.querySelectorAll(".step");

const scroller = scrollama();

function handleResize() {
  step.forEach(function (step) {
    const v = Math.floor(window.innerHeight * 0.25);
    step.style.padding = v + "px 0px";
  });

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

  // 1. setup the scroller with the bare-bones options
  // 		this will also initialize trigger observations
  // 2. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scroll .step",
      // debug: true,
      offset: 0.5,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  window.addEventListener("resize", scroller.resize);
};

// kick things off
init();
