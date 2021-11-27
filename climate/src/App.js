import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Earth } from "./Earth";

const articles = [
  {
    headline: "Headline 1",
    deck: "Deck 1",
    author: "John Doe",
    url: "https://elestoque.org/",
    zoom: 0.7,
  },
  {
    headline: "Headline 2",
    deck: "Deck 2",
    author: "John Doe",
    url: "https://elestoque.org/",
    zoom: 0.7,
  },
  {
    headline: "Headline 3",
    deck: "Deck 3",
    author: "John Doe",
    url: "https://elestoque.org/",
    zoom: 0.7,
  },
  {
    headline: "Headline 4",
    deck: "Deck 4",
    author: "John Doe",
    url: "https://elestoque.org/",
    zoom: 0.7,
  },
  {
    headline: "Headline 5",
    deck: "Deck 5",
    author: "John Doe",
    url: "https://elestoque.org/",
    zoom: 0.7,
  },
];

function App() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="w-full h-full flex">
      {/* <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas> */}
      <div className="flex-1">
        <Canvas>
          <Suspense fallback={null}>
            <Earth zoom={zoom} />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex-1 space-y-5 mx-5">
        <h1 className="text-white text-5xl">Climate Change</h1>
        <div className="space-y-3">
          {articles.map((article) => (
            <div className="p-4 bg-gray-500 hover:bg-gray-600 cursor-pointer backdrop-blur-md filter rounded-3xl shadow">
              <a
                href={article["url"]}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="flex flex-row space-x-2">
                  <div className="">
                    <img
                      className="w-20 h-20 rounded-xl object-cover"
                      src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&w=1160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="text-md font-bold text-gray-100">
                      {article["headline"]}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-300">
                      {" "}
                      {article["deck"]}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
