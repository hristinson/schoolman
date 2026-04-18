import { useRef, useEffect } from "react";
import ScrollDowncontainer from "../../scrollDowncontainer";
import { ReactComponent as Ximage } from "../../images/x.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Shareemail } from "../../images/shareemail.svg";
import { ReactComponent as Sharefb } from "../../images/sharefacebook.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

export default function Contacts() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number>(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent): void => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent): void => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX.current - endX;

      if (diff > 50) {
        alert("свайп вліво");
        // nextSlide();
      } else if (diff < -50) {
        alert("свайп вправо");
        // prevSlide();
      }
    };

    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
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