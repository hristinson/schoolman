import Lottie from "lottie-react";
import headAnimation from "./animations/headAnimation.json";
import buttonAnimation from "./animations/buttonAnimation.json";
import ScrollUpcontainer from "./scrollUpcontainer";
import ScrollDowncontainer from "./scrollDowncontainer";
import Schoolman from "./components/schoolman";

export default function App() {
  return (
    <div className="appContainer">
      <Schoolman />
      <ScrollUpcontainer />

      <Lottie
        animationData={headAnimation}
        loop={true}
        autoplay={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
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
  );
}
