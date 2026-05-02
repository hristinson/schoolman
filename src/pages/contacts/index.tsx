import { useRef, useEffect } from "react";
import ScrollDowncontainer from "../../scrollDowncontainer";
import { ReactComponent as Ximage } from "../../images/x.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Shareemail } from "../../images/shareemail.svg";
import { ReactComponent as Sharefb } from "../../images/sharefacebook.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import { useSwipe } from "../../hooks/useSwipe";
import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useSwipe(containerRef, {
    onSwipeLeft: () => {
      navigate("/");
    },
  });

  return (
    <div className="appContainer" ref={containerRef}>
      <div className="linksContainer">
        <Ximage />
        <Instagram />
        <Shareemail />
        <Sharefb />
        <Linkedin />
      </div>

      <ScrollDowncontainer />
    </div>
  );
}
