import { useEffect, useState } from "react";
import "./Mobile.scss";

export const Mobile = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const theme = document.documentElement.getAttribute("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <section className="mobile__section">
      <div className="mobile__image">
        <img
          className="mobile__stan"
          src={`assets/mobile/mobile_${theme}.webp`}
          alt="Das Maskottchen Stan zeigt einen Screenshot der mobilen Version von Scrumlr"
        />
        <img
          className="mobile__background"
          src={`assets/mobile/mobile_background_${theme}.svg`}
          alt=""
        />
      </div>
      <div className="mobile__text">
        <h2>
          Verwende Scrumlr überall und zu jeder Zeit- auch auf deinem
          Smartphone!
        </h2>
        <p>
          Verpasse unterwegs keine Retrospektive mehr! Verwende dazu einfach
          Scrumlr auf deinem Smartphone.
        </p>
        <img
          className="mobile__dots"
          src="assets/mobile/mobile_dots.svg"
          alt=""
        />
      </div>
    </section>
  );
};
