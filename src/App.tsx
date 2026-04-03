import { useState, useEffect } from "react";
import Lottie from "lottie-react";

import redBallAnimation from "./animations/data.json";
import InfiniteVerticalText from "./scroll"
export default function App() {
  const [url, setUrl] = useState("");
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie load error:", err));
  }, [url]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0000FF",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      
      {/* 🔹 Input */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
        }}
      >
        <input
          type="text"
          placeholder="Встав URL JSON..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: "300px", padding: "8px" }}
        />
      </div>

      {/* 🔹 Lottie */}
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <InfiniteVerticalText />
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
