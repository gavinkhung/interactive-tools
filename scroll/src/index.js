import { Deck } from "@deck.gl/core";
import { ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import mapboxgl from "mapbox-gl";

import scrollama from "scrollama";
import "intersection-observer";

import "./style.css";

// temporary data
const data = [
  {
    zipcode: 95054,
    lat: 37.39631,
    long: -121.9614,
    cases: 969,
    population: 24264,
    rate: 3994,
    city: "Santa Clara",
  },
  {
    zipcode: 95118,
    lat: 37.25549,
    long: -121.88948,
    cases: 1456,
    population: 32560,
    rate: 4472,
    city: "San Jose",
  },
  {
    zipcode: 95121,
    lat: 37.30317,
    long: -121.80773,
    cases: 3015,
    population: 38102,
    rate: 7913,
    city: "San Jose",
  },

  {
    zipcode: 95008,
    lat: 37.27902,
    long: -121.95669,
    cases: 1721,
    population: 46513,
    rate: 3700,
    city: "Campbell",
  },
];
//

const scroll = document.querySelector("#scroll");
const figure = document.querySelector("#figure");
const step = scroll.querySelectorAll(".step");

const scroller = scrollama();

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const INITIAL_VIEW_STATE = {
  latitude: 37.3,
  longitude: -121.9,
  zoom: 9.75,
  minZoom: 9,
  maxZoom: 11,
  maxPitch: 5,
  pitch: 0,
  bearing: 0,
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

const map = new mapboxgl.Map({
  container: "map",
  style: MAP_STYLE,
  // Note: deck.gl will be in charge of interaction and event handling
  center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
  zoom: INITIAL_VIEW_STATE.zoom,
  bearing: INITIAL_VIEW_STATE.bearing,
  pitch: INITIAL_VIEW_STATE.pitch,
});

const deck = new Deck({
  canvas: "deck-canvas",
  width: "100%",
  height: "100%",
  initialViewState: INITIAL_VIEW_STATE,
  onViewStateChange: ({ viewState }) => {
    map.jumpTo({
      center: [viewState.longitude, viewState.latitude],
      zoom: viewState.zoom,
      bearing: viewState.bearing,
      pitch: viewState.pitch,
    });
  },
  layers: [],
});

function handleResize() {
  const stepH = Math.floor(window.innerHeight * 0.5);
  step.forEach(function (step) {
    step.style.paddingTop = stepH + "px";
    step.style.paddingBottom = stepH + "px";
  });

  scroller.resize();
}

const handleStepEnter = (response) => {
  response.element.classList.add("bg-gray-400");
  const newLayers = [];
  if (response.element.classList.contains("scatter-layer")) {
    newLayers.push(
      new ScatterplotLayer({
        id: "scatter-layer",
        data: data,
        opacity: 0.5,
        radiusScale: 100,
        radiusMinPixels: 1,
        wrapLongitude: true,
        getPosition: (d) => [d.long, d.lat],
        getRadius: (d) => Math.max(5, d.cases / 250),
        getFillColor: (d) => {
          return [
            255 * Math.random(),
            255 * Math.random(),
            255 * Math.random(),
          ];
        },
      })
    );
  } else if (response.element.classList.contains("text-layer")) {
    newLayers.push(
      new TextLayer({
        id: "text-layer",
        data,
        getPosition: (d) => [d.long, d.lat],
        getText: (d) => d.city,
        getSize: 8,
        getAngle: 0,
        getTextAnchor: "middle",
        getAlignmentBaseline: "center",
      })
    );
  }
  deck.setProps({ layers: newLayers });
};

const handleStepExit = (response) => {
  response.element.classList.remove("bg-gray-400");
};

const init = () => {
  // set random padding for different step heights (not required)
  handleResize();

  scroller
    .setup({
      step: "#scroll .step",
      // debug: true,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  window.addEventListener("resize", scroller.resize);
};

// kick things off
init();
