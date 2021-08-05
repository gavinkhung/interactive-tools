import { Deck } from "@deck.gl/core";
import { ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";

import mapboxgl from "mapbox-gl";

import { fetchCasesPerCity, fetchSchoolLocations } from "./data";

import "./style.css";

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const INITIAL_VIEW_STATE = {
  latitude: 37.325,
  longitude: -122,
  zoom: 10.5,
  minZoom: 9,
  maxZoom: 11.5,
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
  interactive: true,
  center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
  zoom: INITIAL_VIEW_STATE.zoom,
  bearing: INITIAL_VIEW_STATE.bearing,
  pitch: INITIAL_VIEW_STATE.pitch,
});

// map.setMaxBounds([
//   [INITIAL_VIEW_STATE.longitude - 0.2, INITIAL_VIEW_STATE.latitude - 0.2],
//   [INITIAL_VIEW_STATE.longitude + 0.2, INITIAL_VIEW_STATE.latitude + 0.2],
// ]);

const init = async () => {
  const casesPerCity = await fetchCasesPerCity();
  const schoolLocations = await fetchSchoolLocations();

  const deck = new Deck({
    canvas: "deck-canvas",
    width: "100%",
    height: "100%",
    initialViewState: INITIAL_VIEW_STATE,
    controller: true,
    onViewStateChange: ({ viewState }) => {
      map.jumpTo({
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch,
      });
    },
    layers: [
      new HeatmapLayer({
        id: "heatmap-layer",
        data: casesPerCity,
        getPosition: (d) => [d.long, d.lat],
        getWeight: (d) => d.cases,
        aggregation: "SUM",
        pickable: true,
      }),
      new ScatterplotLayer({
        id: "popup-layer",
        data: casesPerCity,
        opacity: 0.0,
        radiusScale: 100,
        radiusMinPixels: 1,
        wrapLongitude: true,
        getPosition: (d) => [d.long, d.lat],
        getRadius: (d) => 5,
        onHover: ({ object, x, y }) => {
          const el = document.getElementById("tooltip");
          if (object) {
            const { city, zipcode, cases, population, rate } = object;
            el.innerHTML = `<h2>Zipcode: ${zipcode}</h2><h3>Population: ${population}</h3><h3>COVID-19 Cases: ${cases}</h3><h3>COVID-19 Case Rate: ${
              rate / 1000
            }%</h3>`;
            el.style.display = "block";
            el.style.opacity = 0.9;
            el.style.left = x + "px";
            el.style.top = y + "px";
          } else {
            el.style.opacity = 0.0;
          }
        },
        pickable: true,
      }),

      new ScatterplotLayer({
        id: "covid-santa-clara-visualization",
        data: schoolLocations,
        radiusScale: 100,
        radiusMinPixels: 1,
        wrapLongitude: true,

        getPosition: (d) => [d.long, d.lat],
        getRadius: (d) => 1,
      }),
      new TextLayer({
        id: "text-layer",
        data: schoolLocations,
        getPosition: (d) => [d.long, d.lat],
        getText: (d) => d.name,
        getSize: 10,
        getAngle: 0,
        getTextAnchor: "middle",
        getAlignmentBaseline: "top",
        getPixelOffset: [0, 5],
      }),
    ],
  });
};

init();
