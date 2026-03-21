import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import redBallAnimation from "./animations/ball.json";

export default function App() {

  const [ballScale, setBallScale] = useState(0);
  const updateScale = () => {
    const { innerWidth } = window;
    const scale = 2500 / innerWidth;
    setBallScale(scale);
  };

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);


  const scaledAnimation = {
    ...redBallAnimation,
    layers: redBallAnimation.layers.map((layer) => ({
      ...layer,
      ks: {
        ...layer.ks,
        s: { ...layer.ks.s, k: layer.ks.s.k.map((v) => v * ballScale) },
      },
      shapes: layer.shapes?.map((shape) => {
        if (shape.ty === "el") {
          return shape.s ? {
            ...shape,
            s: {
              ...shape.s,
              k: shape.s.k.map((v) => v * ballScale),
            },
          }  : {};
        }
        return shape;
      }),
    })),
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Lottie
        animationData={scaledAnimation}
        loop={true}
        autoplay={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
