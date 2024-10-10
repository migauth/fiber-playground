/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

const Models = [{ title: "Wrench", url: "/img/wrench.glb" }];

// eslint-disable-next-line react/prop-types
function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function App() {
  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title),
    },
  });

  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Environment files="/img/workshop_1k.hdr" background />
        <group>
          <Model url={Models[Models.findIndex((m) => m.title === title)].url} />
        </group>

        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
      <span id="info">The {title} is selected.</span>
    </>
  );
}
