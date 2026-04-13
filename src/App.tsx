import Lottie from "lottie-react";
import headAnimation from "./animations/head_new.json";
import buttonAnimation from "./animations/buttonAnimation.json";
import ScrollUpcontainer from "./scrollUpcontainer";
import ScrollDowncontainer from "./scrollDowncontainer";
import Schoolman from "./components/schoolman";
import packageJson from "../package.json";

export default function App() {
  return (
    <>
      <div className="version">version {packageJson.version}</div>
      <div className="appContainer">
        <Schoolman />
        <ScrollUpcontainer />
        <div className="headWrapper">
          <Lottie
            animationData={headAnimation}
            loop={true}
            autoplay={true}
            className="headMain"
          />
        </div>
        <div className="buttonContainer">
          <Lottie
            onClick={() => {
              alert("PRESS BUTTON");
            }}
            animationData={buttonAnimation}
            loop={true}
            autoplay={true}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <ScrollDowncontainer />
      </div>
    </>
  );
}
