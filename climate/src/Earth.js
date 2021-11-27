import React, { useContext, useRef } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "./assets/textures/8k_earth_daymap.jpeg";
import EarthNormalMap from "./assets/textures/8k_earth_normal_map.jpeg";
import EarthSpecularMap from "./assets/textures/8k_earth_specular_map.jpeg";
import EarthCloudsMap from "./assets/textures/8k_earth_clouds.jpeg";
import { TextureLoader } from "three";

import Context from "./Context";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  const a = useContext(Context);
  useFrame(({ camera, clock }) => {
    console.log(a);
    // if (zoom != camera.zoom) {
    //   if (zoom < camera.zoom) {
    //     camera.zoom -= 0.01;
    //   } else {
    //     camera.zoom += 0.01;
    //   }
    // }
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 24;
    cloudsRef.current.rotation.y = elapsedTime / 24;

    camera.updateProjectionMatrix();
  });

  return (
    <>
      <pointLight color="#ffffff" position={[1.5, 0, 5]} intensity={2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
}
