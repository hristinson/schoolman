import { useRef } from "react";
import ScrollDowncontainer from "../../scrollDowncontainer";
import { useSwipe } from "../../hooks/useSwipe";
import { useNavigate } from "react-router-dom";

export default function Prorgam() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useSwipe(containerRef, {
    onSwipeLeft: () => {
      navigate("/");
    },
    onSwipeRight: () => {
      navigate("/contacts");
    },
  });

  return (
    <div className="appContainer" ref={containerRef}>
      the program
      <ScrollDowncontainer />
    </div>
  );
}
