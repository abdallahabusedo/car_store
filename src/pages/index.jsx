import { Canvas } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import Header from "../components/Header";
import { Section } from "@/components/Section";
import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import state from "@/components/state";
import { useInView } from "react-intersection-observer";
import Lights from "../components/Lights";
import { Cars } from "../components/Cars";
import Sidebar from "../components/Sidebar.jsx";
const Model = ({ modelPath }) => {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = ({
  bgColor,
  domContent,
  children,
  modelPath,
  positionY,
  modalPosition,
}) => {
  const ref = useRef(0);
  useFrame(() => (ref.current.rotation.y += 0.0035));
  const [refItem, inView] = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    inView && (document.body.style.backgroundColor = bgColor);
  }, [inView]);
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={modalPosition} rotation={[0, 20, 0]}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html portal={domContent} fullscreen>
          <div
            className="w-full h-full flex items-center justify-center"
            ref={refItem}
          >
            {children}
          </div>
        </Html>
      </group>
    </Section>
  );
};

export default function Home() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  React.useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <div className="h-screen">
      <Header />
      <Canvas camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          {Cars.map((car, index) => {
            return (
              <HTMLContent
                key={index}
                domContent={domContent}
                modelPath={car.modelPath}
                positionY={car.positionY}
                bgColor={car.bgColor}
                modalPosition={car.modalPosition}
              >
                {car.title}
              </HTMLContent>
            );
          })}
        </Suspense>
      </Canvas>
      <div
        className="absolute w-screen h-screen overflow-auto left-0 top-0"
        ref={scrollArea}
        onScroll={onScroll}
      >
        <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
    </div>
  );
}
