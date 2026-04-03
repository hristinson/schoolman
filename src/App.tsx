import { useState, useEffect } from "react";
import Lottie from "lottie-react";

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
        backgroundColor: "black",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          paddingLeft: "26px",
        }}
      >
        <a href="https://catbox.moe/" target="_blank">
          https://catbox.moe/
        </a>
      </div>
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
    </div>
  );
}
