import "./App.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Center, Stats } from "@react-three/drei";
import { Vector3 } from 'three'
import Button from "./Button";

const vec = new Vector3();


export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Environment preset="warehouse" background />
        <Center>
          {[...Array(5).keys()].map((x) =>
            [...Array(3).keys()].map((y) => (
              <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
            ))
          )}
        </Center>
        <OrbitControls />
        <Stats />
      </Canvas>
    </>
  );
}
