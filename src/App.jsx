/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Canvas } from '@react-three/fiber'
import Box from "./Box";


function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Box position={[-0.75, 0, 0]} name="A" scale={[0.5, 0.5, 0.5]}/>
        <Box position={[0.75, 0, 0]} name="B"/>
      </Canvas>
    </>
  );
}

export default App;
