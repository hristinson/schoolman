import Lottie from "lottie-react";
import headAnimation from "../../animations/head_new.json";
import buttonAnimation from "../../animations/buttonAnimation.json";
import ScrollUpcontainer from "../../scrollUpcontainer";
import ScrollDowncontainer from "../../scrollDowncontainer";
import Schoolman from "../../components/schoolman";
import packageJson from "../../../package.json";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
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
              navigate("/contacts");
            }}
            animationData={buttonAnimation}
            loop={true}
            autoplay={true}
            className="button"
          />
        </div>
        <ScrollDowncontainer />
      </div>
    </>
  );
}
