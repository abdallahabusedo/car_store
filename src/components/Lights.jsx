import React from "react";

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 20, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={15} />
      <spotLight position={[1000, 1000, 0]} intensity={1} />
    </>
  );
}

export default Lights;
