// import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import redBallAnimation from "./animations/1.json";

export default function App() {

  // const [ballScale, setBallScale] = useState(0);
  // const updateScale = () => {
  //   const { innerWidth } = window;
  //   let scale = 3;

  //   switch (true) {
  //     case innerWidth <= 480:
  //       scale = 3;
  //       break;
  //     case innerWidth <= 1024:
  //       scale = 2;
  //       break;
  //     default:
  //       scale = 3;
  //   }
  //   scale && setBallScale(scale);
  // };

  // useEffect(() => {
  //   updateScale();
  //   window.addEventListener("resize", updateScale);
  //   return () => window.removeEventListener("resize", updateScale);
  // }, []);

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
        animationData={redBallAnimation}
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
