import { useFrame } from "@react-three/fiber";
import React, { createContext, useContext } from "react";
import state from "./state";
import lerp from "lerp";
import { useThree } from "@react-three/fiber";
const offsetContext = createContext(0);
function Section({ children, offset, factor, id, ...props }) {
  const { offset: parentOffset, sectionHeight, aspect } = useSection();
  const ref = React.useRef();
  offset = offset !== undefined ? offset : parentOffset;
  useFrame(() => {
    const curY = ref.current.position.y;
    const curTop = state.top.current / aspect;
    ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1);
  });
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  );
}

function useSection() {
  const { sections, pages, zoom } = state;
  const { size, viewport } = useThree();
  const offset = useContext(offsetContext);
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const canvasWidth = viewportWidth / zoom;
  const canvasHeight = viewportHeight / zoom;
  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.2 : 0.1);
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
  const aspect = size.height / viewportHeight;
  return {
    aspect,
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    margin,
    mobile,
    contentMaxWidth,
    sectionHeight,
  };
}
export { Section, useSection };
