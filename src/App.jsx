import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Model from "./Shoe";

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2] }}>
        <Environment preset="forest" />
        <Model />
        <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
        <OrbitControls autoRotate />
      </Canvas>
    </>
  );
}
