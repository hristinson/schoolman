import { useRef, useEffect } from "react";
import ScrollDowncontainer from "../../scrollDowncontainer";
import { ReactComponent as Ximage } from "../../images/x.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Shareemail } from "../../images/shareemail.svg";
import { ReactComponent as Sharefb } from "../../images/sharefacebook.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

export default function Contacts(): any {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number>(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handlePointerDown = (e: PointerEvent): void => {
      startX.current = e.clientX;
    };

    const handlePointerUp = (e: PointerEvent): void => {
      const diff = startX.current - e.clientX;

      if (diff > 50) {
        alert("свайп вліво");
        // nextSlide();
      } else if (diff < -50) {
        alert("свайп вправо");
        // prevSlide();
      }
    };

    element.addEventListener("pointerdown", handlePointerDown);
    element.addEventListener("pointerup", handlePointerUp);
    element.addEventListener('touchstart', (e) => {alert(e)});


    return () => {
      element.removeEventListener("pointerdown", handlePointerDown);
      element.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

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