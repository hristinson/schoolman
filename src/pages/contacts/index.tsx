import { useRef } from "react";
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
      navigate("/program");
    },
    onSwipeRight: () => {
      navigate("/");
    },
  });

  const html = `<div class="sticky-audio-content" role="region" aria-label="Audio Player">
                <div class="sticky-top-row">
                    <button class="sticky-play-btn" id="sticky-play-btn" aria-label="Play" title="Play">
                        <svg class="play-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M8 5v14l11-7z" fill="currentColor"/>
                        </svg>
                        <svg class="pause-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;" aria-hidden="true">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/>
                        </svg>
                    </button>
                    
                    <div class="sticky-audio-text">
                        <div class="sticky-publication-title" id="sticky-publication-title"></div>
                        <div class="sticky-audio-title" id="sticky-audio-title"></div>
                    </div>
                    
                    <div class="sticky-audio-cover">
                        <img src="" alt="Audio Cover" id="sticky-cover-img">
                    </div>

                    <button class="sticky-close-btn sticky-close-btn-mobile" id="sticky-close-btn-mobile" aria-label="Close player" title="Close player">
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" aria-hidden="true">
                                <line x1="14" y1="4" x2="4" y2="14"></line>
                                <line x1="4" y1="4" x2="14" y2="14"></line>
                            </svg>
                    </button>
                </div>
                
                <div class="sticky-bottom-row">
                    <span class="current-time" aria-hidden="true">0:00</span>
                    <div class="progress-bar" id="progress-bar" role="slider" tabindex="0" aria-label="Seek slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="0:00">
                        <div class="progress-fill"></div>
                    </div>
                    <span class="duration" aria-hidden="true">0:00</span>
                </div>

                 <div class="volume-control">
                        <button class="volume-icon-btn" id="volume-icon-btn" aria-label="Mute, if you want to turn the sound off or on, press Enter or Space." title="Mute">
                            <svg class="volume-icon-svg" viewBox="0 0 25 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path class="volume-speaker" d="M12.5714 0.097441L4.84524 5.22642C4.75171 5.28877 4.63946 5.32307 4.5241 5.32307H0.579933C0.258787 5.32307 0 5.58186 0 5.903V13.5138C0 13.835 0.258787 14.0938 0.579933 14.0938H4.52722C4.64258 14.0938 4.75171 14.1281 4.84836 14.1904L12.5714 19.3194C12.9581 19.5751 13.4725 19.2976 13.4725 18.8361V0.580718C13.4725 0.119266 12.9581 -0.158228 12.5714 0.097441Z" fill="currentColor"/>
                                <path class="volume-wave-3" d="M20.1698 0.568247C19.9173 0.381172 19.593 0.303224 19.2781 0.359346C18.9663 0.415469 18.6857 0.599426 18.5111 0.864449L18.4893 0.898746C18.1775 1.40697 18.3053 2.0742 18.7886 2.43276C21.0865 4.13514 22.4584 6.85397 22.4584 9.70998C22.4584 12.566 21.0865 15.2879 18.7886 16.9872C18.3053 17.3458 18.1806 18.0099 18.4893 18.5212L18.5111 18.5555C18.6857 18.8205 18.9663 19.0045 19.2781 19.0606C19.3467 19.0731 19.4122 19.0793 19.4808 19.0793C19.7271 19.0793 19.9703 19.0014 20.1698 18.8517C23.057 16.7159 24.7781 13.2987 24.7781 9.70998C24.7781 6.12126 23.0539 2.70402 20.1698 0.568247Z" fill="currentColor"/>
                                <path class="volume-wave-2" d="M16.7058 3.814C16.4127 3.65187 16.0666 3.61757 15.7517 3.7267C15.443 3.83271 15.1905 4.06343 15.0627 4.36587C14.8257 4.91462 15.0377 5.54444 15.5553 5.83129C16.9646 6.61389 17.8407 8.09802 17.8407 9.7131C17.8407 11.3282 16.9646 12.8123 15.5553 13.5949C15.0377 13.8818 14.8257 14.5116 15.0627 15.0603C15.1905 15.3628 15.443 15.5935 15.7517 15.6995C15.8733 15.74 16.0012 15.7619 16.1259 15.7619C16.3254 15.7619 16.525 15.712 16.7027 15.6122C18.8353 14.418 20.1573 12.1607 20.1573 9.71622C20.1573 7.27177 18.8322 5.01128 16.7027 3.82023L16.7058 3.814Z" fill="currentColor"/>
                                <line class="volume-mute-line" x1="2" y1="2" x2="23" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="display: none;"/>
                            </svg>
                        </button>
                        <input tabindex="-1" type="range" min="0" max="100" value="80" step="5" class="volume-slider" id="volume-slider" aria-label="Volume">
                </div>
                    
                <button class="sticky-close-btn sticky-close-btn-desktop" id="sticky-close-btn" aria-label="Close player" title="Close player">
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" aria-hidden="true">
                            <line x1="14" y1="4" x2="4" y2="14"></line>
                            <line x1="4" y1="4" x2="14" y2="14"></line>
                        </svg>
                </button> 
            </div>`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;

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
