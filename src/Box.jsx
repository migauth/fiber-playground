/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const ref = useRef();
  const [rotate, setRotate] = useState(false)

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += delta * rotate;
      ref.current.rotation.y += 0.5 * delta * rotate;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setRotate(!rotate)}
    >
      <boxGeometry />
      <meshBasicMaterial color={'lime'} wireframe/>
    </mesh>
  );
}
