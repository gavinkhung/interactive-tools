import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";

function App() {
  return (
    <div className="w-full h-full flex">
      <div className="flex-1">
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex-1">
        <h1 className="text-white">Climate Change</h1>
      </div>
    </div>
  );
}

export default App;
