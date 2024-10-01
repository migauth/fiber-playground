/* eslint-disable react/no-unknown-property */

import { useRef } from "react";

function Box(props) {
  const ref = useRef()
  console.log(ref);

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}

export default Box;
