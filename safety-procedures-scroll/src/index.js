import { Deck } from "@deck.gl/core";
import { ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";

import mapboxgl from "mapbox-gl";

import scrollama from "scrollama";
import "intersection-observer";

import { fetchCasesPerCity, fetchSchoolLocations } from "./data";

import "./style.css";

const scroll = document.querySelector("#scroll");
// const figure = document.querySelector("#figure");
const step = scroll.querySelectorAll(".step");

const scroller = scrollama();

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const INITIAL_VIEW_STATE = {
  latitude: 37.3,
  longitude: -122,
  zoom: 10.75,
  minZoom: 9,
  maxZoom: 12,
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

const init = async () => {
  handleResize();

  const casesPerCity = await fetchCasesPerCity();
  const schoolLocations = await fetchSchoolLocations();

  const handleStepEnter = (response) => {
    const newLayers = [];

    if (response.element.classList.contains("heatmap-layer")) {
      newLayers.push(
        new HeatmapLayer({
          id: "heatmap-layer",
          data: casesPerCity,
          getPosition: (d) => [d.long, d.lat],
          getWeight: (d) => d.cases,
          aggregation: "SUM",
        })
      );
    }
    if (response.element.classList.contains("text-layer")) {
      newLayers.push(
        new ScatterplotLayer({
          id: "covid-santa-clara-visualization",
          data: schoolLocations,
          radiusScale: 100,
          radiusMinPixels: 1,
          wrapLongitude: true,

          getPosition: (d) => [d.long, d.lat],
          getRadius: (d) => 1,
        })
      );
      newLayers.push(
        new TextLayer({
          id: "text-layer",
          data: schoolLocations,
          getPosition: (d) => [d.long, d.lat],
          getText: (d) => d.name,
          getSize: 8,
          getAngle: 0,
          getTextAnchor: "middle",
          getAlignmentBaseline: "top",
          getPixelOffset: [0, 5],
        })
      );
    }

    deck.setProps({ layers: newLayers });
  };

  const handleStepExit = (response) => {};

  scroller
    .setup({
      step: "#scroll .step",
      // debug: true,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  window.addEventListener("resize", scroller.resize);
};

init();
