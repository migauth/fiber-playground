/* eslint-disable react/no-unknown-property */
import "./App.css";
import Polyhedron from "./Polyhedron";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from 'react'
import Floor from "./Floor";

function Lights() {

  const directionalRef = useRef() 
  
  useControls("Directional Light", {
    visible: true,
    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
    },
    castShadow: true,
  });

  return (
    <>
    <directionalLight ref={directionalRef}  castShadow />
    </>
  );
}

export default function App() {
  return (
    <Canvas shadows camera={{ position: [4, 4, 1.5] }}>
      <Lights />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial({ color: 'yellow' })}

      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={
          new THREE.MeshPhongMaterial({ color: 'lime', flatShading: true })
        }
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={
          new THREE.MeshStandardMaterial({
            color: 0xff0033,
            flatShading: true,
          })
        }
      />
      <Floor />
      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}
