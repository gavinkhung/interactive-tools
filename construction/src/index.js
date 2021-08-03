import { Deck } from "@deck.gl/core";
import { TextLayer } from "@deck.gl/layers";
import { TerrainLayer } from "@deck.gl/geo-layers";

import mapboxgl from "mapbox-gl";

import scrollama from "scrollama";
import "intersection-observer";

import "./style.css";

const scroll = document.querySelector("#scroll");
// const figure = document.querySelector("#figure");
const step = scroll.querySelectorAll(".step");

const scroller = scrollama();

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const INITIAL_VIEW_STATE = {
  latitude: 37.313702,
  longitude: -122.05674,
  zoom: 16.0,
  bearing: 0,
  pitch: 0,
};

const TERRAIN_IMAGE = `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;
const SURFACE_IMAGE = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

// https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb
// Note - the elevation rendered by this example is greatly exagerated!
const ELEVATION_DECODER = {
  rScaler: 6553.6,
  gScaler: 25.6,
  bScaler: 0.1,
  offset: -10000,
};

const map = new mapboxgl.Map({
  container: "map",
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

  const handleStepEnter = (response) => {
    const newLayers = [];
    newLayers.push(
      new TerrainLayer({
        id: "terrain",
        minZoom: 0,
        maxZoom: 23,

        elevationDecoder: ELEVATION_DECODER,
        elevationData: TERRAIN_IMAGE,
        texture: SURFACE_IMAGE,
        wireframe: false,
        color: [255, 255, 255],
      })
    );

    if (response.element.classList.contains("top-view-layer")) {
      deck.setProps({
        viewState: {
          longitude: INITIAL_VIEW_STATE.longitude,
          latitude: INITIAL_VIEW_STATE.latitude,
          zoom: 16.0,
          bearing: 0,
          pitch: 0,
        },
      });
    }
    if (response.element.classList.contains("side-view-layer")) {
      deck.setProps({
        viewState: {
          longitude: INITIAL_VIEW_STATE.longitude,
          latitude: INITIAL_VIEW_STATE.latitude,
          zoom: 16.9,
          bearing: 140,
          pitch: 60,
        },
      });

      // newLayers.push(
      //   new TextLayer({
      //     id: "text-layer",
      //     data: [
      //       {
      //         lat: 37.319431,
      //         long: -122.009125,
      //         name: "Cupertino High School",
      //       },
      //       {
      //         lat: 37.352589,
      //         long: -122.035172,
      //         name: "Fremont High School",
      //       },
      //       {
      //         lat: 37.336712,
      //         long: -122.04908,
      //         name: "Homestead High School",
      //       },
      //       {
      //         lat: 37.29805,
      //         long: -122.00721,
      //         name: "Lynbrook High School",
      //       },
      //       {
      //         lat: 37.313702,
      //         long: -122.05674,
      //         name: "Monta Vista High School",
      //       },
      //     ],
      //     getPosition: (d) => [d.long, d.lat],
      //     getText: (d) => d.name,
      //     getSize: 100,
      //     getAngle: 0,
      //     getTextAnchor: "middle",
      //     getAlignmentBaseline: "top",
      //     getPixelOffset: [0, 5],
      //   })
      // );

      deck.setProps({ layers: newLayers });
    }
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
